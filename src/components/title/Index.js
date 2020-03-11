import React from 'react';
import Helmet from 'react-helmet';

const defaultTitle = 'RUMAH SEHAT';

function Title(props) {
    const { title, children } = props;
    return (
        <React.Fragment>
            <Helmet
                title={title ? `${title} | Fandi` : defaultTitle}
            />
            {children}
        </React.Fragment>
    );
}
export default Title;
