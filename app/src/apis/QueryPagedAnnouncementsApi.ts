import axios from "axios";
import type { AnnouncementIndexModel, PageDescriptor } from "@/apis/ContentModels";

export interface PagedAnnouncementsDto {
  "_page": PageDescriptor,
  list: AnnouncementIndexModel[]
}

const queryPagedAnnouncementsImpl = async function(
  api: string,
  callback: (data: PagedAnnouncementsDto) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<PagedAnnouncementsDto>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};

export const queryPagedAnnouncements = async function(
  pageNumber: number,
  locale: string,
  callback: (data: PagedAnnouncementsDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageNumber < 1)
    pageNumber = 1;
  await queryPagedAnnouncementsByIndex(pageNumber - 1, locale, callback, fallback);
};

export const queryPagedAnnouncementsByIndex = async function(
  pageIndex: number,
  locale: string,
  callback: (data: PagedAnnouncementsDto) => void,
  fallback: () => void = () => {
  }
) {
  if (pageIndex < 0)
    pageIndex = 0;
  const api = pageIndex === 0
    ? `/api/announcements/list_${locale}.json`
    : `/api/announcements/list_${pageIndex}_${locale}.json`;
  await queryPagedAnnouncementsImpl(api, callback, fallback);
};