import React from "react";
import "./select.css";
import Option from "../option/Option";
import { useFormContext} from "react-hook-form";

interface SelectProps {
    data: Object;
    className?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    require: boolean;
}

const Select: React.FC<SelectProps> = ({
                                           data,
                                           className,
                                           name,
                                           onChange,
                                           require
                                       }) => {
    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();
    
    return (
        <div className="form-group">
            <label className="col-sm-2" htmlFor={name}>{name}</label>
            <select
                {...register(name, {
                    required: require
                })}
                className={className}
                name={name}
                onChange={onChange}
            >
                <Option data="..."/>
                <Option data={data}/>
            </select>
            {errors.suppliers && <span>This field is required</span>}
        </div>
    );
};

export default Select;
