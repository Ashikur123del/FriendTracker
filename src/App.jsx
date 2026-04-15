
import { createBrowserRouter } from "react-router"; 
import Root from './Layout/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import FriendsDetails from "./Pages/FriendsDetails/FriendsDetails.jsx";
import TimeLine from "./Pages/TimeLine/TimeLine.jsx";
import Recharts from "./Pages/RadialBarChartPage/Recharts.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { index: true, element: <Home /> },
      {path:"/friendsdetails/:id", Component: FriendsDetails,
        loader: () => fetch('/friendsData.json')
      },
      {path:'/timeline', Component: TimeLine},
      {path: '/stats', Component: Recharts}
    ],
    
  },
]);