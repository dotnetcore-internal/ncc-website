import axios from "axios";
import type { AnnouncementIndexModel } from "@/apis/ContentModels";

export const queryAnnouncementMetadata = async function(
  api: string,
  callback: (data: AnnouncementIndexModel) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<AnnouncementIndexModel>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};