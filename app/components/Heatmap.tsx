export default function Heatmap() {

    const generateDates = (daysBack = 365) => {
        const dates = [];
        const today = new Date();

        for (let i = daysBack; i >= 0; i--) {
            const date = new Date(today);

            date.setDate(today.getDate() + i);

            dates.push({
                date: date.toISOString().split('T')[0],
                isCompleted: undefined,
            })
        }

        return dates;
    }

    const dates = generateDates();

  return (
    <div className="w-full grid grid-rows-7 grid-flow-col gap-1">
      { dates.map((item, index) => {

        const weekDay = new Date(item.date).getDay()
        const cssAjustement = weekDay === 0 ? 7 : weekDay

        const isFirstWeekDay = index === 0

        return (
            <div key={index} style={{
                gridRowStart: isFirstWeekDay ? cssAjustement : 'auto'
            }}>
                { item.isCompleted === undefined ? 
                        <div className="w-2 h-2 bg-white"></div>
                    : item.isCompleted === false ?
                        <div className="w-2 h-2 bg-red-300">x</div>
                    :   <div className="w-2 h-2 bg-green-300"></div>
                
                }
            </div>
        )
      })}
    </div>
  );
}
