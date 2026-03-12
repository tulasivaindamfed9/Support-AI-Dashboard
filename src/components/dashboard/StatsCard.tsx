interface StatsCardProps {
  title: string
  value: number
  color: string
}

const StatsCard = ({ title, value, color }: StatsCardProps) => {

  return (

    <div className={`p-6 rounded-lg shadow bg-white border-l-4 ${color}`}>

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>

    </div>

  )
}

export default StatsCard