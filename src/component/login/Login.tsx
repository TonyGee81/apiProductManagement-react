import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

type IFormInput = {
    login: string
    password: string
}

const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(JSON.stringify(data))
}

const Login = () => {
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