import createClient from "../../utils/http-client";
import { NEWS_API_KEY, NEWS_SOURCES } from "../../utils/config";

const baseUrl = "https://newsapi.org/v2/";

const client = createClient(baseUrl);

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
