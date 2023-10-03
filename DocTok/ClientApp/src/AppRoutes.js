import Projects from "./components/projects/Projects.tsx";
import { Home } from "./components/home/Home";
import { Calendar } from "./components/calendar/calendar";
import Document from "./components/documentation/DocumentPage.tsx";

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
    path: '/documentation/:id',
    element:  <Document />
  }
];

export default AppRoutes;
