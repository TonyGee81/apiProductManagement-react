import React, {useEffect, useState} from "react";

interface OptionProps {
    data: Object;
    createElement: boolean;
}

interface DataOption {
    [key: string]: { value: string; label: string };
}

const Option: React.FC<OptionProps> = ({data, createElement}) => {
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
            { createElement && (
                <option value="...">
                    ...
                </option>
            )}

            {Object.entries(dataOption).map(([key, option], index) => (
                <option key={key} value={option.value}>
                    {option.label} {key}
                </option>
            ))}

        </>
    );
};

export default Option;