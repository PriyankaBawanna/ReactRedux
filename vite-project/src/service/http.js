import axios from "axios";
export const getRequest = async (url, payload) => {
  console.log("Get Request ", url, payload);
  try {
    let data = await axios.post(url, payload);
    return data.data;
  } catch {
    return null;
  }
};

export const getRegister = async (url, payload) => {
  try {
    axios.post(url, payload).then((res) => {
      alert(res.data.message);
    });
  } catch {
    alert("error");
  }
};
