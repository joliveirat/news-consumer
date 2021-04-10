import * as env from "env-var";

export const NEWS_API_KEY = env
  .get("REACT_APP_GOOGLE_NEWS_API_KEY")
  .required()
  .asString();

export const NEWS_SOURCES = "google-news-br";

export const NEWS_API_URL = env
  .get("REACT_APP_GOOGLE_NEWS_API_URL")
  .required()
  .asString();
