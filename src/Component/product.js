import React, {Component} from 'react';
function NumberOne(props){
    return (
        <div>
            <div class="row">
                <img src= {props.linkanh} height="200px" width="200px" alt=""/>
                <p>{props.tieude}</p>
                <p>Gia san pham: 400</p>
            </div>
        </div>
    )
}
export default NumberOne;