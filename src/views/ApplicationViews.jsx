import { AllPosts } from "../components/AllPosts"
import { Routes, Route } from "react-router-dom"

export const ApplicationViews = () => {


  return <Routes>
              <Route
              path="/">
              <Route index element={<AllPosts />} />
              </Route>
            </Routes>
}
