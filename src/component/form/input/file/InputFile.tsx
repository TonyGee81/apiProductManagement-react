import React, {useState} from "react";
import {useFormContext} from "react-hook-form";

interface fileProps {
    require: boolean;
}
const InputFile: React.FC<fileProps>= ({ require }) => {
    const {
        register,
        formState: {
            errors
        }
    } = useFormContext();
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    return (
        <div className="form-group">
            <input
                id="file"
                type="file"
                {
                    ...register("file", {
                        required: require,
                    })
                }
                onChange={handleFileChange}
                name="file"
            />
            {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                        <li>Type: {file.type}</li>
                        <li>Size: {file.size} bytes</li>
                    </ul>
                </section>
            )}
            {errors.file && <span className="alert-danger">This field is required</span>}
        </div>
    );
};

export default InputFile;