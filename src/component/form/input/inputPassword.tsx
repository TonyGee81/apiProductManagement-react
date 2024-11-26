import React from 'react';
import {useFormContext } from "react-hook-form"

const InputPassword = () => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();


    return (
        <div className="form-group">
            <input
                required
                type="password" {
                    ...register("password", {required: true})}
                className="form-control form-control-user"
                placeholder="Password"
            />
            {errors.password && <span>This field is required</span>}
        </div>
    )
}

export default InputPassword;