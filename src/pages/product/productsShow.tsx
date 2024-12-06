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
                        <div className="card shadow mb-4 ">
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    <i className="fas fa-fw fa-caret-square-right"></i>
                                    {value.name}
                                </h6>
                                <div>
                                    <a href={`/product/edit/` + value.id } className="btn btn-warning btn-circle btn-sm mr-1">
                                        <i className="fas fa-edit"></i>
                                    </a>
                                    <a href="#" className="btn btn-danger btn-circle btn-sm">
                                        <i className="fas fa-trash"></i>
                                    </a>

                                </div>
                            </div>
                            <div className="card-body">
                                This card uses Bootstrap's default styling with no utility classes added. Global styles
                                are
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