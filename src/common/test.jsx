// import React from "react";
// import ReactDOM from "react-dom";
// import anime from "animejs";

// import "./styles.css";

// class Box extends React.Component {
//   myRef = React.createRef();
//   labelRef = React.createRef();

//   componentDidMount() {}

//   componentDidUpdate() {
//     const xFrom = this.props.alteredPosition ? "-10em" : "10em";
//     const yFrom = this.props.alteredPosition ? "-2em" : "2em";

//     var basicTimeline = anime.timeline();
//     basicTimeline
//       .add({
//         targets: this.myRef.current,
//         translateX: [xFrom, 0],
//         duration: 500,
//         easing: "easeOutSine"
//       })
//       .add({
//         targets: this.labelRef.current,
//         translateY: [yFrom, 0],
//         duration: 500,
//         easing: "easeOutSine",
//         offset: "0"
//       });
//   }

//   render() {
//     const positionClass = this.props.alteredPosition ? " otherPosition" : "";
//     return (
//       <div ref={this.myRef} className={"box" + positionClass}>
//         <div ref={this.labelRef} className={"label" + positionClass}>
//           Hey there
//         </div>
//       </div>
//     );
//   }
// }
// export default Box;
