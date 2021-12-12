import { createClient } from "contentful";
const client = createClient({
  space: "7se1meiwytuc",
  accessToken: "Qds1d4YLn2Y12gbGftvBtTkCkQF7XEwVQPGNYBeYATI",
});
export async function getAboutUs() {
  const res = await client.getEntries({ content_type: "aboutUs" });
  return res.items;
}
