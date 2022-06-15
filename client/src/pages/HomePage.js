import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { BODY } from '../utils/queries';
import { Button } from 'react-bootstrap';
import Posts from '../components/homepage/Posts';
import Buttons from '../components/homepage/Buttons';
import { GET_SUN, GET_MERCURY, GET_VENUS, GET_EARTH, GET_MARS, GET_JUPITER, GET_SATURN, GET_NEPTUNE, GET_URANUS, GET_PLUTO } from '../utils/Module/actions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
          <section className="col-lg-2 col-sm-6 order-1 order-sm-0 info">
            <div className="info-wrapper">
              <h2>{data.body.name}</h2>
              <div>
                <span>
                  <h5>{(data.body.name === "Sun" ? "Star" : "Planet")} Type</h5>
                  <h4>{data.body.type}</h4>
                </span>
                <span>
                  <h5>Age</h5>
                  <h4>{data.body.age}</h4>
                </span>
                <span>
                  <h5>Distance from {(data.body.name === "Sun" ? "Galatic Center" : "Sun")}</h5>
                  <h4>{data.body.dist}</h4>
                </span>
                <span>
                  <h5>Length of Year</h5>
                  <h4>{data.body.year}</h4>
                </span>
                <span>
                  <h5>Namesake</h5>
                  <h4>{data.body.sake}</h4>
                </span>
                <span>
                  <h5>Average Temperature</h5>
                  <h4>{data.body.temp}</h4>
                </span>
              </div>
            </div>
          </section>
          <section className="col-lg-5 col-sm-6 order-0 order-sm-1 " key={data.body._id}>
            <div className="text-center">
              <Button
                type='button'
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                  if (count === 0) {
                    setCount(9);
                  }
                }}>
                <FontAwesomeIcon icon={faAngleUp} />
              </Button>
            </div>
            <div className="image" />
            <div className="text-center">
              <Button
                type='button'
                onClick={() => {
                  if (count < 9) {
                    setCount(count + 1);
                  }
                  if (count === 9) {
                    setCount(0);
                  }
                }}>
                <FontAwesomeIcon icon={faAngleDown} />
              </Button>
            </div>
          </section>
          <section className="col-lg-5 order-2 post" key={data.body._id}>
            <div className="posts-wrapper">
              <h4>Submitted Posts</h4>
              <Posts />
              <Buttons />
            </div>
          </section>
        </div>
      </main>
    </div >
  );
};
