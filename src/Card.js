import React from 'react';
import 'tachyons';

const Card=(probs)=>{

	return (
		     <div className='tc dib bg-light-green grow br3 ma2'>
		     <img alt='Robots' src={`https://robohash.org/${probs.id}`}/>
		     <div>
		     <h2>{probs.name}</h2>
		     <p>{probs.email}</p>
		     </div>
		     </div>
		   )
}

export default Card;