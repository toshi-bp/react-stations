// DO NOT DELETE
import * as React from 'react';
import './App.css';

export function BreedsSelect(props) {
    const breeds = props.breeds;
    const breedItems = breeds.map((breed) =>
        <option value={breed}>{breed}</option>
    )
    return (
        <div>
            <select onChange={props.handleChange}>
                {breedItems}
            </select>
        </div>
    )
}
