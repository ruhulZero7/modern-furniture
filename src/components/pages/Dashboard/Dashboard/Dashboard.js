import Header from "../../../shared_components/Header/Header";
import * as React from "react";
import "./dashboard.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import ManageOrders from "../ManageOrders/ManageOrders";
import DashboardHome from "../DashboardHome.js/DashboardHome";
import MyOrders from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageProducts from "../ManageProducts/ManageProducts";
import Review from "../Review/Review";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import HomeIcon from "@mui/icons-material/Home";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FlakyIcon from "@mui/icons-material/Flaky";
import InventoryIcon from "@mui/icons-material/Inventory";
import PrivateRoute from "../../Login/AdminRoute/AdminRoute";
import logo from "../../../../images/logo/logo.png";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, user, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashborard-menu">
      <Toolbar />
      <Divider />

      <NavLink to={"/home"}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Back to Home"} />
        </ListItem>
      </NavLink>

      <NavLink to={`${url}`}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem>
      </NavLink>

      {admin ? (
        <Box>
          <NavLink to={`${url}/addProduct`}>
            <ListItem button>
              <ListItemIcon>
                <AddCircleOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Add Product"} />
            </ListItem>
          </NavLink>

          <NavLink to={`${url}/manageProducts`}>
            <ListItem button>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Product"} />
            </ListItem>
          </NavLink>

          <NavLink to={`${url}/manageOrders`}>
            <ListItem button>
              <ListItemIcon>
                <FlakyIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Orders"} />
            </ListItem>
          </NavLink>

          <NavLink to={`${url}/makeAdmin`}>
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccountIcon />
              </ListItemIcon>
              <ListItemText primary={"Make Admin"} />
            </ListItem>
          </NavLink>
        </Box>
      ) : (
        <Box>
          <NavLink to={`${url}/myOrders`}>
            <ListItem button>
              <ListItemIcon>
                <ShoppingBagIcon />
              </ListItemIcon>
              <ListItemText primary={"My Orders"} />
            </ListItem>
          </NavLink>

          <NavLink to={`${url}/payment`}>
            <ListItem button>
              <ListItemIcon>
                <PaymentTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={"Payment"} />
            </ListItem>
          </NavLink>

          <NavLink to={`${url}/review`}>
            <ListItem button>
              <ListItemIcon>
                <RateReviewOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Review Us"} />
            </ListItem>
          </NavLink>
        </Box>
      )}

      {user.email && (
        <ListItem button onClick={logOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>

          <ListItemText style={{ color: "red" }} primary={"Log Out"} />
        </ListItem>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="bg-dark"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="dashboard-header"
            variant="h6"
            noWrap
            component="div"
          >
            <div>{user.displayName}'s Dashboard</div>
            {/* <img src={logo} alt="" /> */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>

          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>

          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
