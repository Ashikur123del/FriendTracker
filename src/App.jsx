
import { createBrowserRouter } from "react-router"; 
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);