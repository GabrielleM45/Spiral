export const signup = (user) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/signup` : `${process.env.REACT_APP_API_URL}/signup`
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/signin` : `${process.env.REACT_APP_API_URL}/signin`
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (jwt, next) => {
  if (typeof window !== "undefined") {
    // Save web token in local storage
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

export const signout = (next) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/signout` : `${process.env.REACT_APP_API_URL}/signout`
  if (typeof window !== "undefined") localStorage.removeItem("jwt");
  next();
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      console.log("signout", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};