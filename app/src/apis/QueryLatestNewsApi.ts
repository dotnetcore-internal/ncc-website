import axios from "axios";

export interface NewsIndexModel {
  id: string,
  title: string,
  date: string,
  img: string,
  url?: string
}

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