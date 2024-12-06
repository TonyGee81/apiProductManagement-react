import React from 'react';
import {useFormContext} from "react-hook-form"

interface ITextArea {
    name: string;
    require?: boolean
}

const Textarea: React.FC<ITextArea> = ({name, require = false}) => {

    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();

    return (
        <div className="form-group">
            <textarea
                required={require ?? undefined}
                {
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

export default Textarea;