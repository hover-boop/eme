import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Zap, 
  Users, 
  Calendar, 
  TrendingUp, 
  Plus, 
  ArrowRight, 
  Clock
} from "lucide-react";
import Link from "next/link";
import { RecentActivity } from "@/components/app/dashboard/recent-activity";
import { DashboardCharts } from "@/components/app/dashboard/dashboard-charts";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.currentOrgId) {
    return <div className="p-8">No organization found. Please select one.</div>;
  }

  const orgId = session.currentOrgId;

  // 1. Fetch Core Metrics
  const [
    leadsCount, 
    bookingsCount, 
    conversationsCount, 
    aiInquiriesCount,
    recentLeads,
    upcomingBookings
  ] = await Promise.all([
    prisma.lead.count({ where: { organizationId: orgId } }),
    prisma.booking.count({ where: { organizationId: orgId } }),
    prisma.conversation.count({ where: { organizationId: orgId } }),
    // Approximation for AI inquiries (messages from AI role today)
    prisma.message.count({ 
      where: { 
        organizationId: orgId, 
        role: 'AI',
        createdAt: { gte: new Date(new Date().setHours(0,0,0,0)) } 
      } 
    }),
    // Fetch recent leads for activity feed
    prisma.lead.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, stage: true, createdAt: true, source: true }
    }),
    // Fetch upcoming bookings
    prisma.booking.findMany({
      where: { 
        organizationId: orgId,
        startTime: { gte: new Date() }
      },
      orderBy: { startTime: "asc" },
      take: 3,
      include: { customer: true }
    })
  ]);

  const metrics = [
    {
      title: "AI Inquiries Today",
      value: aiInquiriesCount.toString(),
      change: "+12% from yesterday",
      icon: MessageSquare,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Conversations",
      value: conversationsCount.toString(),
      change: "+5 new today",
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Leads",
      value: leadsCount.toString(),
      change: "+8% this week",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Bookings",
      value: bookingsCount.toString(),
      change: "3 upcoming",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-8 p-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Overview of your business performance and AI automation.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/app/content">
            <Button variant="outline" className="gap-2">
              <SparklesIcon className="w-4 h-4" />
              Create Content
            </Button>
          </Link>
          <Link href="/app/crm">
            <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
              <Plus className="w-4 h-4" />
              New Lead
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                <div className={`${metric.bgColor} p-2 rounded-full`}>
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                </div>
              </div>
              <div className="flex items-end justify-between pt-2">
                <div>
                  <div className="text-3xl font-bold">{metric.value}</div>
                  <p className="text-xs text-emerald-600 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {metric.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Main Chart Area (Occupies 4/7 width) */}
        <Card className="md:col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle>Lead Generation & Traffic</CardTitle>
            <CardDescription>Performance over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardCharts />
          </CardContent>
        </Card>

        {/* Recent Activity / Quick Stats (Occupies 3/7 width) */}
        <div className="md:col-span-3 space-y-6">
          {/* Upcoming Bookings */}
          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                Upcoming Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingBookings.length === 0 ? (
                <p className="text-sm text-gray-500">No upcoming bookings.</p>
              ) : (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium text-sm">{booking.customerName}</p>
                        <p className="text-xs text-gray-500">{booking.service}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-emerald-600">
                          {new Date(booking.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                        <p className="text-xs text-gray-400">
                          {new Date(booking.startTime).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/app/bookings">
                <Button variant="ghost" size="sm" className="w-full mt-4 text-emerald-600 hover:text-emerald-700">
                  View Calendar <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Leads Activity */}
          <Card className="shadow-sm">
             <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium">Recent Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity leads={recentLeads} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper Icon Component
function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}
