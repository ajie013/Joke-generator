import './style.css'
import { useState, useRef } from 'react'
import axios from 'axios'

function GenerateJoke(){
    const [setup, setSetup] = useState("")
    const [punchline, setPunchline] = useState("")  
    const loaderRef = useRef();

    const generateRandomJoke = async () =>{
        setSetup("")
        setPunchline("")
        loaderRef.current.style.display ="block";

        try{
            let response = await axios.get('https://official-joke-api.appspot.com/jokes/random')
            let data = await response.data;

            setSetup(s => s = data.setup)
            setPunchline(p => p = data.punchline)
        }
        catch(error){
            console.log(error)
        }
     
       loaderRef.current.style.display ="none";
       
    }
    return(
        <>
            <div className='joke-container'>
              
                <div  className="loader-wrapper" ref={loaderRef}>
                    <div className="loader"></div>
                </div>

                <h1 className='joke-header'>Joke Generator</h1>
                <div className='joke-wrapper'>
                    <p className='setup'>{setup}</p>
                    <p className='punchline'>{punchline}</p>
                </div>
               
                <button className="generateJokeBtn" onClick={generateRandomJoke}>Generate Joke</button>
            </div>
        </>
    )
}


export default GenerateJoke