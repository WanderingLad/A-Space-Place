import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { BODY } from '../utils/queries';
import { Button } from 'react-bootstrap';
import Posts from '../components/homepage/Posts';
import { GET_SUN, GET_MERCURY, GET_VENUS, GET_EARTH, GET_MARS, GET_JUPITER, GET_SATURN, GET_NEPTUNE, GET_URANUS, GET_PLUTO } from '../utils/Module/actions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  const [count, setCount] = useState(0);

  const { loading, error, data } = useQuery(BODY, { variables: { 'id': count } });

  const dispatch = useDispatch();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  switch (data.body.name) {
    case "Sun": {
      dispatch({ type: GET_SUN });
      break;
    }
    case "Mercury": {
      dispatch({ type: GET_MERCURY });
      break;
    }
    case "Venus": {
      dispatch({ type: GET_VENUS });
      break;
    }
    case "Earth": {
      dispatch({ type: GET_EARTH });
      break;
    }
    case "Mars": {
      dispatch({ type: GET_MARS });
      break;
    }
    case "Jupiter": {
      dispatch({ type: GET_JUPITER });
      break;
    }
    case "Saturn": {
      dispatch({ type: GET_SATURN });
      break;
    }
    case "Neptune": {
      dispatch({ type: GET_NEPTUNE });
      break;
    }
    case "Uranus": {
      dispatch({ type: GET_URANUS });
      break;
    }
    case "Pluto": {
      dispatch({ type: GET_PLUTO });
      break;
    }
    default: {
      break;
    }
  }

  return (
    <div className="min-100-vw container">
      <div className="stars" />
      <div className="stars2" />
      <div className="stars3" />
      <main>
        <div id={data.body.name} className="d-flex justify-center align-center row">
          <section className="col-lg-3 col-sm-6 order-1 order-sm-0 info">
            <div className="info-wrapper">
              <h2>{data.body.name}</h2>
              <div>
                <span>
                  <h4>{(data.body.name === "Sun" ? "Star" : "Planet")} Type</h4>
                  <p>{data.body.type}</p>
                </span>
                <span>
                  <h4>Age</h4>
                  <p>{data.body.age}</p>
                </span>
                <span>
                  <h4>Distance from {(data.body.name === "Sun" ? "Galatic Center" : "Sun")}</h4>
                  <p>{data.body.dist}</p>
                </span>
                <span>
                  <h4>Length of Year</h4>
                  <p>{data.body.year}</p>
                </span>
                <span>
                  <h4>Namesake</h4>
                  <p>{data.body.sake}</p>
                </span>
                <span>
                  <h4>Average Temperature</h4>
                  <p>{data.body.temp}</p>
                </span>
              </div>
            </div>
          </section>
          <section className="col-lg-5 col-sm-6 order-0 order-sm-1 d-flex" key={data.body._id}>
            <div className="align-self-center">
              <Button
                type='button'
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                  if(count === 0) {
                    setCount(9);
                  }
                }}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
            </div>
            <div className="image"/>
            <div className="align-self-center">
              <Button
                type='button'
                onClick={() => {
                  if (count < 9) {
                    setCount(count + 1);
                  }
                  if(count === 9){
                    setCount(0);
                  }
                }}>
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </section>
          <section className="col-lg-4 order-2 post" key={data.body._id}>
            <div className="posts-wrapper">
              <h4> Submitted Posts</h4>
              <Posts />
            </div>
          </section>
        </div>
        <div className="d-flex justify-center align-center row">

        </div>
      </main>
    </div >
  );
};
