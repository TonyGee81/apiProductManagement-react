import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ApiGet from "../../component/axios/ApiGet";
import Loader from "../../component/loader/Loader";
import {ToastContainer, toast} from 'react-toastify';
import {FormProvider, useForm} from "react-hook-form";
import InputSubmit from "../../component/form/input/inputSubmit/InputSubmit";
import InputText from "../../component/form/input/inputText/InputText";
import Textarea from "../../component/form/input/textArea/Textarea";
import Select from "../../component/form/input/select/Select";

const ProductEdit = () => {

    type Tdata = {
        id: string,
        name: string,
        isEuropeanUnion: boolean,
        description: string,
        price: number,
        supplier: {
            id: number,
            name: string,
        },
        category: {
            id: number,
            name: string,
        },
        errors: string,
        status: number,
    }

    type TSuppliers = {
        items: Array<{ id: string; name: string }>,
        lastPage: string,
        page: string,
        total: string,
    }

    interface TProduct {
        id: string;
        name: string;
        isEuropeanUnion: boolean;
        description: string;
        price: number;
        supplier: {
            id: number,
            name: string,
        };
        category: {
            id: number,
            name: string,
        };
    }

    const {productId} = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [productInfo, setProductInfo] = useState<TProduct>();
    const methods = useForm();
    const [suppliers, setSuppliers] = useState<TSuppliers[]>([]);
    const [productSupplier, setProductSupplier] = useState(0);

    useEffect(() => {

        setIsLoading(true);
        const productRequest = ApiGet(`/products/${productId}`, 'show_product');

        productRequest.then((data: Tdata) => {
            setIsLoading(false);

            if (data.errors) {
                toast.error(data.errors, {theme: "colored",});
            }

            if (data) {
                setProductInfo((prevState) => ({
                    ...prevState,
                    ...data
                }));

                methods.setValue('name', data.name);
                methods.setValue('description', data.description);
                methods.setValue('price', data.price);
                setProductSupplier(data.supplier.id);
            }

        })

    }, [methods, productId]);

    useEffect(() => {
        const apiGetSuppliers = ApiGet('/suppliers', 'show_supplier');

        apiGetSuppliers.then((data) => {
            setSuppliers((prevState) => ({
                    ...prevState,
                    ...data.items,
                })
            )

        });

    }, []);

    const onSubmit = async (data: any) => {
        console.log(data);
    }

    return (
        <div className="container">
            <ToastContainer/>
            {isLoading ? <Loader text={''}/> : null}
            <div className="row justify-content-center">

                {productInfo?.id && (
                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <FormProvider {...methods}>
                                                <form className="user" onSubmit={methods.handleSubmit(onSubmit)}>
                                                    <InputText name="name" require={true}/>
                                                    <Textarea name="description"/>
                                                    <InputText name="price" require={true}/>
                                                    <Select data={suppliers} value={productSupplier} name="supplier" require={true} />
                                                    {isLoading ? <Loader text={'Vérification'}/> : null}
                                                    <InputSubmit cssClass="btn btn-primary btn-user btn-block"/>
                                                </form>
                                            </FormProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductEdit;