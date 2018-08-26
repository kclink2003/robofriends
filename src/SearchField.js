import React from 'react';

const SearchField=({searchfield, searchChange})=>{

	return(
        <input
         className='pa3 ba b-green bg-lightest-blue'
         type='search'
          placeholder='Search for Robots'
          onChange={searchChange}
           />
		 )
}

export default SearchField;