import React from "react";
import p from 'prop-types';

//<div className={`card ${reverse && 'reverse'}`}>{children}</div>
//CLASSE CONDICIONAL

function Card({ children, reverse = true}) {
  return (
    <div   
      className="card"
      style={{
        backgroundColor: reverse ?  '#fff' : 'rgba(0,0,0,0.4)',
        color: reverse ? '#000' : '#fff',
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
    children: p.node.isRequired,
    reverse: p.bool,
}

export default Card;
