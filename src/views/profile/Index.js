import React from "react";
import { connect } from "react-redux";
import PageTitle from "../../components/title/Index";
import { MdKeyboardBackspace } from "react-icons/md";

const ProfilePage = props => {
  const { history } = props;
  let content = [];
  const getSoldList = JSON.parse(localStorage.getItem("sold"));
  const handleClickProduct = (e, id) => {
    e.preventDefault();
    history.push(`/detail/${id}`);
  };
  if (getSoldList) {
    if (getSoldList.length > 0) {
      getSoldList.map((data, index) => {
        content.push(
          <div key={index} className="content-sold">
            <div
              className="row sold-product"
              onClick={e => handleClickProduct(e, data.id)}
            >
              <div className="col-sm-4 text-left">
                <img src={data.imageUrl} alt="products" />
              </div>
              <span className="col-sm-8 padding-left-4 text-left">
                <div>{data.title}</div>
                <div className="padding-top-2">{data.price}</div>
              </span>
            </div>
          </div>
        );
        return data;
      });
    }
  }
  const backToHome = e => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <PageTitle title="Purchase">
      <div className="wrapper">
        <div className="sold">
          <div className="text-left margin-top-4">
            <MdKeyboardBackspace
              className="fa-heart"
              onClick={e => {
                backToHome(e);
              }}
            />
            <span className="padding-left-4">Purchase History</span>
          </div>
          <div className="margin-top-2 sold__search-sold">{content}</div>
        </div>
      </div>
    </PageTitle>
  );
};
const mapStateToProps = (state, props) => ({
  dataHome: state.home
});
export default connect(mapStateToProps, null)(ProfilePage);
