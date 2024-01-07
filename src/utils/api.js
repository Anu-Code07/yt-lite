import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "07df44373amsh17bb69a4d32c4dbp1c1e73jsnc9c3d7ae98c0",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};
console.log(process.env);
export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
