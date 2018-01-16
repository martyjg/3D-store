import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

const SideNav = ({ client }) => (
    <aside className='SideNav-container'>
        <nav>
            <ul>
                <li>
                    <Link to='products'>
                        <h4>
                            Products
                        </h4>
                    </Link>
                </li>
                {client.blogLink &&
                    <li>
                        <a href={client.blogLink}>
                            <h4>
                                Blog
                            </h4>
                        </a>
                    </li>
                }
                <li>
                    <Link to='settings'>
                        <h4>
                            Settings
                        </h4>
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default connect(mapStateToProps)(SideNav);
