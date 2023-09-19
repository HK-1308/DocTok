import Projects from "./components/projects/Projects.tsx";
import { Home } from "./components/home/Home";
import { Calendar } from "./components/calendar/calendar";
import { Documentation } from "./components/documentation/DocumentationDeprecated.js";

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
    element:  <Documentation/>
  }
];

export default AppRoutes;
