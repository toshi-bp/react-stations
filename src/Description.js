// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { DogImage } from './DogImage'

const imageUrl = "https://dog.ceo/api/breeds/image/random"

export function Description() {
    return (
        <div>
            <p>犬の画像を表示するサイトです</p>
            <DogImage url={imageUrl} />
        </div>
    );
};