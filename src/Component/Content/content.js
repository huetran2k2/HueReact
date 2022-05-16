import React, {Component} from "react";
import Left from './Left/left';
import Right from "./Right/Right";

class Content extends Component {
    render() {
        return (
        <div id="content">
         <Left></Left>
         
         <Right></Right>
        </div>
        );
    }
}
export default Content;