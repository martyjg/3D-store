import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => (
    <aside style={{flex: '0 0 300px', borderRight: '1px solid black'}}>
        <nav style={{position: 'sticky', top: '0'}}>
            <ul>
                <li>
                    <h4>
                        <Link to='products'>Products</Link>
                    </h4>
                </li>
                <li>
                    <h4>
                        <Link to='settings'>Settings</Link>
                    </h4>
                </li>
            </ul>
        </nav>
    </aside>
);

export default SideNav;
