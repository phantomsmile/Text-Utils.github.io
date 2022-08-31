import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#5573d1",
    backgroundColor: props.mode === "dark" ? "#5573d1" : "white",
    borderRadius: "5px",
  };
  return (
    <div
      className="container py-2"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-1">About Us</h1>
      <div className="accordion my-1" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <div>
            <div className="About Text-Utils my-2 mx-2">
              <h3>Intorduction</h3>
              <br />
              We provide free tools to help you with your daily tasks. You will
              find tools for formatting source code, converters, tools for
              handling text, such as remove duplicate characters, empty lines,
              text sorter and many others. Check the current features below and
              feel free to recommend a new feature by contacting us.<br /><br />
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <div>
            <div className="News my-2 mx-2">
              <h3>News</h3>
              <br />
              Aug 29, 2022 - Minor fixes and background updates to improve
              performance.
              <br />
              May 05, 2022 - Rating and feedback features added.
              <br />
              Mar 12, 2022 - Adding quick message feature and a new utility for
              handling Number operations!
              <br />
              Mar 10, 2022 - New functionality: Remove duplicate keywords from a
              given input.
              <br />
              Nov 19, 2021 - Initial versions of the JSON to CSV converter &
              Find and replace are now available.
              <br />
              Nov 18, 2021 - Sharing your results is now possible with our
              newest client-side feature (no data is saved in our servers!).<br />
              Nov 09, 2021 - A rest for your eyes - dark mode is now available.<br /> Sep
              28, 2021 - New IPv6 extractor functionality is now available.<br /> Sep
              7, 2021 - Remove special characters with multiple options is now
              available.<br /> Aug 29, 2021 - Added a new option for the Remove
              Duplicate Lines utility.<br /> Jun 13, 2021 - Multiple new functions are
              now available.<br /> Mar 21, 2021 - Major code refactoring. Most
              functionalities are now client side.<br /> May 5, 2020 - SSL is now
              enabled by default.<br /> May 19, 2017 - Minor fixes and updates.<br /> Oct
              22, 2016 - Site improvements. Small adjustments to improve site
              performance and user experience.<br /> Feb 17, 2015 - Functionality
              fixes and improvements.<br /> Aug 2, 2014 - Site improvements. Layout
              enhancements, bug fixes, and new tools available: E-mail and IP
              Regex Extractors. Check this out!<br /> Apr 20, 2014 - Text-Utils has
              been released! Text-Utils is a web tool to assist developers and
              other people in daily tasks by providing tools for manipulating
              text data. The Initial tools include HTML, JSON, SQL, and XML
              formatters, Base 64 and URL encoder/decoder, and many other tools
              to handle text. Check this out!<br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
