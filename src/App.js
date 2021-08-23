// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */

const header = <header>Dogアプリ</header>;
const description = <p>犬の画像を表示するサイトです</p>
const dog_img = <img src="https://images.dog.ceo/breeds/lhasa/n02098413_7358.jpg" alt="dog"></img>

export const App = () => {
  return (
    <div>
      {header}
      {description}
      {dog_img}
    </div>
  )
}
