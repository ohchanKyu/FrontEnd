import axios from "axios";

// Rest API 요청
const apiClient = axios.create(
    {
        baseURL : 'https://java.soll-parking.store/api/tmap'
    }
)

export const getCoordinateByAddress = (address) => {
    const accessToken = localStorage.getItem('accessToken');
    const grantType = 'Bearer';

    return apiClient.get(`/coordinates/${address}`,{
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
}
