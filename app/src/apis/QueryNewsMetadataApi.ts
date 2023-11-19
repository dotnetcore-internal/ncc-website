import axios from "axios";
import type { NewsIndexModel } from "@/apis/ContentModels";

export const queryNewsMetadata = async function(
  api: string,
  callback: (data: NewsIndexModel) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<NewsIndexModel>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};