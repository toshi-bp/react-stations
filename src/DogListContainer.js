// DO NOT DELETE
import React, { useEffect } from 'react'
import './App.css'

export function DogListContainer(props) {
    const [breeds, setBreeds] = React.useState()

    useEffect(() => {
        breeds = fetch(props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    result.message
                }
            )
    })

    return (
        <div></div>
    )
};