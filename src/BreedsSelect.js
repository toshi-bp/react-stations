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
        <div className="dog-img-parent">
            <img src={image} alt="image" className="dog-img"/>
        </div>
    )

    return (
        <div>
            <div className="form">
                <div className="the-form">
                    <select
                        value={props.value}
                        onChange={props.handleChange}
                    >
                        {breedItems}
                    </select>
                </div>
                <div>
                    <button onClick={props.onClick} className="button">表示</button>
                </div>
            </div>
            <div className="imgs">
                {images}
            </div>
        </div>
    )
}
