import { useState } from "react";
import memesData from "../memesData";

export default function Meme(props) {
    const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <main className="meme">
            <div className="container">
                <div className="meme__form"> 
                    <input type="text" className="meme__input" placeholder="Top text" />
                    <input type="text" className="meme__input" placeholder="Bottom text" />
                    <button onClick={getMemeImage} className="meme__button">Get a new meme image 🖼️</button>
                    <img src={memeImage} alt="meme" className="meme__image" />
                </div>
            </div>
        </main>
    );
}