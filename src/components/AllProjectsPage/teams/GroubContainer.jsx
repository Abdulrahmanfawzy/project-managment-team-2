export default function GroubContainer({ sections }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
      {sections?.map((section) => (
        <div
          key={section.id}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
        >
          <div
            className={`p-4 ${section.colorTheme.bg} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 border-b border-gray-50`}
          >
            <h2 className="text-xl font-bold text-gray-900 tracking-wide">
              {section.title}
            </h2>
            <span
              className={`text-xs font-bold ${section.colorTheme.text} whitespace-nowrap`}
            >
              {section.completedPercentage}% Completed
            </span>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between text-[11px] font-bold text-gray-400 tracking-wider uppercase px-1">
              <span>Name</span>
              <span>Tasks</span>
            </div>

            <div className="flex flex-col gap-4">
              {section.members?.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between gap-2 p-2 rounded-xl"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <div className="relative flex-shrink-0">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                      />
                      {member.isLeader && (
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-blue-600 rounded-full flex items-center justify-center border border-white shadow-sm">
                          <svg
                            className="w-1.5 h-1.5 text-white fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="flex flex-col">
                        <h4 className="font-bold text-xs text-gray-800 truncate leading-tight">
                          {member.name}
                        </h4>
                        <span className="text-[10px] text-gray-400 font-semibold truncate mt-0.5">
                          {member.role}
                        </span>
                      </div>

                      <div className="w-full bg-blue-100/70 rounded-full h-1 mt-0.5">
                        <div
                          className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                          style={{
                            width: `${(member.tasksCompleted / member.totalTasks) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0 pl-1">
                    <span className="text-xs font-bold text-gray-600 font-mono">
                      {String(member.tasksCompleted).padStart(2, "0")}/
                      {String(member.totalTasks).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
