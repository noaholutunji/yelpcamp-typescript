import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../axios-order';
import Navbar from '../Navigation/Navbar';
import Body from './Body/Body';

const Campgrounds = () => {
  const [campground, setCampground] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('/campgrounds')
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground &&
      campground.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>
              <span className="glyphicon glyphicon-tent"></span>Welcome To
              YelpCamp
            </h1>
            <p>View our hand picked campgrounds from all over the world</p>
            <p>
              <Link href="/new" as="/new">
                <a className="btn btn-primary btn-lg">Add New Campground</a>
              </Link>
            </p>
          </div>
        </header>

        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tabRow()}
        </div>
      </div>
    </>
  );
};

export default Campgrounds;
