import axios from "axios";
import type { PageDescriptor, WeeklyIndexModel } from "@/apis/ContentModels";

export interface PagedWeeklyDto {
  "_page": PageDescriptor,
  list: WeeklyIndexModel[]
}

const queryPagedWeeklyImpl = async function(
  api: string,
  callback: (data: PagedWeeklyDto) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<PagedWeeklyDto>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};

export const queryPagedWeekly = async function(
  pageNumber: number,
  locale: string,
  callback: (data: PagedWeeklyDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageNumber < 1)
    pageNumber = 1;
  await queryPagedWeeklyByIndex(pageNumber - 1, locale, callback, fallback);
};

export const queryPagedWeeklyByIndex = async function(
  pageIndex: number,
  locale: string,
  callback: (data: PagedWeeklyDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageIndex < 0)
    pageIndex = 0;
  const api = pageIndex === 0
    ? `/api/weekly/list_${locale}.json`
    : `/api/weekly/list_${pageIndex}_${locale}.json`;
  await queryPagedWeeklyImpl(api, callback, fallback);
};