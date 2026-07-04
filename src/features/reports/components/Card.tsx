interface ICard{
    title: string;
    percentage: number;
    progress: number;
}

function Card({title, percentage, progress}:ICard) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center gap-3 text-black">
            <h2 className="text-lg">{title} Completion Rate</h2>
            <h2 className="text-2xl font-bold">${percentage}%</h2>
            <p className="text-sm">
                <span className="text-green-400">{progress}%</span> From Last Month
            </p>
        </div>
    )
}

export default Card
