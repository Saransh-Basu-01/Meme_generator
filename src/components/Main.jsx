import React from 'react'
import { use } from 'react'
import { useState,useEffect } from 'react'
const Main = () => {
    const [meme,setMeme]=useState({
        topText:"Something different",
        bottomText:"Walk into Mordor",
        image:"http://i.imgflip.com/1bij.jpg",
    })
    const [allMemes,setAllMemes]=useState([])

    useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
       .then(res=>res.json())
       .then(data=>setAllMemes(data.data.memes))

    }, [])
    
    function getMemeImage(){
        const randomNumber=Math.floor(Math.random() * allMemes.length)
        const newMemeUrl=allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            image:newMemeUrl
        }))
    }
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
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
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