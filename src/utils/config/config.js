import * as env from "env-var";

export const NEWS_API_KEY = env
  .get("REACT_APP_GOOGLE_NEWS_API_KEY")
  .required()
  .asString();

export const NEWS_SOURCES = env
  .get("REACT_APP_GOOGLE_NEWS_SOURCES")
  .required()
  .asString();
