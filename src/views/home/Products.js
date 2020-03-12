import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { IoMdHeart, IoIosHeartEmpty } from 'react-icons/io';

const Products = (props) => {
    const { data, handleClickProduct, loading } = props;
    let products = [];
    if (data.productPromo.length > 0) {
        data.productPromo.map((data, index) => {
            products.push(
                <div className="margin-top-4" key={index}>
                    <div
                        className="container position-relative"
                        onClick={e => handleClickProduct(e, data.id)}
                    >
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
    return (
        <div className="products">
            {
                loading
                    ? (
                        <React.Fragment>
                            <div className="margin-top-4">
                                <Skeleton height={150} />
                            </div>
                            <div className="margin-top-4">
                                <Skeleton height={150} />
                            </div>
                        </React.Fragment>
                    )
                    : products
            }
        </div>
    )
}
export default Products;