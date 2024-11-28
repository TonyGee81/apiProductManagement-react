import React from "react";

interface OptionProps {
    cssClass: string;
}
const InputSubmit: React.FC<OptionProps> = ({ cssClass }) => {


    return (
        <input
            type="submit"
            className={cssClass}
        />
    );
};

export default InputSubmit;