import Heatmap from "../Heatmap";
import IconButton from "../ui/IconButton";

export default function HeatmapContainer() {

    return (
        <div className="max-w-3xl bg-gray-800 p-4 rounded-2xl">
            <div className="flex items-center">
                <IconButton />
                <Heatmap />
            </div>
        </div>
    )
}