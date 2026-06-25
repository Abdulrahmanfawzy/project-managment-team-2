export default function BottomSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      
      {/* 1. Tasks */}
      <div className="bg-white rounded-xl p-5 shadow-sm border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-900">Tasks</h3>
          <button className="text-sm text-blue-500 hover:underline">View All</button>
        </div>

        <div className="space-y-5">
          {/* Task 1 */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-900">Creat Wireframes</p>
              <span className="text-xs text-red-500 font-medium">High</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>due Today</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full" style={{width: '82%'}}></div>
            </div>
          </div>

          {/* Task 2 */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-900">User Research</p>
              <span className="text-xs text-yellow-600">Medium</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>due Dec 15</span>
              <span>42%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full" style={{width: '42%'}}></div>
            </div>
          </div>

          {/* Task 3 */}
          <div>
            <div className="flex justify-between mb-1">
              <p className="text-sm font-medium text-gray-900">Design Systems Updates</p>
              <span className="text-xs text-gray-400">Low</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>due Dec 20</span>
              <span>63%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full" style={{width: '63%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Teams */}
      <div className="bg-white rounded-xl p-5 shadow-sm border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-900">Teams</h3>
          <button className="text-sm text-gray-500">UI/UX ▼</button>
        </div>

        <div className="text-xs text-gray-500 grid-cols-2 mb-3">
          <span>Name</span>
          <span className="text-right">Tasks</span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">M</div>
              <span className="text-sm text-gray-900">Mohamed wahib</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{width: '85%'}}></div>
              </div>
              <span className="text-xs text-gray-500">12/14</span>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs">S</div>
              <span className="text-sm text-gray-900">Sara hussain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{width: '60%'}}></div>
              </div>
              <span className="text-xs text-gray-500">10/16</span>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center opacity-50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs">A</div>
              <span className="text-sm text-gray-900">Ali Mohamed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-1">
                <div className="bg-blue-500 h-1 rounded-full" style={{width: '40%'}}></div>
              </div>
              <span className="text-xs text-gray-500">4/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Up coming meetings */}
      <div className="bg-white rounded-xl p-5 shadow-sm border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-semibold text-gray-900">Up coming meetings</h3>
          <button className="text-sm text-blue-500 hover:underline">View All</button>
        </div>

        <div className="space-y-5">
          {/* Meeting 1 */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-gray-900">Design Review</p>
              <span className="text-xs text-gray-500">Today 📅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs text-gray-500">+3</span>
              <span className="text-xs text-gray-400 ml-auto">14:00 - 15:00</span>
            </div>
          </div>

          {/* Meeting 2 */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-gray-900">Sprint Planning Meeting</p>
              <span className="text-xs text-gray-500">Dec 12 📅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs text-gray-500">+4</span>
              <span className="text-xs text-gray-400 ml-auto">12:00 - 13:30</span>
            </div>
          </div>

          {/* Meeting 3 */}
          <div>
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium text-gray-900">UX Feedback Session</p>
              <span className="text-xs text-gray-500">Dec 14 📅</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs text-gray-500">+3</span>
              <span className="text-xs text-gray-400 ml-auto">14:00 - 15:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Ask AI */}
      <div className="bg-white rounded-xl p-5 shadow-sm border-gray-100 flex-col">
        <h3 className="text-base font-semibold text-gray-900 mb-6">Ask AI</h3>
        
        <div className="flex-1 flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">ask me anything about...</p>
          <p className="text-xs text-gray-400">ask me anything else...</p>
        </div>

        <div className="mt-4 flex items-center gap-2 border-gray-200 rounded-lg px-3 py-2">
          <input 
            type="text" 
            placeholder="Type your question..." 
            className="flex-1 text-sm outline-none"
          />
          <button className="text-gray-400 hover:text-gray-600">➤</button>
        </div>
      </div>
    </div>
  )
}