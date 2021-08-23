// DO NOT DELETE

import * as React from 'react'
//import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

const header = <header>Dogアプリ</header>;
const description = <p>犬の画像を表示するサイトです</p>

function DogImage() {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg");

  return (
    <div>
      <img src={dogUrl} />
      <p>This is a dog.</p>
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/greyhound-italian/n02091032_1121.jpg")}>
        change a dog
      </button>
    </div>
  );
}

export const App = () => {
  return (
    <div>
      {header}
      {description}
      {DogImage()}
    </div>
  )
}
