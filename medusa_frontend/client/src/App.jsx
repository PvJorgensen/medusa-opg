import { formatVariantPrice, useProduct, useProducts, useRegion, useRegions } from "medusa-react"
import './App.css'
import { Cart } from "./Components/Cart"
import { Product } from "./Components/Product"

function App() {
  const { products, isLoading: isProductsLoading } = useProducts()
  const { regions, isLoading: isRegionsLoading } = useRegions()
  const { region, isLoading: isRegionLoading } = useRegion()

  if (isProductsLoading || isRegionsLoading || isRegionLoading) return <p>....Loading</p>
  console.log(regions[0])
  return (
    <>
    {products.map((product) => {
      return (
        <>
        <Product title={product.title} description={product.description} img={product.thumbnail} variants={product.variants} regions={product.variants}/>
        </>
      )
    })}

    </>
  )
}

export default App
