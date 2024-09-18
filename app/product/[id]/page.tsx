import { promises as fs } from "fs"

export default async function ProductDetail({
  params,
}: {
  params: { id: string }
}) {
  console.log("🚀 ~ ProductDetail ~ params.id:", params.id)
  const file = await fs.readFile(process.cwd() + "/data/products.txt", "utf8")
  const products = JSON?.parse?.(file) || []
  return <div>{params.id}</div>
}
