import axios from "axios";

// Rest API 요청
const apiClient = axios.create({
    baseURL: "https://port-0-soll-pn2llx4tu797.sel5.cloudtype.app/parking-lot",
});

export const getAroundParkingLot = (location) => {
    const accessToken = localStorage.getItem("accessToken");
    const grantType = "Bearer";

    return apiClient.post("/around", location, {
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};

export const getParkingLotByLevel = (location, level) => {
    const accessToken = localStorage.getItem("accessToken");
    const grantType = "Bearer";

    return apiClient.post(`/around/${level}`, location, {
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};

export const getSearchParkingLot = (keyword) => {
    const accessToken = localStorage.getItem("accessToken");
    const grantType = "Bearer";
    return apiClient.get(`/search?keyword=${keyword}`, {
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};

export const getDetailParkingLot = (parkingLotId, type) => {
    const accessToken = localStorage.getItem("accessToken");
    const grantType = "Bearer";

    return apiClient.get(`/detail`, {
        withCredentials: true,
        params: { parkingLotId, type },
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};

export const getCurrentParkingLot = (address) => {
    const accessToken = localStorage.getItem("accessToken");
    const grantType = "Bearer";

    return apiClient.get(`/current`, {
        withCredentials: true,
        params: { address },
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};
