export default function Heatmap({ dates }) {

  const squaresSizeStyles = "min-w-2 min-h-2 rounded-xs";

  const renderGrid = (weeksCount) => {
    
    const minDays = weeksCount * 7;
    const targetTotalDays = weeksCount * 7; 

    let visibleDates = dates.slice(-targetTotalDays);

    const firstDateItem = visibleDates[0];

    if (!firstDateItem) return null; 

    const firstDayOfWeek = new Date(firstDateItem.date).getDay();
    const emptyDaysStart = (firstDayOfWeek + 6) % 7;

    const currentTotal = visibleDates.length + emptyDaysStart;
    const remainder = currentTotal % 7;
    const emptyDaysEnd = remainder === 0 ? 0 : 7 - remainder;

    const startFillers = Array(emptyDaysStart).fill({ isCompleted: undefined, id: "start-fill" });
    const endFillers = Array(emptyDaysEnd).fill({ isCompleted: undefined, id: "end-fill" });
    const finalGridData = [...startFillers, ...visibleDates, ...endFillers];

    return (
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        {finalGridData.map((item, index) => (
            <div key={index}>
                { item.isCompleted === undefined ? 
                        <div className={`${squaresSizeStyles} bg-zinc-400`}></div>
                    : item.isCompleted === false ?
                        <div className={`${squaresSizeStyles} bg-red-400`}></div>
                    :   <div className={`${squaresSizeStyles} bg-green-400`}></div>      
                }
            </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="block md:hidden">
        {renderGrid(17)}
      </div>

      <div className="hidden md:block">
        {renderGrid(52)} 
      </div>
    </div>
  );
}