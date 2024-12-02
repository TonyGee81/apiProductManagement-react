import React, {useEffect, useState} from "react";

interface OptionProps {
    data: Object;
}

interface DataOption {
    [key: string]: { value: string; label: string };
}

const Option: React.FC<OptionProps> = ({data}) => {
    const [dataOption, setDataOption] = useState<DataOption>({});

    useEffect(() => {
        if (data) {

            setDataOption((prevState) => ({
                ...prevState,
                ...Object.entries(data).reduce((accumulator, [, value]) => {
                    // @ts-ignore
                    accumulator[value.id] = {value: value.id, label: value.name};
                    return accumulator;
                }, {}),
            }));

        }
    }, [data]);

    return (
        <>
            {Object.entries(dataOption).map(([key, option], index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </>
    );
};

export default Option;