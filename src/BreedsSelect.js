// DO NOT DELETE
import * as React from 'react';
import './App.css';

export function BreedsSelect(props) {
    const breeds = props.breeds;
    const imageList = props.imageList

    const breedItems = breeds.map((breed) =>
        <option value={breed}>{breed}</option>
    )

    const images = imageList.map((image) =>
        <div>
            <img src={image} alt="image"/>
        </div>
    )

    return (
        <div className="select">
            <div>
                <select
                    value={props.value}
                    onChange={props.handleChange}
                >
                    {breedItems}
                </select>
            </div>
            <div>
                <button onClick={props.onClick}>表示</button>
            </div>
            {images}
        </div>
    )
}
