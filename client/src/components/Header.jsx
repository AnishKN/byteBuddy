import { NavLink } from "react-router-dom"
import { Button } from "@geist-ui/core"

export default function Header() {
  return (
    <div className="bg-white px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <BotIcon className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold">ByteBuddy</span>
        </div>
        <div className="hidden space-x-8 md:flex">
          <NavLink className="text-gray-600 hover:text-gray-900" to="/">
            Code Playground
          </NavLink>
          <NavLink className="text-gray-600 hover:text-gray-900" to="/">
            Problems to Solve
          </NavLink>
          <NavLink className="text-gray-600 hover:text-gray-900" to="/">
            Daily Challenges
          </NavLink>
          <NavLink className="text-gray-600 hover:text-gray-900" to="/">
            Leaderboard
          </NavLink>
        </div>
        <Button className="bg-purple-600 text-white">Already a User? Login</Button>
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
