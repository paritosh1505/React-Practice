import React from 'react';

export default function ButtonComponent(props) {

  return (

    <button className="bg-green-600 rounded-full border-spacing-5 py-2 px-6">
      {props.props}
    </button>
  );
}
