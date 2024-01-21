import BotIcon from "../../components/BotIcon"
import { useNavigate } from 'react-router-dom'

export default function QuestionFive() {
  const navigate = useNavigate()
    const handleClick = async () => {
        try {
        const response = await fetch('http://localhost:4000/generate_personalised_question', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      questionData: {
                          name: "Anish",
                          difficulty: "Easy",
                          language: "python",
                          solved: 2
                      }
                  }),
                });
                const data = await response.json();
                console.log(data.data)
                navigate('/Playground', { state:data.data });
              } catch (error) {
                console.error('Error:', error);
              }
      }
  return (
    <div className="bg-white p-8 rounded-lg shadow max-w-2xl mx-auto my-12">
      {/* <Progress className="w-full" value={50} /> */}
      <div className="mt-8 flex flex-col items-center">
      <BotIcon className="h-8 w-8 text-purple-600 my-8" />
        <h2 className="mt-6 text-xl font-semibold text-gray-900">
        When are you most productive or prefer to code?
        </h2>
        <div className="mt-6 w-full">
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">a) Morning</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">b) Afternoon</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">c) Evening</span>
            </button>
            <button className="flex items-center justify-between px-4 py-3 border rounded-lg text-left">
              <span className="text-sm font-medium">d) Night</span>
            </button>
          </div>
        </div>
        <button className="mt-8 w-full bg-purple-600 text-white" onClick={handleClick}>
          Solve your first Question now
        </button>
      </div>
    </div>
  )
}

