import axios from "axios";

const API_KEY = "wxnu7tow0366xazs0";
const BASE_URl = "https://techhk.aoscdn.com/"
export const enhancedImageApi = async (file) => {
  try {
    //upload Image
    const taskId = await uploadImage(file);
    //get Image
    const enhancedImg = await poolingEnhancedImage(taskId, 0);
    return enhancedImg;
  } catch (error) {
    console.log("Error Occured: ", error.message);
  }
}

const uploadImage = async (file) => {
  const form_data = new FormData();
  form_data.append("image_file", file);
  const { data } = await axios.post(`${BASE_URl}api/tasks/visual/scale`, form_data, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_KEY,
    }
  })
  if (!data?.data?.task_id) {
    throw new Error("Please try Again Later!")
  }
  return data.data.task_id;
}

const enhancedImage = async (taskId) => {
  //api/tasks/visual/scale/${taskId} --get
  const { data } = await axios.get(`${BASE_URl}api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-KEY": API_KEY,
    }
  })
  if (!data?.data) {
    throw new Error("Please try Again Later!")
  }
  return data.data;
}

const poolingEnhancedImage = async (taskId, retries) => {
  const data = await enhancedImage(taskId);

  if (data.state === 4) {
    console.log("Processing");
    if (retries >= 10) {
      throw new Error("Error please try gain later!")
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return poolingEnhancedImage(taskId, retries + 1);
  }
  return data;
}