import React from 'react'
import Wrapper from './components/wrapper'
import characters from './characters.json'
import './App.css'
import ImageCard from './components/imagecard'

function App () {
  return (
    <Wrapper>
      <h1 className='title'>Click the Image</h1>
      <ImageCard
        image={characters[0].image}
      />
      <ImageCard
        image={characters[1].image}
      />
      <ImageCard
        image={characters[2].image}
      />
      <ImageCard
        image={characters[3].image}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ImageCard
        image={characters[4].image}
      />
      <ImageCard
        image={characters[5].image}
      />
      <ImageCard
        image={characters[6].image}
      />
      <ImageCard
        image={characters[7].image}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ImageCard
        image={characters[8].image}
      />
      <ImageCard
        image={characters[9].image}
      />
      <ImageCard
        image={characters[10].image}
      />
      <ImageCard
        image={characters[11].image}
      />
    </Wrapper>
  )
}

export default App
