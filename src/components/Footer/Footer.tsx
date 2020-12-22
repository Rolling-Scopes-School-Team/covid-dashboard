// import classNames from 'classnames';
import React from 'react';

// import styles from '@/components/Footer/index.scss';
// import classes from '@/components/index.scss';

const Footer = (): JSX.Element => (
  <footer className="container">
    <div className="logo">
      {/* <pre>R{"        "}S{"\n"}SC HO OL{"\n"}{"        "}</pre> */}
      RS SCHOOL
    </div>
    <div className="github-links">
      <ul>
        App developers:
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            {/* <object type="image/svg+xml" data="github.svg" className="icon-github" /> */}
            Git account
          </a>
        </li>
      </ul>
      <span className="year">2020</span>
    </div>
  </footer>
);

export default Footer;
