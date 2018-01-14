import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideNav from './SideNav';

import {updateClientSettings} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
})

const mapStateToActions = {
    updateClientSettings
}

class Settings extends Component {

    constructor(props) {
        super(props);
        const { client } = props
        this.state = {
            color: client.color,
            displayName: client.displayName,
            logo: client.logo,
            font: client.font,
            buttonBorder: client.buttonBorder,
            buttonColor: client.buttonColor,
            buttonPadding: client.buttonPadding
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateClientSettings(this.props.client.id, this.state);
    }

    render() {
        return (
            <div className='App-container'>
                <SideNav />
                <div style={{width: '100%', padding: '0 4px', textAlign: 'left'}}>
                    <h1>Settings</h1>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <section>
                            <label>Link to Logo
                                <input
                                    value={this.state.logo}
                                    name='logo'
                                    type='text'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                            <label>Display Name
                                <input
                                    value={this.state.displayName}
                                    name='displayName'
                                    type='text'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                            <label>Theme Color
                                <input
                                    value={this.state.color}
                                    name='color'
                                    type='color'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                        </section>
                        <section>
                            <div>
                                Button Style:
                                <button
                                    style={{
                                        backgroundColor: this.state.buttonColor,
                                        padding: this.state.buttonPadding + 'px',
                                        border: this.state.buttonBorder + 'px solid black'
                                    }}
                                    type='button'
                                    disabled>
                                    Preview
                                </button>
                            </div>
                            <label>Border Pixel Width
                                <input
                                    value={this.state.buttonBorder}
                                    name='buttonBorder'
                                    type='number'
                                    min='0'
                                    max='5'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                            <label>Button Padding
                                <input
                                    value={this.state.buttonPadding}
                                    name='buttonPadding'
                                    type='number'
                                    min='0'
                                    max='10'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                            <label>Button Color
                                <input
                                    value={this.state.buttonColor}
                                    name='buttonColor'
                                    type='color'
                                    onChange={this.handleChange.bind(this)}
                                    />
                            </label>
                        </section>
                        <section>
                            {/* blog link, special banner, customized footer */}
                        </section>
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapStateToActions)(Settings)
