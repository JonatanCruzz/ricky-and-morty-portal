import React from 'react';
import Select from 'react-select';

const CustomMenuSelect = ({ suggestions, inputValue, handleInputChange, handleLocationChange }) => {
    const customSelectStyles = {
            control: (provided) => ({
                ...provided,
                border: '2px solid #7ee57c',
                backgroundColor: 'transparent',
                borderRadius: '4px',
                width: '100%',
                padding: '1px',
                fontSize: '16px',
            }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        select: (provided) => ({
            ...provided,
            fontSize: '16px',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            color: 'white',
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: '#2b3c2b',
        }),
    };

    return (
        <Select
            value={suggestions.find((option) => option.value === inputValue)}
            options={suggestions}
            onInputChange={handleInputChange}
            onChange={handleLocationChange}
            placeholder="Type a location name"
            styles={customSelectStyles}
            isSearchable={false}
            className=" border-2 border-[#7ee57c] bg-transparent rounded-l-md w-96 p-1 sm:p-2 sm:text-sm"
        />
    )
}
export default CustomMenuSelect