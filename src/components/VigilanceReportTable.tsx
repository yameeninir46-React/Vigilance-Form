import { ArrowUpDown, ArrowUp, ArrowDown, Shield, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type Status = "Critical" | "Warning" | "Info" | "Success";
type SortKey = "id" | "status" | "timestamp" | "description" | "source" | "assignedTo";
type SortDir = "asc" | "desc";

interface ReportItem {
  id: string;
  status: Status;
  timestamp: string;
  description: string;
  source: string;
  assignedTo: string;
}

const statusDotStyles: Record<Status, string> = {
  Critical: "bg-status-critical",
  Warning: "bg-status-warning",
  Info: "bg-status-info",
  Success: "bg-status-success",
};

const statusPriority: Record<Status, number> = {
  Critical: 0,
  Warning: 1,
  Info: 2,
  Success: 3,
};

const StatusIndicator = ({ status }: { status: Status }) => (
  <div className="flex items-center gap-2">
    <div className={cn("h-2 w-2 rounded-full shrink-0", statusDotStyles[status])} />
    <span className="font-medium text-xs">{status}</span>
  </div>
);

const TableHeader = ({
  children,
  sortKey,
  activeSort,
  activeDir,
  onSort,
}: {
  children: React.ReactNode;
  sortKey: SortKey;
  activeSort: SortKey;
  activeDir: SortDir;
  onSort: (key: SortKey) => void;
}) => {
  const isActive = activeSort === sortKey;
  const Icon = isActive ? (activeDir === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;

  return (
    <button
      onClick={() => onSort(sortKey)}
      className={cn(
        "flex cursor-pointer items-center gap-1.5 transition-colors duration-150",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
      <Icon className="h-3 w-3" />
    </button>
  );
};

const GRID_COLS = "grid-cols-[0.8fr_0.7fr_1.2fr_2fr_1fr_0.8fr]";

const sampleData: ReportItem[] = [
  { id: "EVT-7B3A9C", status: "Critical", timestamp: "2023-10-24 08:12:34", description: "Unauthorized access attempt detected on admin panel endpoint", source: "api-gateway-prod-04", assignedTo: "Sarah Chen" },
  { id: "EVT-4D1F8E", status: "Warning", timestamp: "2023-10-24 08:09:11", description: "CPU utilization exceeded 90% threshold on compute cluster", source: "monitor-node-12", assignedTo: "James Rivera" },
  { id: "EVT-9A2C7B", status: "Info", timestamp: "2023-10-24 08:05:47", description: "Scheduled maintenance window initiated for database replica", source: "db-replica-west-02", assignedTo: "Unassigned" },
  { id: "EVT-3E6D1A", status: "Success", timestamp: "2023-10-24 07:58:22", description: "SSL certificate renewal completed successfully", source: "cert-manager-01", assignedTo: "Alex Thompson" },
  { id: "EVT-8F4B2D", status: "Critical", timestamp: "2023-10-24 07:45:03", description: "Payment processing service returned 503 errors for 12 transactions", source: "payment-svc-prod-01", assignedTo: "Maria Garcia" },
  { id: "EVT-2C9E5F", status: "Warning", timestamp: "2023-10-24 07:32:18", description: "Memory leak detected in worker process — gradual increase over 6h", source: "worker-pool-03", assignedTo: "Unassigned" },
  { id: "EVT-6A1D4C", status: "Info", timestamp: "2023-10-24 07:20:55", description: "New deployment rolled out to staging environment v2.14.3", source: "ci-pipeline-main", assignedTo: "DevOps Team" },
  { id: "EVT-5B8G3H", status: "Success", timestamp: "2023-10-24 07:15:09", description: "Backup verification completed — all checksums valid", source: "backup-svc-east-01", assignedTo: "System" },
  { id: "EVT-1K7J9L", status: "Warning", timestamp: "2023-10-24 07:02:41", description: "Rate limiting triggered on public API — 2,400 req/s from single IP", source: "api-gateway-prod-02", assignedTo: "Sarah Chen" },
  { id: "EVT-0M3N6P", status: "Critical", timestamp: "2023-10-24 06:48:17", description: "Firewall rule bypass detected — escalation to security team initiated", source: "firewall-edge-01", assignedTo: "Security Team" },
];

export const VigilanceReportTable = () => {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<SortKey>("timestamp");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = useMemo(() => {
    return [...sampleData].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "status") {
        cmp = statusPriority[a.status] - statusPriority[b.status];
      } else {
        cmp = a[sortKey].localeCompare(b[sortKey]);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [sortKey, sortDir]);

  const criticalCount = sampleData.filter((d) => d.status === "Critical").length;
  const warningCount = sampleData.filter((d) => d.status === "Warning").length;

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-foreground" />
          <div>
            <h1 className="text-base font-semibold text-foreground font-mono tracking-tight">
              Daily Vigilance Report
            </h1>
            <p className="text-xs text-muted-foreground font-mono">24 Oct 2023 — 06:00 to 09:00 UTC</p>
          </div>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-status-critical" />
            <span className="text-muted-foreground">{criticalCount} Critical</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-status-warning" />
            <span className="text-muted-foreground">{warningCount} Warning</span>
          </div>
          <span className="text-muted-foreground">{sampleData.length} Events</span>
          <Button
            size="sm"
            className="gap-1.5 ml-2"
            onClick={() =>
              navigate("/vigilance-form-r1", {
                state: {
                  serialNumber: "SN-2023-0042",
                  uniqueNumber: "UN-78431",
                  bpNumber: "BP-90215",
                },
              })
            }
          >
            <Plus className="h-3.5 w-3.5" />
            New R1 Report
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="font-mono text-sm text-foreground bg-card rounded-lg border border-border overflow-hidden">
        {/* Table Header */}
        <div
          className={cn(
            "grid items-center gap-4 px-6 py-3",
            "text-xs font-medium uppercase tracking-[0.06em]",
            "border-b border-border",
            GRID_COLS
          )}
        >
          <TableHeader sortKey="id" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>Event ID</TableHeader>
          <TableHeader sortKey="status" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>Status</TableHeader>
          <TableHeader sortKey="timestamp" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>Timestamp</TableHeader>
          <div className="text-muted-foreground">Description</div>
          <TableHeader sortKey="source" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>Source</TableHeader>
          <TableHeader sortKey="assignedTo" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>Assigned To</TableHeader>
        </div>

        {/* Table Body */}
        <div>
          {sorted.map((item) => (
            <div
              key={item.id}
              className={cn(
                "grid cursor-pointer items-center gap-4 px-6 py-3",
                "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:bg-accent/50 active:scale-[0.995]",
                "shadow-[inset_0_-1px_0_0_hsl(var(--border))]",
                GRID_COLS,
                item.status === "Critical" && "bg-status-critical-bg",
                item.status === "Warning" && "bg-status-warning-bg"
              )}
            >
              <div className="font-medium tabular-nums">{item.id}</div>
              <StatusIndicator status={item.status} />
              <div className="text-muted-foreground tabular-nums">{item.timestamp}</div>
              <div className="truncate text-muted-foreground" title={item.description}>
                {item.description}
              </div>
              <div className="text-muted-foreground truncate text-xs" title={item.source}>
                {item.source}
              </div>
              <div className="text-muted-foreground">{item.assignedTo}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
