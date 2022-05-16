// import React, { Component } from "react";
import React from "react";
import { ReactDOM } from "react";
// import Products_data from "./data";

// import Content from './Component/Content/content';
// import Header from "./Component/Header/Header";
// class App extends Component {
//     render() {
//         return (
//         <div id="container">
//         <Header></Header>
//         <Content></Content>
//         <div className="footer">
//           <h3>Passerelled Numerques.org</h3>
//           <div>
//             <ul className="lop">
//               <li><a href>Product |</a></li>
//               <li><a href>About us |</a></li>
//               <li><a href>Contact |</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//         );
//     }
// }
// export default App;


// class App extends Component {
//   constructor (props){
//     var arr = Products_data();
//     super (props);
//     this.state = {arr};
//   }
//   render() {
//     return (
//       <div>{
//         this.state.arr.map(key =>
//         // <div> <h2> {key.name}</h2></div>

//         <div className="product">
//         <div className="text">
//           <div className="chose"><a href="#">{key.name}</a></div>
//         </div>
//         <div className="img-product">
//           <img src={key.image} alt="" />
//         </div>
//         <div className="infomation">
//           <div className="infomation-detail">{key.detail}</div>
//           <div className="please">please Call</div>
//           <div className="submit"><input type="submit" name="ADD" defaultValue="ADD" /></div>
//         </div>
//       </div>

//       )
//     }
//     </div>
//   );
//   }
// };

// export default App;

 
 class App extends React.Component {
   constructor (props){
     super(props);
     this.state = {
       brand :"Ford",
       model : "Mustang",
       color  : "red",
      year: 1974
     };
   }
   changeColor = ()=>{
    this.setState({color: "Yellow"});
   }
   render() {
     return (
       <div>
         <h1>My {this.state.brand}</h1>
         <p>
           It is a {this.state.color}
           {this.state.year}
         </p>
         <button
         type="button"
         onClick ={this.changeColor}> change color</button>
         
       </div>
     );
   }
 }

 export default App;