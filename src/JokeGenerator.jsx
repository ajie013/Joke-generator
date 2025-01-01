import './style.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function GenerateJoke(){
    const [setup, setSetup] = useState("")
    const [punchline, setPunchline] = useState("")  
   

    const fetchData = async () =>{
        try{
            let response = await axios.get('https://official-joke-api.appspot.com/jokes/random')
            let data = await response.data;

            setSetup(s => s = data.setup)
            setPunchline(p => p = data.punchline)
        }
        catch(error){
            console.log(error)
        }
    };

    const generateRandomJoke = async () =>{
        setSetup("")
        setPunchline("")    
        fetchData();
         
    };

    useEffect(() =>{
        fetchData();
    },[])
    return(
        <>
            <div className='joke-container'>
                <h1 className='joke-header'>Random Joke Generator</h1>

                <div className='punchline-wrapper'>

              
                {setup && punchline ?  
                <div className='joke-container'>
                    <p className='setup'>{setup}</p>
                    <p className='punchline'>{punchline}</p>
                </div> :     <div className="loader"></div> }
                </div>
               
             
                <button className="generateJokeBtn" onClick={generateRandomJoke}>GENERATE</button>
            </div>
        </>
    )
}


export default GenerateJoke