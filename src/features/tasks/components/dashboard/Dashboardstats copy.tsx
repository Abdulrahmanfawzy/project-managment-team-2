import './Dashboardstats.css'
import { useEffect, useState } from "react";
import { TOKE, token } from "../constants/token";
import { CiFileOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const base_url = import.meta.env.VITE_API_URL;
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { date } from "zod";
type Chart ={
  month:string;
  value:number;
};
type FileItem = {
  id: number;
  name:string;
  original_name: string;
  mime_type: string;
  extension: string;
  file_type: string;
  size: number;
  status: string;
  url: string;
  download_url: string;
  uploaded_by: string;
  uploaded_by_id: number;
  is_attached: boolean;
  attachable_type: string | null;
  attachable_id: number | null;
  created_at: string;
  updated_at: string;
};


export default function Dashprod() {

const navigate = useNavigate()

 const [ChartData,setChartData] = useState<Chart[]>([]);
 const [Dataapi, setDataapi] = useState<FileItem[]>([]);
const [projectFilter, setProjectFilter] = useState("all");
const [timeFilter, setTimeFilter] = useState("this_year");
const [openProjectMenu, setOpenProjectMenu] = useState(false);
const [openTimeMenu, setOpenTimeMenu] = useState(false);


useEffect(() => {
  fetch(`${base_url}/dashboard/stats`, {
    headers: {
      Authorization: `Bearer ${TOKE}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("FULL DATA =", data);

      const monthly =
        data?.data?.chart_data?.monthly?.map((item: any) => ({
          month: item.month,
          value: item.progress,
        })) || [];

      setChartData(monthly);
    })
    .catch((err) => console.log(err));
}, []);

useEffect(() => {
    
  fetch(`${base_url}/files`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setDataapi(data.data);
    })
    .catch((err) => console.log(err));
}, []);
    console.log(Dataapi);
  const filteredChartData = ChartData; // هنطوره بعدين
  
return (
  <div className="w-[90%] mx-auto mt-4">
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

      {/* Column 1 */}
      <div
        className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md h-[420px] relative overflow-hidden"
      >

        <div className="relative z-10">

          {/* Header */}
          <div className="flex justify-between items-center mb-3">

            <h3 className="font-semibold text-gray-900">
              Project Overview
            </h3>

            <div className="flex gap-4 relative">

              {/* زر المشاريع */}
              <div className="relative">
                <button
                  onClick={() => setOpenProjectMenu(!openProjectMenu)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {projectFilter === "all"
                    ? "All Projects"
                    : projectFilter === "one"
                    ? "Project One"
                    : "Project Two"}
                </button>

                {openProjectMenu && (
                  <div className="absolute top-6 left-0 bg-white shadow-lg rounded-lg w-40 p-2 z-50">
                    <p
                      onClick={() => {
                        setProjectFilter("all");
                        setOpenProjectMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      All Projects
                    </p>

                    <p
                      onClick={() => {
                        setProjectFilter("one");
                        setOpenProjectMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Project One
                    </p>

                    <p
                      onClick={() => {
                        setProjectFilter("two");
                        setOpenProjectMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Project Two
                    </p>
                  </div>
                )}
              </div>

              {/* زر الزمن */}
              <div className="relative">
                <button
                  onClick={() => setOpenTimeMenu(!openTimeMenu)}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {timeFilter === "today"
                    ? "Today"
                    : timeFilter === "week"
                    ? "This Week"
                    : timeFilter === "month"
                    ? "This Month"
                    : timeFilter === "3month"
                    ? "Last 3 Month"
                    : "This Year"}
                </button>

                {openTimeMenu && (
                  <div className="absolute top-6 right-0 bg-white shadow-lg rounded-lg w-40 p-2 z-50">
                    <p
                      onClick={() => {
                        setTimeFilter("today");
                        setOpenTimeMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Today
                    </p>

                    <p
                      onClick={() => {
                        setTimeFilter("week");
                        setOpenTimeMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      This Week
                    </p>

                    <p
                      onClick={() => {
                        setTimeFilter("month");
                        setOpenTimeMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      This Month
                    </p>

                    <p
                      onClick={() => {
                        setTimeFilter("3month");
                        setOpenTimeMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Last 3 Month
                    </p>

                    <p
                      onClick={() => {
                        setTimeFilter("year");
                        setOpenTimeMenu(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      This Year
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Chart */}
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ChartData}>
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
                  formatter={(value) => [`${Number(value ?? 0) / 1000}k`]}
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

        {/* wave */}
        <div className="absolute bottom-20 left-0 w-full h-[110px] z-0">
          <svg viewBox="0 0 1000 220" className="w-full" preserveAspectRatio="none">
            <path
              fill="#DBEAFE"
              d="M0,96 C240,180 480,20 720,96 C960,170 1200,40 1440,100 L1440,320 L0,320 Z"
            />
            <path
              fill="#60a5fa"
              fillOpacity="0.4"
              d="M0,150 C300,220 550,60 800,140 C1050,220 1240,120 1440,180 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

      </div>

      {/* Column 2 */}
            <div className="xl:col-span-1 bg-white rounded-2xl p-6 
            shadow-sm hover:shadow-md h-[420px]">


        <div className="flex justify-between mb-6">
          <h3 className="font-semibold">
            Active Projects
          </h3>

         
          
    <button onClick={()=> navigate('/projects')} className="text-blue-500 text-sm font-medium hover:underline">
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
<div className="xl:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md h-[420px]">

  <div className="flex justify-between mb-6">
    <h3 className="font-semibold text-gray-800">
      Recent Files
    </h3>

    <button onClick={()=> navigate("/Files")} className="text-blue-500 text-sm font-medium hover:underline">
      View All
    </button>
  </div>
<div className="space-y-1 overflow-y-auto h-[330px]">
  {Dataapi.map((item, index) => {
    const ext = item.extension?.toLowerCase();

    const getIcon = () => {
      if (ext === "pdf")
        return <CiFileOn style={{ color: "#ff0000" }} />;

      if (
        ext === "jsx" ||
        ext === "js" ||
        ext === "tsx" ||
        ext === "ts"
      )
        return "📄";

      if (ext === "sql") return "🗄️";
      if (ext === "png" || ext === "jpg" || ext === "jpeg") return "🖼️";
      if (ext === "zip" || ext === "rar") return "🗜️";

      return "📄";
    };

    return (
      <div
        key={item.id ?? index}
        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
      >
        {/* الشمال */}
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getIcon()}</span>

          <div>
            <p className="text-sm font-medium text-gray-800 leading-tight">
              {item.name}
            </p>

            <span className="text-xs text-gray-400">
              By {item.uploaded_by ?? "Unknown"} •{" "}
              {item.created_at
                ? new Date(item.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "No time"}
            </span>
          </div>
        </div>

        {/* download */}
        <a
          href={item.download_url ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    );
  })}
</div>
</div>

      </div>

    </div>
);
    
}    

