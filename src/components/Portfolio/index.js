import React from 'react';
import PhotoList from '../PhotoList';


function Portfolio(props) {
  // const { currentCategory } = props;
  console.log(props);
  return (
    <section className="section-header">
      <h2> Portfolio</h2>
      <div className="spacing-portfolio"></div>


      <div className="photolist-wrapper">
        <PhotoList />
      </div>
    </section>
  );
}

export default Portfolio;