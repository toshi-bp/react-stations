// DO NOT DELETE
import React, { useEffect } from 'react'

import { BreedsSelect } from './BreedsSelect';
import './App.css'

export const DogListContainer = () => {
    const API_URL = "https://dog.ceo/api/breeds/list/all"
    const [breeds, setBreeds] = React.useState([])
    const [selectedBreed, setSelectedBreed] = React.useState([])

    const handleChange = (event) => {
        setSelectedBreed(event.target.value)
    }

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setBreeds(Object.keys(result.message))
                }
            )
    }, [])

    return (
        <div>
            <BreedsSelect
                breeds={breeds}
                value={selectedBreed}
                handleChange={handleChange}
            />
        </div>
    )
};