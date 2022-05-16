import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            render(this.props)
            
        )
    }
}
var render = (product)=>{
    return (
        // <div className="product">
        //        <div className="text">
        //       <div className="chose"><a href="#">{product.name}</a></div>
        //      </div>
        //       <div className="img-product">
        //          <img src={product.img} alt="" />
        //       </div>
        //       <div className="infomation">
        //           <div className="infomation-detail">{product.price}</div>
        //      <div className="please">please Call</div>
        //          <div className="submit"><input type="submit" name="ADD" defaultValue="ADD" /></div>
        //         </div>
        //         </div>

        <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                {/* Product Image */}
                         <div className="product-img">
                        <img src="{product.img}" alt="" />
                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                       </div>
                        {/* Product Description */}
                         <div className="product-description">
                           <h4 className="product-price">{product.price}</h4>
                           <p>{product.name}</p>
        //                     {/* Add to Cart */}
        //                     <a href="#" className="add-to-cart-btn">ADD TO CART</a>
        //                   </div>
        //                 </div>
    )
}

