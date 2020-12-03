import React from "react";
import ReactDom from "react-dom";
function WishList() {
  return ReactDom.createPortal(
    <div>
      <h1>wishlist</h1>
    </div>,
    document.getElementById("division")
  );
}

export default WishList;
