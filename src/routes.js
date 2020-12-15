/*!
*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import Role from "@material-ui/icons/AcUnit";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Users from "components/User/Users";
import Roles from "components/Role/Roles";
import Permissions from "components/Permissions/Permissions"
import { Settings } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
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
  },
  {
    path: "/role",
    name: "Role",
    icon: Role,
    component: Roles,
    layout: "/admin"
  },
  {
    path: "/permission",
    name: "Permission",
    icon: Settings,
    component: Permissions,
    layout: "/admin"
  }
 
];

export default dashboardRoutes;
