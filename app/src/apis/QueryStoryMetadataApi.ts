import axios from "axios";
import type { StoryIndexModel } from "@/apis/ContentModels";

export const queryStoryMetadata = async function(
  api: string,
  callback: (data: StoryIndexModel) => void,
  fallback: () => void = () => {
  }
) {
  await axios.get<StoryIndexModel>(api)
    .then(function(response) {
      callback(response.data);
    })
    .catch(fallback);
};