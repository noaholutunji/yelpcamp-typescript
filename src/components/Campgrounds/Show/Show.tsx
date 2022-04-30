import React, { useState, useEffect } from 'react';
import cookie from 'js-cookie';
import axios from '../../../axios-order';
import Table from './Table/Table';
import { useRouter } from 'next/router';
import Navbar from '../../Navigation/Navbar';

export interface IUser {
  _id: string;
  username: string;
  password: string;
}

export interface ICampground {
  _id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  owner: string;
}

export type ShowProps = {
  id: string;
};

const Show = ({ id }: ShowProps) => {
  const [campground, setCampground] = useState<ICampground | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  // const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    const authUser = cookie.get('user');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground && (
        <Table
          obj={campground}
          userId={user ? user._id : ''}
          key={campground._id}
        />
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">{tabRow()}</div>
    </>
  );
};

export default Show;
