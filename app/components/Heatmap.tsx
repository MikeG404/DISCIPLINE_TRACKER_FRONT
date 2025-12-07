export type DateItem = {
  date: string, 
  isCompleted: undefined | boolean
}

type HeatmapProps = {
  dates: DateItem[]
}

export default function Heatmap({dates}: HeatmapProps) {

  const squaresSizeStyles = "w-4 h-4";

  return (
    <div className="w-full grid grid-rows-7 grid-flow-col gap-1">
      {dates.map((item, index) => {

        const weekDay = new Date(item.date).getDay()
        const cssAjustement = weekDay === 0 ? 7 : weekDay

        const isFirstWeekDay = index === 0

        return (
            <div key={index} style={{
                gridRowStart: isFirstWeekDay ? cssAjustement : 'auto'
            }}>
                { item.isCompleted === undefined ? 
                        <div className={`${squaresSizeStyles} bg-zinc-400`}></div>
                    : item.isCompleted === false ?
                        <div className={`${squaresSizeStyles} bg-red-400`}>x</div>
                    :   <div className={`${squaresSizeStyles} bg-green-400`}></div>      
                }
            </div>
        )
      })}
    </div>
  );
}
