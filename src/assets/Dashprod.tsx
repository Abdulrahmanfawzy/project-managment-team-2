import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashprod() {
  const chartData = [
    { month: "Jan", value: 10000 },
    { month: "Feb", value: 13000 },
    { month: "Mar", value: 22000 },
    { month: "Apr", value: 9000 },
    { month: "May", value: 14000 },
    { month: "Jun", value: 20000 },
  ];

  return (
       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-4"> 
    {/* Column 1 */}
<div className="relative overflow-hidden bg-white w-[750px]  rounded-3xl p-6 shadow-sm hover:shadow-md transition h-[420px]">

  {/* المحتوى فوق الموج */}
  <div className="relative z-10">

    <div className="flex justify-between items-center  mb-6">

      <h3 className="font-semibold text-gray-900">
        Project Overview
      </h3>

      <div className="flex gap-4   ">

        <button className="text-sm text-gray-700   hover:text-black">
          All Projects
        </button>

        <button className="text-sm text-gray-700 hover:text-black">
          This Year
        </button>

      </div>

    </div>

    <div className="h-[320px]">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={chartData}> 

          <CartesianGrid
            strokeDasharray="10 3"
            vertical={false}
            stroke="#f3f4f6"
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}k`}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />
            <Tooltip
    contentStyle={{
      borderRadius: "14px",
      border: "none",
      boxShadow: "0 4px 20px rgba(0,0,0,.1)",
      
    }}
    
    formatter={(v) => [`${v / 1000}k`
, ]}
  />




          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
          />

   </LineChart>
      </ResponsiveContainer>

    </div>

  </div>

  {/* الموج داخل الكارت */}
  <div className="absolute bottom-20
   left-0 w-full  h-[110px] z-0">

    <svg
      viewBox="0 0 1000 220"
      className="w-full"
      preserveAspectRatio="none"
    >

      <path
        fill="#DBEAFE"
        d="
          M0,96
          C240,180
          480,20
          720,96
          C960,170
          1200,40
          1440,100
          L1440,320
          L0,320
          Z
        "
      />

      <path
        fill="#60a5fa"
        fillOpacity="0.4"
        d="
          M0,150
          C300,220
          550,60
          800,140
          C1050,220
          1240,120
          1440,180
          L1440,320
          L0,320
          Z
        "
      />

    </svg>

  </div>

</div>



      {/* Column 2 */}


      <div className="bg-white  ml-auto w-[400px] z-1 rounded-2xl p-6 shadow-sm hover:shadow-md transition h-[420px]">

        <div className="flex justify-between mb-6">
          <h3 className="font-semibold">
            Active Projects
          </h3>

          <button className="text-blue-500 text-sm">
            View All
          </button>
        </div>

        <div className="space-y-6">

          {[
            {
              name: "Alpha",
              percent: "71%",
              color: "bg-purple-500",
            },

            {
              name: "SepetGo",
              percent: "43%",
              color: "bg-teal-500",
            },
          ].map((item) => (
            <div key={item.name}>

              <div className="flex justify-between mb-2">
                <span>{item.name}</span>

                <span className="text-sm text-gray-400">
                  {item.percent}
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-100">

                <div
                  className={`${item.color} h-2 rounded-full`}
                  style={{
                    width: item.percent,
                  }}
                />

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Column 3 */}
      <div className="bg-white ml-auto w-[480px] z-1   rounded-2xl p-6 shadow-sm hover:shadow-md transition h-[420px]">

        <div className="flex justify-between mb-6">
          <h3 className="font-semibold">
            Recent Files
          </h3>

          <button className="text-blue-500 text-sm">
            View All
          </button>
        </div>

        <div className="space-y-5">

          {[
            "UX_Research_Summary.pdf",
            "Dashboard_Layout_React.jsx",
            "Database_Schema_v2.sql",
          ].map((file) => (
            <div
              key={file}
              className="p-3 rounded-xl hover:bg-gray-50 transition"
            >
              <p className="text-sm font-medium">
                {file}
              </p>

              <span className="text-xs text-gray-400">
                Last update today
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}