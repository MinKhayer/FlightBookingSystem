import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast for success fully register
export const registerSuccessfully = () =>
  toast.success("Register successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for empty input field
export const inputFieldError = () =>
  toast.error("All input fields are required", {
    position: "top-center",
    autoClose: 1400,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// !  toast for success
export const loggedInSuccessfully = () =>
  toast.success("logged in successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for careting airline
export const airlineCreatedSuccessfully = () =>
  toast.success("Airtline Created successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for careting destination
export const destinationCreatedSuccessfully = () =>
  toast.success("Destination Created successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for careting route
export const routeCreatedSuccessfully = () =>
  toast.success("Route Created successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for deleting a route
export const routeDeletedSuccessfully = () =>
  toast.success("Route Deleted successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for careting airplane
export const airplaneCreatedSuccessfully = () =>
  toast.success("Airplane Created successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for assigning route to airplane
export const routeAssignSuccessfully = () =>
  toast.success("ARoute assign successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for deleting a route
export const airplaneDeletedSuccessfully = () =>
  toast.success("Airplane Deleted successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for deleting a destination
export const destinationDeletedSuccessfully = () =>
  toast.success("Destination Deleted successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
//! toast for deleting a airline
export const airlineDeletedSuccessfully = () =>
  toast.success("Airline Deleted successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

//! toast for logout
export const logoutSuccessFully = () =>
  toast.success(" Logout successfully ", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// !  toast for success
export const profileUpdatedSuccessfully = () =>
  toast.success("Profile Updated successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

// !  toast for passenderDetail add
export const passengerAddedSuccessfully = () =>
  toast.success("Passenger add successfully!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const authenticationFailed = () =>
  toast.error("Login to continue!", {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const showError = (msg) =>
  toast.error(msg, {
    position: "top-center",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
