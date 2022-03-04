import React from "react";
import p from 'prop-types'

function Button({
  children,
  version = "primary",
  type = "submit",
  isDisabled = "false",
}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
    children: p.node.isRequired,
    version: p.string,
    type: p.string,
    isDisabled: p.bool,
}

export default Button;
