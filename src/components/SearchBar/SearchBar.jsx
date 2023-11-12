import { useState } from 'react';

export default function SearchBar({setSearchedFor}) {
  const [inputVal, setInputVal]= useState('');

  function handleChange(evt) {
    setInputVal(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearchedFor(inputVal);
    
  }

  return (
    <>
      <h2>Hi from search bar</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputVal} 
          onChange={handleChange}
          placeholder="Search for something…" />
        <button type="submit">Search!</button>
      </form>
    </>
  )
}