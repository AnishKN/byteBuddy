import React from 'react'
import { Button } from "@geist-ui/core"
import BotIcon from "../../components/BotIcon"
import { NavLink } from 'react-router-dom'

function QuestionTwo() {
  return (
    <div>
      <div className="m-auto w-full max-w-4xl rounded-lg bg-white p-10 flex flex-col  justify-center items-center"
      style={{height:'80vh'}}>
        <BotIcon className="h-8 w-8 text-purple-600 my-8" />
          <p className="text-lg font-semibold ">Personalize your coding journey with me</p>
          <div className="my-8">
          <Button>
            <NavLink to="/QuestionThree">
              CONTINUE
            </NavLink>
            </Button>
          </div>
      </div>
    </div>
  )
}

export default QuestionTwo
