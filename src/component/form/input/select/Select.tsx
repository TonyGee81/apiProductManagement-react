import React from "react";
import "./select.css";
import Option from "../option/Option";
import Loader from "../../../loader/Loader";
import { useFormContext} from "react-hook-form";

interface SelectProps {
    data: Object;
    loadingData: boolean;
    className?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({
                                           data,
                                           loadingData,
                                           className,
                                           name,
                                           onChange,
                                       }) => {
    const {
        register,
    } = useFormContext();
    
    return (
        <div className="form-group">
            {loadingData && <Loader text="loading"/>}
            <select
                {...register(name)}
                className={className}
                disabled={loadingData}
                name={name}
                onChange={onChange}
            >
                <Option data={data}/>
            </select>
        </div>
    );
};

export default Select;
