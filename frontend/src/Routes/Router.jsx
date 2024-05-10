import { createBrowserRouter } from "react-router-dom";
import BookingHistory from "../Components/Dashboard/Booking/BookingHistory";
import UserProfile from "../Components/Dashboard/Profile/UserProfile";
import BookFlight from "../Pages/BookFlight";
import AddAirline from "../Pages/Dashboard/Admin/Air Line/AddAirline";
import AirlineList from "../Pages/Dashboard/Admin/Air Line/AirlineList";
import ManageAirLine from "../Pages/Dashboard/Admin/Air Line/ManageAirLine";
import UpdateAirline from "../Pages/Dashboard/Admin/Air Line/UpdateAirline";
import AddDestination from "../Pages/Dashboard/Admin/Destination/AddDestination";
import DestinationList from "../Pages/Dashboard/Admin/Destination/DestinationList";
import ManageDesstination from "../Pages/Dashboard/Admin/Destination/ManageDesstination";
import UpdateDestination from "../Pages/Dashboard/Admin/Destination/UpdateDestination";
import AddPlane from "../Pages/Dashboard/Admin/Plane/AddPlane";
import AssignRoute from "../Pages/Dashboard/Admin/Plane/AssignRoute";
import ManagePlane from "../Pages/Dashboard/Admin/Plane/ManagePlane";
import PLaneLists from "../Pages/Dashboard/Admin/Plane/PLaneLists";
import UpdateAirplane from "../Pages/Dashboard/Admin/Plane/UpdateAirplane";
import AddRoute from "../Pages/Dashboard/Admin/Route/AddRoute";
import ManageRoute from "../Pages/Dashboard/Admin/Route/ManageRoute";
import RoutesList from "../Pages/Dashboard/Admin/Route/RoutesList";
import UpdateRoute from "../Pages/Dashboard/Admin/Route/UpdateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EditProfile from "../Pages/EditProfile";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PaymentPage from "../Pages/PaymentPage";
import Register from "../Pages/Register";
import RoundTripSearch from "../Pages/RoundTripSearch";
import RoundtripFlightBook from "../Pages/RoundtripFlightBook";
import SearchResult from "../Pages/SearchResult";
import Test from "../Pages/Test";
import RootPage from "./RootPage";
import RoundTripBook from "../Pages/RoundTripBook";
import UpcomingAirplane from "../Pages/Dashboard/Admin/Plane/UpcomingAirplane";
import UserTransaction from "../Pages/Dashboard/UserTransaction";
import Success from "../Pages/Success";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
      {
        path: "/searchResultRoundtrip",
        element: <RoundTripSearch />,
      },
      {
        path: "/bookRoundtrip",
        element: <RoundtripFlightBook />,
      },
      {
        path: "/book",
        element: <BookFlight />,
      },
      {
        path: "/rouundtripBook",
        element: <RoundTripBook />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/pay",
        element: <PaymentPage />,
      },
      {
        path: "/about",
        element: <p>About </p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/profile/transaction",
        element: <UserTransaction />,
      },
      {
        path: "/dashboard/admin/upcomingFlights",
        element: <UpcomingAirplane />,
      },
      {
        path: "/dashboard/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/profile/booking",
        element: <BookingHistory />,
      },
      {
        path: "/dashboard/admin/manageAirline",
        element: <ManageAirLine />,
      },
      {
        path: "/dashboard/admin/addAirline",
        element: <AddAirline />,
      },
      {
        path: "/dashboard/admin/airlines",
        element: <AirlineList />,
      },
      {
        path: "/dashboard/admin/updateAirline/:id",
        element: <UpdateAirline />,
      },
      {
        path: "/dashboard/admin/manageAirplane",
        element: <ManagePlane />,
      },
      {
        path: "/dashboard/admin/addAirPlane",
        element: <AddPlane />,
      },
      {
        path: "/dashboard/admin/AirPlanes",
        element: <PLaneLists />,
      },
      {
        path: "/dashboard/admin/assignRoute/:id",
        element: <AssignRoute />,
      },
      {
        path: "/dashboard/admin/updateAirplane/:id",
        element: <UpdateAirplane />,
      },
      {
        path: "/dashboard/admin/manageDestination",
        element: <ManageDesstination />,
      },
      {
        path: "/dashboard/admin/addDestination",
        element: <AddDestination />,
      },
      {
        path: "/dashboard/admin/destinations",
        element: <DestinationList />,
      },
      {
        path: "/dashboard/admin/updateDestination/:id",
        element: <UpdateDestination />,
      },
      {
        path: "/dashboard/admin/manageRoute",
        element: <ManageRoute />,
      },
      {
        path: "/dashboard/admin/routes",
        element: <RoutesList />,
      },
      {
        path: "/dashboard/admin/updateRoute/:id",
        element: <UpdateRoute />,
      },
      {
        path: "/dashboard/admin/addRoute",
        element: <AddRoute />,
      },
    ],
  },
]);

export default Routes;
