import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Results from "./components/Results/Results";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // put request body in state
  const [gif, setGif] = useState({});
  const [searchedFor, setSearchedFor] = useState('bread')
  
  useEffect(() => {
    console.log("< < useEffect > >")

    // define AP endpoint (GIPHY Search)
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=cReN8zxB0BawjXew1JplYcmuXsS2YX1Z&tag=${searchedFor}&rating=r`;

    // define API call ('useEffect' can't be called w/ async, but this can)
    async function getGIF() {
      try {
        // get it
        const apiResponse = await fetch(endpoint);
        // convert to JSON
        const resBody = await apiResponse.json();
        // test/confirm it's JSON
        console.log(resBody, "< < JSON?");
        // replace state!
        setGif(resBody.data);
      } catch (error) {
        console.log(error)
      }
    }

    // actually make API call
    getGIF();
  }, [searchedFor]
  )

  return (
    <>
      <h1>Giphy React Lab</h1>

      <SearchBar setSearchedFor={setSearchedFor}/>
      <Results gif={gif} searchedFor={searchedFor}/>
    </>
  )
}

export default App
