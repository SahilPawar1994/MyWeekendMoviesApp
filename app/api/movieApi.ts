import { axiosRequest } from "@/axios";

interface PageData {
  page: number;
  size: Number;
}

export const getMovies = async (pageData: PageData) => {
  const response = await axiosRequest({
    method: "GET",
    url: "/movies",
    params: pageData,
  });

  return response.data;
};
