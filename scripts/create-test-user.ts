import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    console.log('👤 Creating test user...');
    
    const email = 'test@emeraldai.com';
    const password = 'password123';
    const name = 'Test User';
    
    // Check if user exists
    const existing = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existing) {
      console.log('⚠️  User already exists:', email);
      return;
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      }
    });
    
    console.log('✅ Test user created successfully!');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
    console.log(`   User ID: ${user.id}`);
    
  } catch (error) {
    console.error('❌ Failed to create test user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();
