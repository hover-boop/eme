import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/db"
import { Role } from "@prisma/client"
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession["user"]
    currentOrgId: string
    role: Role
  }

  interface User {
    currentOrgId: string | null
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          include: {
            memberships: {
              include: { organization: true }
            }
          }
        })

        if (!user || !user.hashedPassword) {
          return null
        }

        // Use dynamic import for bcrypt to avoid edge runtime issues
        const bcrypt = await import("bcryptjs")
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword
        )

        if (!isValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          currentOrgId: user.memberships[0]?.organizationId || null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.currentOrgId = (user as any).currentOrgId
      }

      if (trigger === "update" && session?.currentOrgId) {
        token.currentOrgId = session.currentOrgId
      }

      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.currentOrgId = token.currentOrgId as string

        if (token.currentOrgId) {
          const membership = await prisma.membership.findFirst({
            where: {
              userId: token.id as string,
              organizationId: token.currentOrgId as string
            }
          })

          session.role = membership?.role as Role
        }
      }

      return session
    }
  }
})