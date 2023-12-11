import Projects from "./components/projects/Projects.tsx";
import { Home } from "./components/home/Home";
import Document from "./components/documentation/DocumentPage.tsx";
import EmployeeList from "./components/employees/EmployeeList.tsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/employees',
    element: <EmployeeList />
  },
  {
    path: '/documentation/:id',
    element:  <Document />
  }
];

export default AppRoutes;
