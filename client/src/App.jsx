import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from "./pages/Home"
import Insta from "./components/Insta"
import Playground from './pages/Playground'
import Firstquestion from "./pages/Firstquestion"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='Register' element={<Register />} />
            <Route path='Login' element={<Login />} />
            <Route path='Insta' element={<Insta />} />
            <Route path='Playground' element={<Playground />} />
            <Route path='Firstquestion' element={<Firstquestion />} />
            <Route path='*' element="404" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
