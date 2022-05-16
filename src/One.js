import React, { Component } from 'react';

class One extends Component {
    render() {
        return (
            <div id="conten-right">
            <div id="products">
            <div className="product">
                <div className="text">
                    <div className="chose"><a href="#">{this.props.name}</a></div>
                </div>
                <div className="img-product">
                    <img src={this.props.image} alt="" />
                </div>
                <div className="infomation">
                    <div className="infomation-detail">{this.props.detail}</div>
                    <div className="please">please Call</div>
                    <div className="submit"><input type="submit" name="ADD" defaultValue="ADD" /></div>
                </div>
                </div>
                </div>
                </div>
            );
        }
}

export default One;