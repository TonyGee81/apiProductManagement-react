import React from 'react';
import {useFormContext} from "react-hook-form"

interface Iinput {
    name: string;
    require?: boolean
}

const InputText: React.FC<Iinput> = ({name, require = false}) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();

    return (
        <div className="form-group">
            <input
                required={require ?? undefined}
                type="text" {
                    ...register(name, {
                        required: require
                    })
                }
                className="form-control form-control-user"
                data-testid={"input-" + name}
            />
            {/*{errors.login && <span>This field is required</span>}*/}
        </div>
    )
}

export default InputText;