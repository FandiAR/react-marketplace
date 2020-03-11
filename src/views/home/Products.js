import React from 'react';
import { IoMdHeart, IoIosHeartEmpty } from 'react-icons/io';

const Products = (props) => {
    const { data } = props;
    let products = [];
    if (data) {
        if (data.productPromo) {
            if (data.productPromo.length > 0) {
                data.productPromo.map((data, index) => {
                    products.push(
                        <div className="margin-top-4" key={index}>
                            <div className="container position-relative">
                                <div className="product-list">
                                    <img src={data.imageUrl} alt="category" />
                                </div>
                                {
                                    data.loved > 0
                                        ? <IoMdHeart className="loved text-left" />
                                        : <IoIosHeartEmpty className="loved text-left" />
                                }
                            </div>
                            <div className="padding-top-2 text-left title">{data.title}</div>
                        </div>,
                    );
                    return data;
                })
            }
        }
    }
    return (
        <div className="products">{products}</div>
    )
}
export default Products;