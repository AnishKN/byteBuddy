import { NavLink } from "react-router-dom"



export default function Header() {
  return (
    

    <div className="bg-white px-4 py-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BotIcon className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold">ByteBuddy</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          <NavLink className="text-gray-700 hover:text-slate-950" to="/">
            Code Playground
          </NavLink>
          <NavLink className="text-gray-700 hover:text-slate-950" to="/">
            Problems to Solve
          </NavLink>
          <NavLink className="text-gray-700 hover:text-slate-950" to="/">
            Daily Challenges
          </NavLink>
          <NavLink className="text-gray-700 hover:text-slate-950" to="/">
            Leaderboard
          </NavLink>
        </div>
        <button className="bg-purple-700 text-white rounded-full py-3 px-5">Already a User? Login</button>
      </div>
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}
