import Heatmap from "../Heatmap";
import IconButton from "../ui/IconButton";

export default function HeatmapContainer() {

    return (
        <div className="max-w-3xl p-2 border-2 border-zinc-400 rounded-2xl">
            <div className="flex items-center">
                <IconButton />
                <Heatmap />
            </div>
        </div>
    )
}