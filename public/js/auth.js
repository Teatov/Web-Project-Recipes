/* eslint-disable no-restricted-globals */
import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      location.assign("/");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if (res.data.status === "success") {
      window.location.pathname = "/";
    }
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Signed up successfully!");
      location.assign("/");
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const deleteMe = async () => {
  try {
    await axios({
      method: "DELETE",
      url: "/api/v1/users/deleteMe",
    });

    showAlert("success", "Deleted account successfully!");
    location.assign("/");
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};