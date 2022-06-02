import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
  {/* <html>
  <head>
      <title>Our Badass Solar System</title>
  </head>
  <body>
  
  <!-- 
      main has the stars background set. 
      Should be the size of the full viewport and doesn't scroll
  -->
      <main>
          
      <!-- Section for sun and each planet -->
      <!-- All sections/layers sit "on top" of each other, only the active section is visible -->
      <!-- Animate to the next or previous section using React based on direction of scroll or nav button clicked -->
          <section id='sun'>
              
              <img id='sun-img'/>
              <div id='sun-desc'>
                  <!-- title -->
                  <!-- description -->
                  <!-- link to posts about sun -->
                  <!-- nav buttons -->
              </div>
          
          </section>
          
          <section id='mercury'>
              
              <img id='mercury-img'/>
              <div id='mercury-desc'>
                  <!-- title -->
                  <!-- description -->
                  <!-- link to posts about mercury -->
                  <!-- nav buttons -->
              </div>
          
          </section>
          
          <!-- ... and so on -->
      
      </main>
  
  </body>
  </html> */}
};

export default Home;
