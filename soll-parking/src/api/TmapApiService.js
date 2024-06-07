import axios from "axios";

// Rest API 요청
const apiClient = axios.create(
    {
        baseURL : 'https://port-0-soll-pn2llx4tu797.sel5.cloudtype.app/api/tmap'
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
