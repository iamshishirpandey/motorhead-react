import { createClient } from "contentful";
const client = createClient({
  space: "7se1meiwytuc",
  accessToken: "Qds1d4YLn2Y12gbGftvBtTkCkQF7XEwVQPGNYBeYATI",
});
export async function getProducts() {
  const res = await client.getEntries({ content_type: "product" });
  return res.items;
}

export async function getProductDetails(params) {
  // console.log(params);
  const res = await client.getEntry(params, { content_type: "product" });

  return res.fields;
}
