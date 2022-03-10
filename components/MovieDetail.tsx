import React from 'react';

function MovieDetail({ children }) {
  return (
    <>
      <section>
        <h2>MovieDetail</h2>
        {children}
      </section>
    </>
  );
}

export default MovieDetail;
