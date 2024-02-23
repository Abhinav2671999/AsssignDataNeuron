import { MyApi } from "../utils/axios";

export const getData = async () => {
    try {
        const { data } = await MyApi.get(`/`, { withCredentials: true })
        return data;
    } catch (error) {
        console.error(error);
        return { error: 'Data retrieval API error' }
    }
};

export const addData = async (formData) => {
    try {
        const { data } = await MyApi.post(`/create`, formData, { withCredentials: true });
        console.log(data, 'response data');
        return data;
    } catch (error) {
        console.error(error);
        return { error: 'Data addition API error' }
    }
};

export const updateData = async (formData) => {
    try {
        const { data } = await MyApi.post(`/update`, formData, { withCredentials: true })
        return data;
    } catch (error) {
        console.error(error);
        return { error: 'Data update API error' }
    }
};
