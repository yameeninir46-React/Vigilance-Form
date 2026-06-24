import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import { VigilanceReportTable } from "@/components/VigilanceReportTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 antialiased">
      <VigilanceReportTable /> 
    </div>
  );
};

export default Index;  
