import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Categories = (props) => {
    const { data, loading } = props;
    let categories = [];
    if (data.category.length > 0) {
        data.category.map((data, index) => {
            categories.push(
                <div className="d-inline-flex" key={index}>
                    <div className="categories">
                        <div className="margin-top-2">
                            <img src={data.imageUrl} alt="category" />
                            <p className="padding-top-1">{data.name}</p>
                        </div>
                    </div>
                </div>,
            );
            return data;
        })
    }

    return (
        <React.Fragment>
            {
                loading
                    ? (
                        <React.Fragment>
                            <div className="margin-top-2">
                                <Skeleton height={70} />
                            </div>
                        </React.Fragment>
                    )
                    : categories
            }
        </React.Fragment>
    )
}
export default Categories;