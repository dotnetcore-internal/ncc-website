import axios from "axios";
import type { WeeklyIndexModel } from "@/apis/ContentModels";

export const queryWeeklyMetadata = async function(
  api: string,
  callback: (data: WeeklyIndexModel) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<WeeklyIndexModel>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};