import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })
  let myStyle = {
    color: props.mode ==='dark'?'white':'#5573d1',
    backgroundColor: props.mode === 'dark'?'#5573d1':'white',
    borderRadius: '5px'
  }
  return (
    <div className="container py-2" style= {{color: props.mode ==='dark'?'white':'#042743',}}>
      <h1 className="my-1">About Us</h1>
      <div className="accordion my-1" id="accordionExample" style= {myStyle}>
        <div className="accordion-item" style= {myStyle}>
          <h2 className="accordion-header" id="headingOne">
          </h2>
          <div>
            <div className="accordion-body">
              <h3>This is the first item's accordion body.</h3> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style= {myStyle}>
          <div>
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style= {myStyle}>
          <div>
            <div className="accordion-body" style= {myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}