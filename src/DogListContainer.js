// DO NOT DELETE
import React, { useEffect } from 'react'

import { BreedsSelect } from './BreedsSelect';
import './App.css'

export const DogListContainer = () => {
    const API_URL = "https://dog.ceo/api/breeds/list/all"
    const imgNum = 12 //toStringが1番速いらしい

    const [breeds, setBreeds] = React.useState([])
    const [selectedBreed, setSelectedBreed] = React.useState([])
    const [imageList, setImageList] = React.useState([])

    const handleChange = (event) => {
        setSelectedBreed(event.target.value)
    }

    const onClick = () => {
        fetch("https://dog.ceo/api/breed/" + selectedBreed + "/images/random/" + imgNum.toString())
            .then(res => res.json())
            .then(
                (imageUrl) => {
                    setImageList(imageUrl.message)
                }
            )
    }
    console.log(imageList)

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setBreeds(Object.keys(result.message))
                    // console.log(setBreeds)
                }
            )
    }, [])

    return (
        <div>
            <BreedsSelect
                breeds={breeds}
                value={selectedBreed}
                handleChange={handleChange}
                onClick={onClick}
                imageList={imageList}
            />
        </div>
    )
};