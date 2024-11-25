import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import ApiPost from "../../component/axios/ApiPost";
import {setAuthToken} from "../../helper/setAuthToken";
import Loader from "../../component/Loader/Loader";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

type IFormInput = {
    login: string
    password: string
}

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

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        setIsLoading(true);
        const auth = {
            username: data.login,
            password: data.password
        }
        const responseApi: TresponseApi = await ApiPost('/login_check', auth);
        if (responseApi?.status === 200) {
            // Get token from response
            const token = responseApi.data.token;
            // Set token to axios common header
            setAuthToken(token);
            // Redirect user to home page
            window.location.href = '/admin_home';
        } else {
            setIsLoading(false);
        }
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IFormInput>()

    return (


        <div className="container">
            <div className="row justify-content-center">

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
                                        <form className="user" onSubmit={handleSubmit(onSubmit)}>
                                            {/* register your input into the hook by invoking the "register" function */}
                                            <div className="form-group">
                                                <input
                                                    type="text" {
                                                    ...register("login", {
                                                        required: true,
                                                        pattern: emailPattern
                                                    })
                                                }
                                                    className="form-control form-control-user"
                                                    placeholder="Enter Email Address..."
                                                />
                                                {errors.login && <span>This field is required</span>}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password" {...register("password", {required: true})}
                                                    className="form-control form-control-user"
                                                    placeholder="Password"
                                                />
                                                {errors.password && <span>This field is required</span>}
                                            </div>
                                            {isLoading ? <Loader text={'Vérification'}/> : null}
                                            <input
                                                type="submit"
                                                className="btn btn-primary btn-user btn-block"
                                            />
                                        </form>
                                        <hr/>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
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