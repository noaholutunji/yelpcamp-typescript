import React, { useState } from 'react';
import axios from '../../../../axios-order';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import Router from 'next/router';
import { string } from 'prop-types';

interface IntProps {
  userId: string;
  obj: {
    _id: string;
    image: string;
    name: string;
    price: string;
    description: string;
    owner: string;
  };
}

const Table = (props: IntProps) => {
  const router = useRouter();
  const { id } = router.query;

  const deleted = () => {
    const token = cookie.get('token');

    axios
      .delete(`/campgrounds/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Router.push('/campgrounds');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="thumbnail">
            <img
              style={{ width: '100%' }}
              alt=""
              className="img-responsive"
              src={props.obj.image}
            />
            <div className="caption-full">
              <h4 className="pull-right">₦{props.obj.price}</h4>
              <h4>{props.obj.name}</h4>
              <p>{props.obj.description}</p>

              {props.userId === props.obj.owner && (
                <div>
                  <Link
                    href={`/edit?id=${props.obj._id}`}
                    as={`/edit/${props.obj._id}`}
                  >
                    <a className="btn btn-primary">Edit</a>
                  </Link>

                  <button
                    style={{ marginLeft: '20px' }}
                    onClick={deleted}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
