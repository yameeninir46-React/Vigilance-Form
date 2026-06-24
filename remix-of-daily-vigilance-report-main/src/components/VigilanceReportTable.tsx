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
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openEmployee, setOpenEmployee] = useState(false);

 
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

  <div className="flex min-h-screen bg-[#eef1f7]">

    {/* Sidebar */}
      <div
  className={`bg-blue-900 text-white min-h-screen transition-all duration-300 flex flex-col ${
    openSidebar
      ? "w-64 p-4"
      : "w-24 p-3 items-center"
  }`}
>

 {/* Header */}
<div
  className={`flex items-center mb-6 w-full ${
    openSidebar
      ? "justify-between"
      : "justify-center"
  }`}
>

  {openSidebar && (
    <h1 className="text-xl font-bold">
      Menu
    </h1>
  )}

  <button
    onClick={() => setOpenSidebar(!openSidebar)}
    className="flex items-center justify-center"
  >
    <img
      src={
        openSidebar
          ? "/arrow-square-left.svg"
          : "/arrow-square-right.svg"
      }
      alt="toggle"
      className="w-6 h-6 brightness-0 invert"
    />
    
  </button>

</div>



  {/* Menu Items */}
  <div className="flex flex-col gap-3 w-full">

    {[
      {
        name: "Employee",
        icon: "/employee-icon.svg",
      },
      {
        name: "Finance",
        icon: "/finance-icon.svg",
      },
      {
        name: "Operations",
        icon: "/operations-icon.svg",
      },
      {
        name: "IT & Systems",
        icon: "/it-icon.svg",
      },
      {
        name: "Documents",
        icon: "/documents-icon.svg",
      },
      {
        name: "CS Power Companies",
        icon: "/power-icon.svg",
      },
      {
        name: "Help & Support",
        icon: "/support-icon.svg",
      },
    ].map((item) => (

      <div
        key={item.name}
        onClick={() => {

          if (item.name === "Employee") {
            setOpenEmployee(!openEmployee);
          }

          if (item.name === "Operations") {
            navigate("/operations");
          }

        }}
        className={`rounded-xl cursor-pointer transition hover:bg-blue-800 ${
          item.name === "Operations"
            ? "bg-blue-800"
            : ""
        }`}
      >

        <div
          className={`flex items-center ${
            openSidebar
              ? "justify-between px-3 py-3"
              : "justify-center py-4"
          }`}
        >

          {/* Left */}
          <div
            className={`flex items-center ${
              openSidebar
                ? "gap-3"
                : "flex-col gap-2"
            }`}
          >

            <img
              src={item.icon}
              alt={item.name}
              className="w-5 h-5 brightness-0 invert"
            />     


            <span
              className={`text-white text-center leading-tight ${
                openSidebar
                  ? "text-sm"
                  : "text-[11px]"
              }`}
            > 
              {item.name}
            </span>

          </div>
          
                {/* Dropdown Arrow */}
{openSidebar && (
  <img
    src="/arrow-down.svg"
    alt="dropdown"
    className="w-4 h-4 brightness-0 invert"
  />
)}
        </div>

        {/* Employee Dropdown */}
        {item.name === "Employee" &&
          openEmployee &&
          openSidebar && (

          <div className="ml-3 mb-3 bg-white rounded-xl p-4 flex flex-col gap-3 text-blue-700 shadow-md">

            <span className="cursor-pointer hover:text-blue-900">
              Pay slip
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Biometric attendance
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Employee web login
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              My briefcase
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Gradation list
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Birthday list
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              New pension scheme
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              SAP HR Manuals
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Cashless medical scheme
            </span>

            <span className="cursor-pointer hover:text-blue-900">
              Medical orders
            </span>

          </div>
        )}

      </div>
    ))}

  </div>

</div>



{/* Main Content */}
<div className="flex-1 flex flex-col">

  {/* Top Header */}
  <div className="bg-blue-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
    <h1 className="text-3xl font-bold">File HEader</h1>

    <span className="text-sm font-medium">
      Chhattisgarh State Power Distribution Company Limited
    </span>
  </div>

  {/* Page Content */}
  <div className="p-6">

    {/* Daily Vigilance Header Card */}
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-700" />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Daily Vigilance Report
            </h2>

            <p className="text-gray-500 text-sm">
              24 Oct 2023 — 06:00 to 09:00 UTC
            </p>
          </div>
        </div>

        <Button
          onClick={() => navigate("/vigilance-form-r1")}
          className="bg-blue-700 hover:bg-blue-800"
        >
          <Plus className="h-4 w-4 mr-2" />
          New R1 Report
        </Button>

      </div>

      <div className="flex gap-6 mt-5 text-sm">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>{criticalCount} Critical</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span>{warningCount} Warning</span>
        </div>

        <div>
          {sampleData.length} Events
        </div>

      </div>

    </div>

    {/* Table */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {/* Table Header */}
      <div
        className={cn(
          "grid items-center gap-4 px-6 py-4 bg-gray-100 border-b",
          GRID_COLS
        )}
      >
        <TableHeader sortKey="id" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>
          Event ID
        </TableHeader>

        <TableHeader sortKey="status" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>
          Status
        </TableHeader>

        <TableHeader sortKey="timestamp" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>
          Timestamp
        </TableHeader>

        <div>Description</div>

        <TableHeader sortKey="source" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>
          Source
        </TableHeader>

        <TableHeader sortKey="assignedTo" activeSort={sortKey} activeDir={sortDir} onSort={handleSort}>
          Assigned To
        </TableHeader>
      </div>

      {/* Rows */}
      {sorted.map((item) => (
        <div
          key={item.id}
          className={cn(
            "grid gap-4 px-6 py-4 border-b hover:bg-gray-50",
            GRID_COLS
          )}
        >
          <div>{item.id}</div>

          <StatusIndicator status={item.status} />

          <div>{item.timestamp}</div>

          <div>{item.description}</div>

          <div>{item.source}</div>

          <div>{item.assignedTo}</div>
        </div>
      
      ))}

  </div>

  </div>
  </div>

</div>
)};