import React from 'react';

const Categories = (props) => {
    const { data } = props;
    let categories = [];
    if (data) {
        if (data.category) {
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
        }
    }

    return (
        <React.Fragment>{categories}</React.Fragment>
    )
}
export default Categories;