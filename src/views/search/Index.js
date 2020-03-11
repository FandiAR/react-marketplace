import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/title/Index';
import { getDataHome } from '../../redux-modules/modules/Home';
import { IoIosSearch } from 'react-icons/io';
import { MdKeyboardBackspace } from 'react-icons/md'

const SearchPage = (props) => {
    const { getDataHome, history, dataHome } = props;
    const { data } = dataHome;
    const inputEl = useRef('');
    let [searchName, setResults] = useState('');
    let products = [];
    useEffect(() => {
        getDataHome();
    }, [getDataHome]);
    const backToHome = (e) => {
        e.preventDefault();
        history.push('/home');
    };

    let searchResults = [];
    if (searchName) {
        if (data) {
            if (data.productPromo) {
                if (data.productPromo.length > 0) {
                    products = data.productPromo;
                    const dataSearch = data.productPromo.filter(x => x.title
                        .toLowerCase()
                        .includes(searchName.toLowerCase()));
                    if (dataSearch.length === 0) {
                        searchResults = [];
                    } else {
                        searchResults = dataSearch;
                    }
                }
            }
        }
    } else {
        searchResults = products;
    }

    let content = [];
    if (searchName !== '') {
        if (searchResults.length > 0) {
            searchResults.map((dataResult, indexResult) => {
                content.push(
                    <div key={indexResult} className="content-search">
                        <div className="row">
                            <div className="col-sm-4 text-left">
                                <img src={dataResult.imageUrl} alt="products" />
                            </div>
                            <span className="col-sm-8 padding-left-4 text-left">
                                <div>{dataResult.title}</div>
                                <div className="padding-top-2">
                                    {dataResult.price}
                                </div>
                            </span>
                        </div>
                    </div>,
                );
                return dataResult;
            })
        }
    }
    

    return (
        <PageTitle title="Search">
            <div className="wrapper">
                <div className="home">
                    <div className="d-flex margin-top-4">
                        <MdKeyboardBackspace
                            className="fa-heart text-left"
                            onClick={e => { backToHome(e) }}
                        />
                        <span className="position-relative search text-right">
                            <IoIosSearch className="search-icon" />
                            <input
                                ref={inputEl}
                                className="input-search"
                                autoComplete="off"
                                placeholder="Search by product name e.g Nitendo"
                                type="text"
                                name="search"
                                onChange={e => setResults(e.target.value)}
                                value={searchName}
                            />
                        </span>
                    </div>
                    <div className="margin-top-4 home__search-container">
                        {content}
                    </div>
                </div>
            </div>
        </PageTitle>
    );
}
const mapStateToProps = (state, props) => ({
    dataHome: state.home,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getDataHome,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);