"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Zap,
  MessageCircle,
  Calendar,
  Users,
  Inbox,
  FileText,
  Sparkles,
  Workflow,
  Settings,
  CreditCard,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/app", icon: LayoutDashboard },
  { name: "AI Receptionist", href: "/app/receptionist", icon: MessageSquare },
  { name: "WhatsApp", href: "/app/whatsapp", icon: Zap },
  { name: "Chat Widget", href: "/app/chat-widget", icon: MessageCircle },
  { name: "Bookings", href: "/app/bookings", icon: Calendar },
  { name: "CRM", href: "/app/crm", icon: Users },
  { name: "Inbox", href: "/app/inbox", icon: Inbox },
  { name: "Documents", href: "/app/documents", icon: FileText },
  { name: "Content", href: "/app/content", icon: Sparkles },
  { name: "Workflows", href: "/app/workflows", icon: Workflow },
  { name: "Settings", href: "/app/settings", icon: Settings },
  { name: "Billing", href: "/app/billing", icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/app" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-lg">Emerald AI</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}