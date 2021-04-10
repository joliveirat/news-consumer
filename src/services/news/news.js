import createHTTPClient from "../../utils/http-client";
import { NEWS_API_URL, NEWS_API_KEY, NEWS_SOURCES } from "../../utils/config";

const client = createHTTPClient({ baseURL: NEWS_API_URL });

export const getHeadlines = () =>
  client
    .get("/top-headlines", {
      params: {
        apiKey: NEWS_API_KEY,
        sources: NEWS_SOURCES,
      },
    })
    .then(({ data }) => data.articles)
    .catch((error) => console.log(error));
