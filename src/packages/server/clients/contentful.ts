import * as contentful from "contentful";
import { env } from "@/env.mjs";

const contentfulClient = contentful.createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_CONTENT_API_TOKEN,
});

export { contentfulClient };
