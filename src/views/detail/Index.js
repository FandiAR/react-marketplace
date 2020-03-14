import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Skeleton from 'react-loading-skeleton';
import {
  getDataHome,
  handleLoved,
  addBuy
} from '../../redux-modules/modules/Home';
import PageTitle from '../../components/title/Index';
import { MdKeyboardBackspace, MdShare } from 'react-icons/md';
import { IoMdHeart, IoIosHeartEmpty } from 'react-icons/io';
import { TwitterShareButton } from "react-share";

const DetailPage = props => {
  const { getDataHome, history, match, handleLoved, addBuy } = props;
  const idParam = match.params.id;
  useEffect(() => {
    getDataHome();
  }, [getDataHome]);
  const { dataHome } = props;
  const { data } = dataHome;
  const currentLocation = window.location.href;
  let dataDetail = [];
  let objectDataDetail = null;
  if (data.productPromo.length > 0) {
    dataDetail = data.productPromo.filter(x => x.id === idParam);
  }
  if (dataDetail) {
    if (dataDetail.length > 0) {
      dataDetail.map(detail => {
        objectDataDetail = detail;
        return detail;
      });
    }
  }
  const backToPrev = e => {
    e.preventDefault();
    history.goBack();
  };

  let isLovedContent;
  if (objectDataDetail) {
    if (objectDataDetail.loved) {
      isLovedContent = (
        <div className="col-sm-2 col-xs-2 col-md-2 text-right">
          <IoMdHeart
            className="loved"
            onClick={e => handleLoved(0, objectDataDetail.id, "loved")}
          />
        </div>
      );
    } else {
      isLovedContent = (
        <div className="col-sm-2 col-xs-2 col-md-2 text-right">
          <IoIosHeartEmpty
            className="loved"
            onClick={e => handleLoved(1, objectDataDetail.id, "loved")}
          />
        </div>
      );
    }
  }
  
  return (
    <PageTitle title="Detail">
      <div className="wrapper">
        <div className="detail">
          {!objectDataDetail ? (
            <div className="margin-top-4">
              <Skeleton height={150} />
            </div>
          ) : (
              <div className="position-relative container-product">
                <div className="product-list">
                  <img src={objectDataDetail.imageUrl} alt="product" />
                </div>
                <MdKeyboardBackspace
                  className="back text-left"
                  onClick={e => {
                    backToPrev(e);
                  }}
                />
                <TwitterShareButton url={currentLocation}>
                  <MdShare className="share text-left" />
                </TwitterShareButton>
              </div>
            )}
          {!objectDataDetail ? (
            <Skeleton width="100%" />
          ) : (
              <div className="row">
                <div className="col-sm-10 col-xs-10 col-md-10 text-left font-12">
                  {objectDataDetail.title}
                </div>
                {isLovedContent}
              </div>
            )}
          {!objectDataDetail ? (
            <Skeleton height="45vh" />
          ) : (
              <div className="margin-top-4 text-justify description">
                {objectDataDetail.description}
              </div>
            )}
          {!objectDataDetail ? (
            ""
          ) : (
              <div className="d-flex text-right float-right">
                <div className="margin-top-4">{objectDataDetail.price}</div>
                <button
                  className="margin-left-4 margin-top-2 button-buy"
                  type="submit"
                  onClick={() => addBuy(objectDataDetail.id)}
                >
                  Buy
              </button>
              </div>
            )}
        </div>
      </div>
    </PageTitle>
  );
};
const mapStateToProps = (state, props) => ({
  dataHome: state.home
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getDataHome,
      handleLoved,
      addBuy
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
