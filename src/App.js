import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
//pages
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "learn",
        element: <h1>Learn</h1>,
      },
      {
        path: "practice",
        element: <h1>Practice</h1>,
      },
      {
        path: "compete",
        element: <h1>compete</h1>,
      },
      {
        path: "mentor",
        element: <h1>Mentor</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
