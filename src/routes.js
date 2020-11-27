/*!
*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Users from "components/User/Users";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  }, 
  {
    path: "/user",
    name: "User Management",
    icon: Person,
    component: Users,
    layout: "/admin"
  }
 
];

export default dashboardRoutes;
