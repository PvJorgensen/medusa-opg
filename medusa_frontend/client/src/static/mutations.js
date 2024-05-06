import { useCreateLineItem } from "medusa-react";

const { createLineItem } = useCreateLineItem();

const addToCart = (variant, quantity ) => {
    const variantId = variant.id;
    useCreateLineItem.mutate(
        { variant_id: variantId, quantity: quantity },
        {
            onSuccess: ({ cart }) => console.log(cart),
        },
        {
            onError: (err) =>
            console.log("Someting went worng"),
        }
    )
}