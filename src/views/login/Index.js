import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login = (props) => {
    const { history } = props;
    const responseFacebook = (response) => {
        console.log(response);
    };
    const responseGoogle = (response) => {
        console.log(response);
    };
    const customStyle = {
        height: '30px',
        fontSize: '12px',
        background: '#4c8bf5',
        color: '#ffff',
        borderRadius: '5px',
        width: '70%',
    };
    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/home');
    }
    return (
        <div className="wrapper">
            <div className="login__container">
                <div className="login-header">LOGIN</div>
                <input type="text" className="margin-top-8" placeholder="Username" />
                <input type="password" className="margin-top-4 margin-bottom-4" placeholder="Password" />
                <div className="d-flex">
                    <div className="col-xs-6 col-sm-6 col-md-6 text-left">
                        <input type="checkbox" id="rememberCheck" />
                        <label className="padding-left-1" htmlFor="rememberCheck">Remember me</label>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                        <button type="submit" className="login-button" onClick={e => handleLogin(e)}>Sign In</button>
                    </div>
                </div>
                <div className="margin-top-8">
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={false}
                        callback={responseFacebook}
                        fields="name,email,picture"
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                        textButton="Sign in with Facebook"
                    />
                </div>
                <div className="margin-top-4">
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button type="submit" onClick={e => renderProps.onClick(e)} style={customStyle}>
                                <i className="fa fa-google" />
                                <span className="padding-left-2">Sign in with Google</span>
                            </button>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
export default Login;