import { Button } from "@geist-ui/core"
import BotIcon from "../../components/BotIcon"
import { NavLink } from 'react-router-dom'

export default function QuestionThree() {
  return (
    <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto my-12">
      {/* <Progress className="w-full" value={50} /> */}
      <div className="mt-8 flex flex-col items-center">
      <BotIcon className="h-8 w-8 text-purple-600 my-8" />
        <h2 className="mt-6 text-xl font-semibold text-gray-900">
          How much time can you commit to coding practice each week?
        </h2>
        <div className="mt-6 w-full">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">a) Less than 1 hour</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">b) 1-3 hours</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">c) 3-5 hours</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">d) More than 5 hours</span>
            </button>
          </div>
        </div>
        <Button className="mt-8 w-full bg-purple-600 text-white">
            <NavLink to="/QuestionFour">
              CONTINUE
            </NavLink>
            </Button>
      </div>
    </div>
  )
}

