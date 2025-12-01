import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Checking database connection...');
    
    // Test connection
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    // Check if tables exist
    const userCount = await prisma.user.count();
    console.log(`📊 Users in database: ${userCount}`);
    
    if (userCount === 0) {
      console.log('⚠️  No users found. Database needs to be seeded.');
    } else {
      console.log('✅ Database has users.');
      
      // List all users
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          hashedPassword: true,
        }
      });
      
      console.log('\n👥 Existing users:');
      users.forEach(user => {
        console.log(`   - ${user.email} (${user.name}) - Password: ${user.hashedPassword ? '✓' : '✗'}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Database check failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
