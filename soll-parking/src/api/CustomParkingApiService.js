import axios from "axios";

// Rest API 요청
const apiClient = axios.create(
    {
        baseURL : 'https://port-0-soll-pn2llx4tu797.sel5.cloudtype.app/custom'
    }
)

export const getCustomParkingList = () => {
    const accessToken = localStorage.getItem('accessToken');
    const grantType = 'Bearer';

    return apiClient.get('',{
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
}

export const addCustomParkingLot = (customParkingRequest) => {
    console.log(customParkingRequest);

    const accessToken = localStorage.getItem('accessToken');
    const grantType = 'Bearer';

    return apiClient.post('',customParkingRequest,{
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
}

export const deleteCutsomParkingLot = (id) => {
    const accessToken = localStorage.getItem('accessToken');
    const grantType = 'Bearer';

    return apiClient.delete(`/${id}`,{
        withCredentials: true,
        headers: { Authorization: `${grantType} ${accessToken}` },
    });
};
