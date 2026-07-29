import { axiosRequest, type axiosRequestType } from "@/axios";
import { AxiosError } from "axios";

interface ProfileInterface {

}

export const getProfile = async (id: String | Number) => {
    const response = await axiosRequest({
        method: "GET",
        url: "/profile",
        params: {
            id
        }
    })

    return response.data;
}

export const updateProfile = async(id: String | Number, profile: ProfileInterface) => {
    const response = await axiosRequest({
        method: "PUT",
        url: '/profile',
        params: {
            id
        },
        data: profile
    });

    return response.data;
}