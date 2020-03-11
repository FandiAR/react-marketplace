import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const menuOptions = [
        { name: "Home", link: "/home" },
        { name: "Feed", link: "/" },
        { name: "Cart", link: "/" },
        { name: "Profile", link: "/" },
    ];
    return (
        <div className="navigation">
            {
                menuOptions.map((data, index) => {
                    return (
                        <NavLink key={index} to={data.link} className="navigation__menu" activeClassName="navigation__active-menu">
                            {data.name}
                        </NavLink>
                    )
                })
            }
        </div>
    );
}
export default Navigation;