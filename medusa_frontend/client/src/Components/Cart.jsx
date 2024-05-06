import { useCart } from "medusa-react" 
import { useEffect } from "react"


export const Cart = () => {

    const { cart, createCart } = useCart()

        useEffect(() => {
            createCart.mutate({});
            console.log("CART CREATED");
        },[])

        console.log(cart);

  return (
    <div><h3>CART</h3></div>
  )
}
