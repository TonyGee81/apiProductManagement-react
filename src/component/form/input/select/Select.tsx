import React from "react";
import "./select.css";
import Option from "../option/Option";
import { useFormContext} from "react-hook-form";

interface SelectProps {
    data: Object;
    className?: string;
    name: string;
    require: boolean;
    createElement?: boolean;
    value?: number;
}

const Select: React.FC<SelectProps> = ({
                                           data,
                                           className,
                                           name,
                                           require,
                                           createElement = false,
                                           value,
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
                value={value}
                {...register(name, {
                    required: require
                })}
                className={className}
                name={name}
            >
                <Option data={data} createElement={createElement} />
            </select>
            {errors.suppliers && <span>This field is required</span>}
        </div>
    );
};

export default Select;