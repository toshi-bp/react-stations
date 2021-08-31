// DO NOT DELETE

import * as React from 'react'
import './App.css'
import DogImage from './DogImage'

function Description() {
    return (
        <div>
            <p>犬の画像を表示するサイトです</p>
            <DogImage url="https://dog.ceo/api/breeds/image/random" />
        </div>
    );
}

export default Description;