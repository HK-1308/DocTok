import Projects from "./components/projects/Projects.tsx";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/home/Home";
import { Calendar } from "./components/calendar/calendar";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:'/calendar',
    element: <Calendar />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
