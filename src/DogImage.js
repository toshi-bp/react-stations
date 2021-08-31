// DO NOT DELETE

import * as React from 'react'
import './App.css'

function DogImage(props) {
    const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/greyhound-italian/n02091032_1121.jpg')

    function componentDidMount() {
        fetch(props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    setDogUrl(result.message)
                }
            )
    }

    return (
        <div>
            <img src={dogUrl} className="img"/>
            <p>This is a dog.</p>
            <button onClick={() => componentDidMount()} className="button">
                change a dog
            </button>
        </div>
    )
}

export function DogImage() { DogImage };