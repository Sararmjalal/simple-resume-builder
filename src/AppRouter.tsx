import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import ResumeV1 from "./pages/resume/v1"

const AppRouter = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<ResumeV1 />} />
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter