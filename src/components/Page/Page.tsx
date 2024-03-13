import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

const copy = {
  sitename: "The United States Puppy Employment Administration",
  footer: "This website is for demonstration purposes only.",
  attributes:
    "Dog images pulled from Reddit.com/r/dogswithjobs.",
};

interface Props {
  children: ReactNode;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div style={style}>
      <Header sitename={copy.sitename} />
      {children}
      <Footer footer={copy.footer} attributes={copy.attributes} />
    </div>
  );
};

const style: React.CSSProperties = {
  fontFamily:
    "system, -apple-system, BlinkMacSystemFont, Helvetica Neue, Lucida Grande",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

export default Page;
