import axios from "axios";

export const poster = async (url: string, text: string) => axios.post<void>(url, { text });
export const deleter = (url: string) => axios.delete<void>(url);
