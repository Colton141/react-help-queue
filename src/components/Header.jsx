import React from "react";

function Header(){
  var headerStyles = {
    backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '50px',
    color: 'white',
  }
  return (
    <div style={headerStyles}>
    <h1>Help Queue</h1>
    </div>
  );
}

export default Header;
