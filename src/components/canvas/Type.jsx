import React from 'react'
import { Typewriter,useTypewriter,Cursor } from 'react-simple-typewriter'

const Type = () => {

    const [text] = useTypewriter({
        words: ['Web Developer', 'AR/VR Developer', 'Game Develper'],
        loop: 0
      })
    
      return (
        <div className='App'>
            I'm a&nbsp;
          <span style={{fontWeight:'bold',color:'#915eff'}}>{text}</span>
          <span style={{color:'red'}}>

          <Cursor/>
          </span>
        </div>
      )
    }

export default Type;