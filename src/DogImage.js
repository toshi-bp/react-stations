// DO NOT DELETE

import * as React from 'react'
import './App.css'

export function DogImage(props) {
    const [dogUrl, setDogUrl] = React.useState('https://avatars.githubusercontent.com/u/298748')

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
};