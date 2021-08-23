// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

const header = (
                <header className="header">
                  <h1 className="header__title">Dogアプリ</h1>
                </header>
               );
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
      <img src={dogUrl} className="img"/>
      <p>This is a dog.</p>
      <button onClick={() => componentDidMount()} className="button">
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
