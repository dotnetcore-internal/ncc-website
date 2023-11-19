import axios from "axios";
import type { NewsIndexModel } from "@/apis/ContentModels";

export interface LatestNewsDto {
  count: number,
  data: NewsIndexModel[]
}

export const queryLatestNews = async function(
  locale: string,
  callback: (data: LatestNewsDto) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<LatestNewsDto>(`/api/news/latest-news.${locale}.json`)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};