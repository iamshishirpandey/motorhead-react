import { createClient } from "contentful";
const client = createClient({
  space: "7se1meiwytuc",
  accessToken: "Qds1d4YLn2Y12gbGftvBtTkCkQF7XEwVQPGNYBeYATI",
});
export async function getNewsAndEvents() {
  const res = await client.getEntries({ content_type: "newsAndEvents" });
  return res.items;
}
