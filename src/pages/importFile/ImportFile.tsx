import React, {useEffect, useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import Select from "../../component/form/input/select/Select";
import ApiGet from "../../component/axios/ApiGet";
import InputFile from "../../component/form/input/file/InputFile";
import InputSubmit from "../../component/form/input/inputSubmit/InputSubmit";

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
    const onSubmit = () => {
        console.log('SEND');
    }

    useEffect(() => {
        setDataLoading(true);
        const api = ApiGet('/suppliers', 'show_supplier');

        api.then((data: Tdata) => {
            setDataLoading(false);
            setSuppliers(data.items);

        })

    }, []);

    return (
        <div className="container">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Charger les produits</h6>
                </div>
                <div className="card-body">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <Select data={suppliers} loadingData={loadingData} name="supplier"/>
                            <InputFile/>
                            <InputSubmit cssClass="btn btn-primary btn-user btn-block"/>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default ImportFile;