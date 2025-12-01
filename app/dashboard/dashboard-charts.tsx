import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface RecentActivityProps {
  leads: Array<{
    id: string;
    name: string;
    stage: string;
    source: string | null;
    createdAt: Date;
  }>;
}

export function RecentActivity({ leads }: RecentActivityProps) {
  if (leads.length === 0) {
    return <div className="text-sm text-gray-500">No recent activity recorded.</div>;
  }

  return (
    <div className="space-y-6">
      {leads.map((lead) => {
        const initials = lead.name.substring(0, 2).toUpperCase();
        return (
          <div key={lead.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-emerald-100 text-emerald-700 font-medium text-xs">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{lead.name}</p>
              <p className="text-xs text-muted-foreground">
                via {lead.source || "Direct"}
              </p>
            </div>
            <div className="ml-auto font-medium text-xs">
               <span className={`px-2 py-1 rounded-full ${
                 lead.stage === 'NEW' ? 'bg-blue-100 text-blue-700' :
                 lead.stage === 'WON' ? 'bg-green-100 text-green-700' :
                 'bg-gray-100 text-gray-700'
               }`}>
                 {lead.stage}
               </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
