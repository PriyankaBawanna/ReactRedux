import React, { useState } from "react";

function Button(props: any) {
  const { disabled, onClick } = props;

  return (
    <div>
      <button disabled={disabled} onClick={onClick}></button>
    </div>
  );
}
export default Button;
