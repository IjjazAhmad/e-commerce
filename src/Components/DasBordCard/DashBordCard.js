import React from 'react';

export default function DashBordCard(props) {
  return (
    <>
      <div className={`card bg-${props.bg} rounded-4 border-0 text-white p-2 px-3`}>
        <div className="icon mb-4">
          <i className={`fa fa-${props.icon} text-${props.bg}`}></i>
        </div>
        <p className="mb-0 title lh-sm fw-semibold">
          {props.title}
          <p className="description mt-1 fw-normal">
            {props.totalOrder}
          </p>
        </p>
      </div>
    </>
  );
}
