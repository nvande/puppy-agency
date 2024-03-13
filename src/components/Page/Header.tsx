import React from "react";

import Logo from "../../bits/Logo";

interface Props {
  sitename: string;
}

const Header: React.FC<Props> = ({ sitename }) => {
  return (
    <header style={style}>
      <a onClick={() => window.location.reload()}>
        <Logo sitename={sitename} />
      </a>
    </header>
  );
};

const style: React.CSSProperties = {
  cursor: "pointer",
  backgroundColor: "#444",
  color: "#fff",
  padding: "10px 15px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

export default Header;
