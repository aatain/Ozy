import React from 'react';

const Search = props => {
    let location = '';
    return (
      <div className="search">
            <span>Enter a location</span>
            <br /><br /><input type="text" placeholder="Enter a location..." onChange={(e) => location = e.target.value } />
            <button onClick={()=>{console.log(location)}}>Submit</button>
      </div>
    );
}

export default Search;