import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/title/Index';
import { getDataHome } from '../../redux-modules/modules/Home';
import Navigation from '../../components/navigation/Index';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';
import Categories from './Categories';
import Products from './Products';

const HomePage = (props) => {
    const { getDataHome, history } = props;
    useEffect(() => {
        getDataHome();
    }, [getDataHome]);
    
    const { dataHome } = props;
    const { data, loading } = dataHome;

    const handleFocus = (e) => {
        e.preventDefault();
        history.push('/search');
    };
    const handleClickProduct = (e, id) => {
        e.preventDefault();
        history.push(`/detail/${id}`);
    };
    
    return (
        <PageTitle title="Home">
            <div className="wrapper">
                <Navigation />
                <div className="home">
                    <div className="d-flex margin-top-4">
                        <IoIosHeartEmpty className="fa-heart text-left" />
                        <span className="position-relative search text-right">
                            <IoIosSearch className="search-icon" />
                            <input
                                className="input-search"
                                autoComplete="off"
                                type="text"
                                name="search"
                                onFocus={e => {handleFocus(e)}}
                            />
                        </span>
                    </div>
                    <Categories data={data} loading={loading} />
                    <Products
                        data={data}
                        handleClickProduct={handleClickProduct}
                        loading={loading}
                    />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
