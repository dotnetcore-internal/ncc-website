import axios from "axios";
import type { NewsIndexModel, PageDescriptor } from "@/apis/ContentModels";

export interface PagedNewsDto {
  "_page": PageDescriptor,
  list: NewsIndexModel[]
}

const queryPagedNewsImpl = async function(
  api: string,
  callback: (data: PagedNewsDto) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<PagedNewsDto>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};

export const queryPagedNews = async function(
  pageNumber: number,
  locale: string,
  callback: (data: PagedNewsDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageNumber < 1)
    pageNumber = 1;
  await queryPagedNewsByIndex(pageNumber - 1, locale, callback, fallback);
};

export const queryPagedNewsByIndex = async function(
  pageIndex: number,
  locale: string,
  callback: (data: PagedNewsDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageIndex < 0)
    pageIndex = 0;
  const api = pageIndex === 0
    ? `/api/news/list_${locale}.json`
    : `/api/news/list_${pageIndex}_${locale}.json`;
  await queryPagedNewsImpl(api, callback, fallback);
};