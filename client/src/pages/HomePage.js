import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { BODY } from '../utils/queries';
import { Button } from 'react-bootstrap';
import Posts from '../components/homepage/Posts';
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
    <div className="full-width">
      <div className="stars" />
      <div className="stars2"/>
      <div className="stars3"/>
      <main>
        <div className="flex-column justify-center align-center">
          <Button
            type='button'
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}>
            <FontAwesomeIcon icon={faAngleUp} />
          </Button>
        </div>
        <div className="d-inline-flex full-width">
          <section className="col-3">
            <h2 id="info-title">{data.body.name}</h2>
            <div id="words">
              <span>
                <h4 className="title-text">{(data.body.name === "Sun" ? "Star" : "Planet")} Type</h4>
                <p>{data.body.type}</p>
              </span>
              <span>
                <h4 className="title-text">Age</h4>
                <p>{data.body.age}</p>
              </span>
              <span>
                <h4 className="title-text">Distance from {(data.body.name === "Sun" ? "Galatic Center" : "Sun")}</h4>
                <p>{data.body.dist}</p>
              </span>
              <span>
                <h4 className="title-text">Length of Year</h4>
                <p>{data.body.year}</p>
              </span>
              <span>
                <h4 className="title-text">Namesake</h4>
                <p>{data.body.sake}</p>
              </span>
              <span>
                <h4 className="title-text">Average Temperature</h4>
                <p>{data.body.temp}</p>
              </span>
            </div>
          </section>
          <section className="col-5 align-self-center" id={data.body.name} key={data.body._id}>
            <figure>
              <img alt={data.body.name} src={require("../images/" + data.body.image).default} />
            </figure>
          </section>
          <section className="col-4 posts" id={data.body.name} key={data.body._id}>
            <h4 id="post-title"> Submitted Posts</h4>
            <Posts />
          </section>
        </div>
        <div className="flex-column justify-center align-center">
          <Button
            type='button'
            onClick={() => {
              if (count < 9) {
                setCount(count + 1);
              }
            }}>
            
            <FontAwesomeIcon icon={faAngleDown} />
          </Button>
        </div>
      </main>

    </div >
  );
};
