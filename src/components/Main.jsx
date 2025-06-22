import React from 'react'
import { useState } from 'react'
const Main = () => {
    const [meme,setMeme]=useState({
        topText:"Something different",
        bottomText:"Walk into Mordor",
        image:"http://i.imgflip.com/1bij.jpg",
    })

    function handleChange(event){
        const {value,name}=event.currentTarget 
        //  or const value = event.currentTarget.value;
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }
        ))
    }
  return (
     <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                         value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
  )
}

export default Main