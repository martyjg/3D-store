import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

const SideNav = ({ client }) => (
    <aside style={{flex: '0 0 300px', borderRight: '1px solid black', display: 'flex', flexDirection: 'column'}}>
        <nav style={{position: 'sticky', top: '0'}}>
            <ul>
                <li>
                    <h4>
                        <Link to='products'>Products</Link>
                    </h4>
                </li>
                {client.blogLink &&
                    <li>
                        <h4>
                            <a href={client.blogLink}>Blog</a>
                        </h4>
                    </li>
                }
                <li>
                    <h4>
                        <Link to='settings'>Settings</Link>
                    </h4>
                </li>
            </ul>
        </nav>
    </aside>
);

export default connect(mapStateToProps)(SideNav);
