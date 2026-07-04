import "./DashboardCards.css";
import { PiClipboardLight } from "react-icons/pi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

function GaugeIcon({ percentage = 33, className = "" }) {
  const angle = 180 - (percentage / 100) * 180;
  const rad = (angle * Math.PI) / 180;
  const x = 20 + 14 * Math.cos(rad);
  const y = 20 + 14 * Math.sin(rad);
  const progress = (percentage / 100) * 44;

  return (

   
    <svg 
      width="40" 
      height="24" 
      viewBox="0 0 40 40" 
      fill="none" 
      className={`gauge-icon ${className}`} 
    >
      <path
        d="M6 20 A14 14 0 0 1 34 20"
        className="gauge-bg"
      />
      <path
        d="M6 20 A14 14 0 0 1 34 20"
        className="gauge-progress"
        strokeDasharray={`${progress} 44`}
        style={{ transition: "stroke-dasharray 0.4s ease" }}
      />
      {/* المؤشر */}
      <line
        x1="20"
        y1="20"
        x2={x}
        y2={y}
        className="gauge-needle"
        style={{ transition: "all 0.4s ease" }}
      />
      <circle cx={x} cy={y} r="1.2" className="gauge-dot" />
    </svg>
  );
}

// استخدامه في الكارت
<StatCard
  title="Completion Rate"
  value="33%"
  total="100"
  change="+22% from last month"
  color="icon-gray"
  barColor="bg-gray-800"
  icon={<GaugeIcon percentage={33} />}
/>
function StatCard({ title, value, change, total, icon, color, barColor }) {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <div>
          <p className="stat-title">{title}</p>
          <h3 className="stat-value">{value}</h3>
        </div>

        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      </div>

      <div className="stat-footer">
        <p className="stat-change">
          ▲ {change}
        </p>

        <span className="stat-total">
          {value}/{total}
        </span>
      </div>

      <span className={`bottom-line ${barColor}`}></span>
    </div>
  );
}

export default function DashboardCards() {
  return (
    <section style={{width:'1800px',paddingLeft:'12px'}} className="dashboard-wrapper">
      <div className="cards-grid">

        <StatCard
          title="Pending Tasks"
          value="32"
          total="94"
          change="+9% from last month"
          color="icon-orange"
          barColor="bg-orange"
          icon={<PiClipboardLight />}
        />

        <StatCard
          title="In Progress"
          value="40"
          total="94"
          change="+12% from last month"
          color="icon-blue"
          barColor="bg-blue"
          icon={<MdOutlineCalendarMonth/>}
        />

        <StatCard
          title="Completed"
          value="22"
          total="94"
          change="+16% from last month"
          color="icon-green"
          barColor="bg-green"
          icon={<IoMdCheckboxOutline/>}
        />

        <StatCard
          title="Completion Rate"
          value="33%"
          total="100"
          change="+22% from last month"
          color="icon-gray" // غيرت من purple ل gray
          barColor="bg-gray-800" // غيرت من purple ل gray
          icon={<GaugeIcon percentage={33} />} // هنا التعديل المهم
        />

      </div>
    </section>
  );
}