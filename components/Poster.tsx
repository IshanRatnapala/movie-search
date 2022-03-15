import React from 'react';

function Poster(params) {
  const placeHolderImage = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  const imageSrc = !params.src || params.src === 'N/A' ? placeHolderImage : params.src;
  return <img {...params} src={imageSrc} />;
}

export default Poster;
