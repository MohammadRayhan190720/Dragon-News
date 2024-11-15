import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";

const router = new createBrowserRouter([
  {
    path: '/',
    element: <HomeLayouts></HomeLayouts>
  }
])


export default router;