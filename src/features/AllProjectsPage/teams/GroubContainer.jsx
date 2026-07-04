export default function GroubContainer({ sections }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
      {sections?.map((section) => (
        <div
          key={section.id}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
        >
          <div className="p-4 bg-blue-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 border-b border-gray-50">
            <h2 className="text-xl font-bold text-gray-900 tracking-wide">
              {section.name}
            </h2>

            <span className="text-xs font-bold text-blue-600 whitespace-nowrap">
              {section.members_count} Members
            </span>
          </div>

          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between text-[11px] font-bold text-gray-400 tracking-wider uppercase px-1">
              <span>Name</span>
              <span>Status</span>
            </div>

            <div className="flex flex-col gap-4">
              {section.members?.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between gap-2 p-2 rounded-xl"
                >
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <img
                      src={member.avatar_url}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-gray-800 truncate">
                        {member.name}
                      </h4>

                      <span className="text-[10px] text-gray-400 font-semibold truncate">
                        {member.email}
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span
                      className={`text-xs font-bold ${
                        member.availability_status === "available"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {member.availability_status}
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