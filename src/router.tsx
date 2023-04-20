import { Navigate, Route, Routes } from "react-router-dom";
import People from "./Components/People.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<People />}></Route>
    </Routes>
  );
};

export default Router;
