import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
 position: relative;
 display: inline-block;
 cursor: pointer;
 outline: none;
 border: 0;
 vertical-align: middle;
 text-decoration: none;
 background: transparent;
 padding: 0;
 font-size: inherit;
 font-family: inherit;
}

button.learn-more {
 width: 12rem;
 height: auto;
}

button.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #282936;
 border-radius: 1.625rem;
}

button.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}

button.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

button.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
 top: -0.29rem;
 right: 0.0625rem;
 width: 0.625rem;
 height: 0.625rem;
 border-top: 0.125rem solid #fff;
 border-right: 0.125rem solid #fff;
 transform: rotate(45deg);
}

button.learn-more .button-text {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 padding: 0.75rem 0;
 margin: 0 0 0 1.85rem;
 color: #282936;
 font-weight: 700;
 line-height: 1.6;
 text-align: center;
 text-transform: uppercase;
}

button:hover .circle {
 width: 100%;
}

button:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}

button:hover .button-text {
 color: #fff;
}
`;

export default Button;

// import React from "react";
// import styled from "styled-components";

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="btn">
//         <div className="wrapper">
//           <p className="text">read more</p>

//           <div className="flower flower1">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//           <div className="flower flower2">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//           <div className="flower flower3">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//           <div className="flower flower4">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//           <div className="flower flower5">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//           <div className="flower flower6">
//             <div className="petal one" />
//             <div className="petal two" />
//             <div className="petal three" />
//             <div className="petal four" />
//           </div>
//         </div>
//       </button>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .btn {
//   height: 4em;
//   width: 12em;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: transparent;
//   border: 0px solid black;
//   cursor: pointer;
// }

// .wrapper {
//   height: 2em;
//   width: 8em;
//   position: relative;
//   background: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .text {
//   font-size: 17px;
//   z-index: 1;
//   color: #000;
//   padding: 4px 12px;
//   border-radius: 4px;
//   background: #fefae0;
//   transition: all 0.5s ease;
// }

// .flower {
//   display: grid;
//   grid-template-columns: 1em 1em;
//   position: absolute;
//   transition: grid-template-columns 0.8s ease;
// }

// .flower1 {
//   top: -12px;
//   left: -13px;
//   transform: rotate(5deg);
// }

// .flower2 {
//   bottom: -5px;
//   left: 8px;
//   transform: rotate(35deg);
// }

// .flower3 {
//   bottom: -15px;
//   transform: rotate(0deg);
// }

// .flower4 {
//   top: -14px;
//   transform: rotate(15deg);
// }

// .flower5 {
//   right: 11px;
//   top: -3px;
//   transform: rotate(25deg);
// }

// .flower6 {
//   right: -15px;
//   bottom: -15px;
//   transform: rotate(30deg);
// }

// .petal {
//   height: 1em;
//   width: 1em;
//   border-radius: 40% 70% / 7% 90%;
//   background: linear-gradient(#07a6d7, #93e0ee);
//   border: 0.5px solid #96d1ec;
//   z-index: 0;
//   transition: width 0.8s ease, height 0.8s ease;
// }

// .two {
//   transform: rotate(90deg);
// }

// .three {
//   transform: rotate(270deg);
// }

// .four {
//   transform: rotate(180deg);
// }

// .btn:hover .petal {
//   background: linear-gradient(#0761d7, #93bdee);
//   border: 0.5px solid #96b4ec;
// }

// .btn:hover .flower {
//   grid-template-columns: 1.5em 1.5em;
// }

// .btn:hover .flower .petal {
//   width: 1.5em;
//   height: 1.5em;
// }

// .btn:hover .text {
//   background: rgba(255, 255, 255, 0.4);
// }

// .btn:hover div.flower1 {
//   animation: 15s linear 0s normal none infinite running flower1;
// }

// @keyframes flower1 {
//   0% {
//     transform: rotate(5deg);
//   }

//   100% {
//     transform: rotate(365deg);
//   }
// }

// .btn:hover div.flower2 {
//   animation: 13s linear 1s normal none infinite running flower2;
// }

// @keyframes flower2 {
//   0% {
//     transform: rotate(35deg);
//   }

//   100% {
//     transform: rotate(-325deg);
//   }
// }

// .btn:hover div.flower3 {
//   animation: 16s linear 1s normal none infinite running flower3;
// }

// @keyframes flower3 {
//   0% {
//     transform: rotate(0deg);
//   }

//   100% {
//     transform: rotate(360deg);
//   }
// }

// .btn:hover div.flower4 {
//   animation: 17s linear 1s normal none infinite running flower4;
// }

// @keyframes flower4 {
//   0% {
//     transform: rotate(15deg);
//   }

//   100% {
//     transform: rotate(375deg);
//   }
// }

// .btn:hover div.flower5 {
//   animation: 20s linear 1s normal none infinite running flower5;
// }

// @keyframes flower5 {
//   0% {
//     transform: rotate(25deg);
//   }

//   100% {
//     transform: rotate(-335deg);
//   }
// }

// .btn:hover div.flower6 {
//   animation: 15s linear 1s normal none infinite running flower6;
// }

// @keyframes flower6 {
//   0% {
//     transform: rotate(30deg);
//   }

//   100% {
//     transform: rotate(390deg);
//   }
// }

// `;

// export default Button;
