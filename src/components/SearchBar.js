import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [ term, setTerm ] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
    //onFormSubmit(props) is a function onTermSubmit
    //passed as a prop from App.js
  }

  return ( 
    <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
            <div className="ui field">
             <label>Video Search</label>
             <input 
              type="text" 
              value={term}
              onChange={ (event) => setTerm( event.target.value )}/>
            </div>
        </form>
    </div>
   );

};

export default SearchBar;