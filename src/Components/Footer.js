import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://github.com/jayeshbhole7"
          target="_blank"
          rel="noreferrer noopener"
        >
          Jayesh
        </a>{" "}
        a Stellar Programmer Exploring the Final Frontier with
        <span className="text-gradient font-medium"> Coffee</span> &
        <span className="text-gradient font-medium"> Logic</span>
      </p>
    </footer>
  );
}
export default Footer;
