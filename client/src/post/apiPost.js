export const create = (userId, token, post) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/new/${userId}` : `${process.env.REACT_APP_API_URL}/post/new/${userId}`
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const list = () => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/posts` : `${process.env.REACT_APP_API_URL}/posts`
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singlePost = (postId) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/${postId}` : `${process.env.REACT_APP_API_URL}/post/${postId}`
  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listByUser = (userId, token) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/posts/by/${userId}` : `${process.env.REACT_APP_API_URL}/posts/by/${userId}`
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

export const removePost = (postId, token) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/${postId}` : `${process.env.REACT_APP_API_URL}/post/${postId}`
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

export const update = (postId, token, post) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/${postId}` : `${process.env.REACT_APP_API_URL}/post/${postId}`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const like = (userId, token, postId) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/like` : `${process.env.REACT_APP_API_URL}/post/like`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const unlike = (userId, token, postId) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/unlike` : `${process.env.REACT_APP_API_URL}/post/unlike`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/comment` : `${process.env.REACT_APP_API_URL}/post/comment`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteComment = (userId, token, postId, comment) => {
  const url = process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_APP_API_URL}/post/deletecomment` : `${process.env.REACT_APP_API_URL}/post/deletecomment`
  return fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, postId, comment }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
