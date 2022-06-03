//import { Link } from 'react-router-dom';
//import { useQuery } from '@apollo/client';
import React from "react";

const Home = () => {

  return (
    <div>
      main has the stars background set.
      Should be the size of the full viewport and doesn't scroll

      <main>

         Section for sun and each planet -->
        All sections/layers sit "on top" of each other, only the active section is visible
        Animate to the next or previous section using React based on direction of scroll or nav button clicked
        <section id='sun'>

          <img id='sun-img' alt="hello"/>
          <div id='sun-desc'>
            title
            description
            link to posts about sun
            nav buttons
          </div>

        </section>

        <section id='mercury'>

          <img id='mercury-img' alt="hello2"/>
          <div id='mercury-desc'>
            title
            description
            link to posts about mercury
            nav buttons

          </div>

        </section>

        ... and so on

      </main>


    </div>
  );
};

export default Home;
