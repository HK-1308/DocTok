import Projects from "./components/projects/Projects.tsx";
import { Home } from "./components/home/Home";
import Documentation from "./components/documentation/DocumentPage.tsx";
import Login from "./components/login/Login.tsx"
import EmployeeList from "./components/employees/EmployeeList.tsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
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
    path: '/documentation/:projectId',
    element:  <Documentation />
  }
];

export default AppRoutes;
