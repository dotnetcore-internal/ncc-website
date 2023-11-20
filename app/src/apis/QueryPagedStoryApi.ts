import axios from "axios";
import type { PageDescriptor, StoryIndexModel } from "@/apis/ContentModels";

export interface PagedStoryDto {
  "_page": PageDescriptor,
  list: StoryIndexModel[]
}

const queryPagedStoryImpl = async function(
  api: string,
  callback: (data: PagedStoryDto) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<PagedStoryDto>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};

export const queryPagedStory = async function(
  pageNumber: number,
  locale: string,
  callback: (data: PagedStoryDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageNumber < 1)
    pageNumber = 1;
  await queryPagedStoryByIndex(pageNumber - 1, locale, callback, fallback);
};

export const queryPagedStoryByIndex = async function(
  pageIndex: number,
  locale: string,
  callback: (data: PagedStoryDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageIndex < 0)
    pageIndex = 0;
  const api = pageIndex === 0
    ? `/api/story/list_${locale}.json`
    : `/api/story/list_${pageIndex}_${locale}.json`;
  await queryPagedStoryImpl(api, callback, fallback);
};