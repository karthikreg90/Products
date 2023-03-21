import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedProducts, fetchProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const {title, price, image, category, description} = product;

    useEffect(()=>{
        if(productId && productId !== "") dispatch(fetchProduct(productId));
        return() => {
            dispatch(removeSelectedProducts());
        }
    }, [productId]);

    console.log("productDetails: ", product);
    return(
        <div className="ui grid container main">
            {Object.keys(product).length === 0 ? (
                <div>...Lodaing</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui verticle divider">And</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label"> $ {price} </a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui verticle animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default ProductDetails;