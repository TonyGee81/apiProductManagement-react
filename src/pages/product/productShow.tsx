import React, {useEffect} from "react";
import ApiGet from "../../component/axios/ApiGet";

const ProductShow = () => {

    useEffect(()=> {
        const products = ApiGet('products', 'show_product');
    }, []);

    return (
        <div>Show</div>
    )
}

export default ProductShow;