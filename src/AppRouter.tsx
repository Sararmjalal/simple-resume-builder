import ResumeV1 from "./pages/resume/V1"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import ResumeV2 from "./pages/resume/V2"
import ResumeV3 from "./pages/resume/V3"

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<ResumeV1 />} /> */}
        <Route path="/" element={<ResumeV2 />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter