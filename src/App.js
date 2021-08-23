// DO NOT DELETE

import * as React from 'react'
//import React, { useState } from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

const header = <header>Dogアプリ</header>;
const description = <p>犬の画像を表示するサイトです</p>;

function DogImage() {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/greyhound-italian/n02091032_1121.jpg");
  const API_URL = "https://dog.ceo/api/breeds/image/random";

  function componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message)
        }
      )
  }

  return (
    <div>
      <img src={dogUrl} />
      <p>This is a dog.</p>
      <button onClick={() => componentDidMount()}>
        change a dog
      </button>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      {header}
      {description}
      {DogImage()}
    </div>
  )
}
