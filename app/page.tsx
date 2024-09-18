// import { readFile } from ,@/utils/common"
import { Pagination, ProductCard } from "@/components"
import { Button, Card, Col, Flex, Input, Row } from "antd"
import { promises as fs } from "fs"

const DEFAULT_PAGINATION = 20

export default async function Home({ searchParams }: { searchParams: any }) {
  const page = Number(searchParams?.page) || 1
  const file = await fs.readFile(process.cwd() + "/data/products.txt", "utf8")
  const products = JSON?.parse?.(file) || []
  const renderedProducts = products.slice(
    DEFAULT_PAGINATION * page,
    DEFAULT_PAGINATION * page + DEFAULT_PAGINATION,
  )

  return (
    // <div
    //   style={{
    //     maxHeight: "calc(100vh - 64px)",
    //     height: "100%",
    //     flex: 1,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "relative",
    //   }}
    // >
    // </div>
    <div className="app-content">
      <div className="list-view">
        <div className="content">
          <>
            <Row gutter={[24, 24]}>
              {renderedProducts.map((product: any) => (
                <Col xs={6} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </>
        </div>

        <div className="footer">
          <Pagination />
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flexGrow: 1, height: "100%" }}>
          <div style={{ overflowY: "auto" }}>
            <Row gutter={[24, 24]}>
              {renderedProducts.map((product: any) => (
                <Col md={6} xs={12} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination />
        </div>
      </div> */}
    </div>
  )
}
