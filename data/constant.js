export const apiUrl = process.env.NEXT_PUBLIC_TANGMO_API_SERVER;

export const requestHeader = {
  data: null,
  headers: {
    "Content-Type": "application/json"
  }
};

export const requestHeaderFormData = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
}
