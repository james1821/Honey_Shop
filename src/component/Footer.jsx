import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-200 py-4 text-center">
      <div></div>
      <p className="text-black">
        <a target="_blank" href="https://github.com/james1821">
          {" "}
          <u>&copy; James {new Date().getFullYear()} </u>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
