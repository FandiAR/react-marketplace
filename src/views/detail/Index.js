import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../components/title/Index';
import { MdKeyboardBackspace } from 'react-icons/md'

const DetailPage = (props) => {
    const { history } = props;
    const backToPrev = (e) => {
        history.goBack();
    };
    return (
        <PageTitle title="Detail">
            <div className="wrapper">
                <MdKeyboardBackspace
                    className="fa-heart text-left"
                    onClick={e => { backToPrev(e) }}
                />
            </div>
        </PageTitle>
    );
}
const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);