'use client'

import HeatmapContainer from "../components/containers/Heatmap.container";
import IconButton from "../components/ui/IconButton";

export default function Dashboard() {
  return (
    <main className="h-screen relative p-4">
      <HeatmapContainer />
      <div className="absolute right-4 bottom-4">
        <IconButton 
          onClick={() => undefined}
          variant="secondary"
          />
      </div>
   </main>
  );
}
