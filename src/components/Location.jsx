import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CustomMenuSelect from './CustomMenuSelect';

const Location = ({ location, setLocation }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/?name=${inputValue}`)
            .then((response) => {
                const data = response.data.results.map((location) => ({
                    label: location.name,
                    value: location.id,
                }));
                setSuggestions(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [inputValue]);


    const handleInputChange = (newValue) => {
        setInputValue(newValue);
    };

    const handleLocationChange = (selectedOption) => {
        setInputValue(selectedOption.label);

        axios
            .get(`https://rickandmortyapi.com/api/location/${selectedOption.value}`)
            .then(({ data }) => setLocation(data))
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section>
            <div className="form-container mb-10 text-white">
                <form className="flex">
                    <CustomMenuSelect
                        
                        suggestions={suggestions}
                        inputValue={inputValue}
                        handleInputChange={handleInputChange}
                        handleLocationChange={handleLocationChange}
                    />
                    <button
                        type="submit"
                        className="flex items-center border-2 border-[#7ee57c] rounded-r-md bg-[#4a8549] hover:bg-[#1a2f1a] p-1 pl-2 pr-2 gap-2 cursor-pointer"
                    >
                        <span className="md:flex sm:hidden">Search</span> <IconSearch size={18} />
                    </button>
                </form>
            </div>

            <section>
                <div className="flex flex-col items-center border-2 border-[#4a8549] rounded-md w-1/2 
                mx-auto p-4 mt-5">
                    <h3 className="text-[#8eff8b] text-xl">Welcome to {location?.name}!</h3>
                    <ul className="flex justify-between list-none gap-4 mt-4 md:flex sm:hidden">
                        <li className="text-gray-500">Type: {location?.type}</li>
                        <li className="text-gray-500">Dimension: {location?.dimension}</li>
                        <li className="text-gray-500">Population: {location?.residents.length}</li>
                    </ul>
                </div>
            </section>


        </section>
    )
}
export default Location