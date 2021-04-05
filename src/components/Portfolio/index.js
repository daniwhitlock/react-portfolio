import React from 'react';
import PhotoList from '../PhotoList';


function Portfolio(props) {
    // const { currentCategory } = props;
    console.log(props);
    return (
        <section>
      <h1 >{props.name}</h1>
      {/* <a href={currentCategory.github} target="_blank">Github Link</a>
      <a href={currentCategory.deployment} target="_blank">Deployment</a> */}
      <PhotoList  />
    </section>
    );
}

export default Portfolio;