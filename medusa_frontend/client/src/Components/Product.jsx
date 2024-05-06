import { formatVariantPrice } from "medusa-react"
import { Cart } from "./Cart"

export const Product = (props) => {
  return (
    <>
    <Cart />
    <h1>Medusa Products:</h1>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <img
     style={{width: "120px"}}
     src={props.thumbnail} alt="" />
    <p>Price: {formatVariantPrice({variant: props.variants[0],region: props.regions[0]})}</p>
    </>
  )
}
