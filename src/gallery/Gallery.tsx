import characters from '../characters.json';
import GalleryItem from './GalleryItem';
import './Gallery.css';
import { useState } from 'react';

export default function Gallery() {

    const [name, setName] = useState('');

    const components = characters
            .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            .map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species}} />)

    return (
        <div className="gallerie-wrapper">
            <h1>The Rick and Morty gallery</h1>
            <div className="search">
                Search for name: <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
            </div>
            <div className="gallery">
                {components}
            </div>
        </div>
    )
}