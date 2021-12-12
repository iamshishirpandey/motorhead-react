import { createClient } from "contentful";
const client = createClient({
  space: "7se1meiwytuc",
  accessToken: "Qds1d4YLn2Y12gbGftvBtTkCkQF7XEwVQPGNYBeYATI",
});
export async function getBoardOfDirectors() {
  const res = await client.getEntries({ content_type: "boardOfDirectors" });
  return res.items;
}
