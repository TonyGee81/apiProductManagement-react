import React from 'react';
import {useFormContext } from "react-hook-form"

const InputEmail = () => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();

    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    return (
        <div className="form-group">
            <input
                required
                type="email" {
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
    )
}

export default InputEmail;