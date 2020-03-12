import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const menuOptions = [
        { name: "Home", link: "/home" },
        { name: "Feed", link: "/home" },
        { name: "Cart", link: "/home" },
        { name: "Profile", link: "/profile" },
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