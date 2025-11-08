
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Register } from "./components/auth/Register";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews";


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
        />
    </Routes>
  )
}
