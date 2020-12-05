export const read = (userId, token) => {
  // const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/user/${userId}` : `${process.env.REACT_APP_API_URL}/user/${userId}` 
  const url = process.env.NODE_ENV === "production" ? `/user/${userId}` : `${process.env.REACT_APP_API_URL}/user/${userId}` 

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (userId, token, user) => {
  const url = process.env.NODE_ENV === "production" ? `/user/${userId}` : `${process.env.REACT_APP_API_URL}/user/${userId}`
  console.log("user data update: ", user);
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: user,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const list = () => {
  const url = process.env.NODE_ENV === "production" ? `/users` : `${process.env.REACT_APP_API_URL}/users`
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const remove = (userId, token) => {
  const url = process.env.NODE_ENV === "production" ? `/user/${userId}` : `${process.env.REACT_APP_API_URL}/user/${userId}`
  return fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = (user, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let auth = JSON.parse(localStorage.getItem("jwt"));
      auth.user = user;
      localStorage.setItem("jwt", JSON.stringify(auth));
      next();
    }
  }
};

export const follow = (userId, token, followId) => {
  const url = process.env.NODE_ENV === "production" ? `/user/follow` : `${process.env.REACT_APP_API_URL}/user/follow`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, followId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const unfollow = (userId, token, unfollowId) => {
  const url = process.env.NODE_ENV === "production" ? `/user/unfollow` : `${process.env.REACT_APP_API_URL}/user/unfollow`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, unfollowId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const findPeople = (userId, token ) => {
  const url = process.env.NODE_ENV === "production" ? `/user/findpeople/${userId}` : `${process.env.REACT_APP_API_URL}/user/findpeople/${userId}`
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};