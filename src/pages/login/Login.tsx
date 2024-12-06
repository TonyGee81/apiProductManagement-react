import React, {useState} from 'react';
import {useForm, FormProvider} from "react-hook-form";
import ApiPost from "../../component/axios/ApiPost";
import {setAuthToken} from "../../helper/setAuthToken";
import Loader from "../../component/loader/Loader";
import InputEmail from "../../component/form/input/inputEmail/inputEmail";
import InputSubmit from "../../component/form/input/inputSubmit/InputSubmit";
import InputPassword from "../../component/form/input/inputPassword/inputPassword";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TresponseApi = {
    data: { token: string },
    status: number,
    statusText: string
} | {
    data: { token: string }
    err: any;
    statusText: any;
    status: any
} | undefined;

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const errorLogin = () => toast.error("Erreur de connexion", {theme: "colored",});

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        const auth = {
            username: data.login,
            password: data.password
        }
        const responseApi: TresponseApi = await ApiPost('/login_check', auth);
        if (responseApi?.status === 200) {
            setIsLoading(false);
            // Get token from response
            const token = responseApi.data.token;
            // Set token to axios common header
            setAuthToken(token,data.login);
            // Redirect user to home page
            window.location.href = '/admin_home';
        } else {
            setIsLoading(false);
            errorLogin();
        }
    }

    const methods = useForm();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <ToastContainer />
                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <FormProvider {...methods}>
                                            <form className="user" onSubmit={methods.handleSubmit(onSubmit)}>
                                                <InputEmail />
                                                <InputPassword />
                                                {isLoading ? <Loader text={'Vérification'}/> : null}
                                                <InputSubmit cssClass="btn btn-primary btn-user btn-block" />
                                            </form>
                                        </FormProvider>

                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="#">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="#">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;