import React, {useEffect, useState} from "react";
import ApiGet from "../../component/axios/ApiGet";
import Loader from "../../component/loader/Loader";

interface Product {
    id: string;
    name: string;
    slug: string;
    price: number; // ou string si nécessaire
}


const ProductsShow = () => {


    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        const productsRequest = ApiGet('/products', 'show_products');

        productsRequest.then((data) => {
            if (data) {
                setIsLoading(false);
                setProducts((prevState) => ({
                        ...prevState,
                        ...data.items,
                    })
                )

            }
        })
    }, []);


    return (
        <div className="row">
            {isLoading && <Loader text=""/>}

            {
                Object.entries(products).map(([key, value]) => {
                   return (
                    <div key={key} className="col-xl-3 col-md-6 mb-4 mr-1">
                        <div className="card ">
                        <div className="card-header">
                            <i className="fas fa-fw fa-caret-square-right"></i>
                            {value.name}
                        </div>
                        <div className="card-body">
                            This card uses Bootstrap's default styling with no utility classes added. Global styles are
                            the only things modifying the look and feel of this default card example.
                        </div>
                    </div>
                    </div>
                   )
                })
            }

        </div>

    )
}

export default ProductsShow;