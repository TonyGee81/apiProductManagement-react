import React, {useEffect, useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import Select from "../../component/form/input/select/Select";
import ApiGet from "../../component/axios/ApiGet";
import InputFile from "../../component/form/input/file/InputFile";
import InputSubmit from "../../component/form/input/inputSubmit/InputSubmit";
import ApiPost from "../../component/axios/ApiPost";
import {token} from "../../component/axios/AxiosProvider";
import Loader from "../../component/loader/Loader";
import {ToastContainer, toast} from 'react-toastify';

type Tdata = {
    items: Array<{ id: string; name: string }>,
    lastPage: string,
    page: string,
    total: string,
}

const ImportFile = () => {
    const methods = useForm();
    const [loadingData, setDataLoading] = useState(false);
    const [suppliers, setSuppliers] = useState({});
    const successFileUpload = () => toast.success("Fichier  uploadé avec succès !", {theme: "colored",});
    const onSubmit = async (data: any) => {
        setDataLoading(true);
        const apiPostCsv = ApiPost('/import/csv', {
                "csv": data.file[0],
                "supplier": data.supplier
            },
            {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        );

        apiPostCsv.then((data: any) => {
            setDataLoading(false);
            if (data.err) {
                toast.error(data.err.detail, {theme: "colored",});

            } else {
                successFileUpload();
            }
        });
    }

    useEffect(() => {
        setDataLoading(true);
        const apiGetSuppliers = ApiGet('/suppliers', 'show_supplier', {
            Authorization: `Bearer ${token}`,
        });

        apiGetSuppliers.then((data: Tdata) => {
            setDataLoading(false);
            setSuppliers(data.items);

        });

    }, []);

    return (
        <div className="container">
            <ToastContainer/>
            {loadingData && <Loader text="loading"/>}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Charger les produits</h6>
                </div>
                <div className="card-body">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Select data={suppliers} name="supplier" require={true}/>
                            <InputFile require={true}/>
                            <InputSubmit cssClass="btn btn-primary btn-user btn-block"/>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default ImportFile;