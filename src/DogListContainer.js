// DO NOT DELETE
import React, { useEffect } from 'react'
import './App.css'

export const DogListContainer = () => {
    const API_URL = "https://dog.ceo/api/breeds/list/all"
    const [breeds, setBreeds] = React.useState([])
    const [selectBreed, setSelectBreed] = React.useState([])

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
        <div></div>
    )
};