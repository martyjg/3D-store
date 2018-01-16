import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideNav from './SideNav';
import {updateClientSettings} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    client: state.client
});

const mapStateToActions = {
    updateClientSettings
};

class Settings extends Component {

    constructor(props) {
        super(props);
        const { client } = props;
        this.state = {
            headerColor: client.headerColor,
            footerColor: client.footerColor,
            displayName: client.displayName,
            logo: client.logo,
            font: client.font,
            buttonBorder: client.buttonBorder,
            buttonColor: client.buttonColor,
            buttonPadding: client.buttonPadding,
            blogLink: client.blogLink,
            checkoutBannerLink: client.checkoutBannerLink,
            checkoutBanner: client.checkoutBanner,
            footerLeftColumn: client.footerLeftColumn,
            footerRightColumn: client.footerRightColumn
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

        const { client } = this.props;
        const styles = {
            button: {
                backgroundColor: client.buttonColor,
                padding: client.buttonPadding + 'px',
                border: client.buttonBorder + 'px solid black'
            }
        };
        const fontOptions = ['Helvetica', 'Monospace', 'Courier'];

        return (
            <div className='App-container'>
                <SideNav />
                <div className='Settings-container'>
                    <h1>Settings</h1>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <section className='Settings-first'>
                            <label>Link to Logo
                                <input
                                    value={this.state.logo}
                                    name='logo'
                                    type='text'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Display Name
                                <input
                                    value={this.state.displayName}
                                    name='displayName'
                                    type='text'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Header Background Color
                                <input
                                    value={this.state.headerColor}
                                    name='headerColor'
                                    type='color'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Footer Background Color
                                <input
                                    value={this.state.footerColor}
                                    name='footerColor'
                                    type='color'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Font
                                <select
                                    value={this.state.font}
                                    style={{fontFamily: this.state.font}}
                                    name='font'
                                    onChange={(e) => this.handleChange(e)}>
                                    {fontOptions.map((option, i) => (
                                        <option
                                            key={i}
                                            value={option}>{option}</option>
                                    ))}
                                </select>
                            </label>
                        </section>
                        <section className='Settings-second'>
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
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Button Padding
                                <input
                                    value={this.state.buttonPadding}
                                    name='buttonPadding'
                                    type='number'
                                    min='0'
                                    max='10'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>Button Color
                                <input
                                    value={this.state.buttonColor}
                                    name='buttonColor'
                                    type='color'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                        </section>
                        <section className='Settings-third'>
                            <label>Link to Blog
                                <input
                                    value={this.state.blogLink}
                                    name='blogLink'
                                    type='text'
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                        </section>
                        <section className='Settings-fourth'>
                            <label>
                                Custom Checkout Banner Link
                                <input
                                    name='checkoutBannerLink'
                                    value={this.state.checkoutBannerLink}
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>
                                Custom Checkout Banner (HTML-friendly)
                                {client.checkoutBanner &&
                                    <div>
                                        Preview:
                                        <div dangerouslySetInnerHTML={{__html: client.checkoutBanner}} />
                                    </div>
                                }
                                <textarea
                                    name='checkoutBanner'
                                    value={this.state.checkoutBanner}
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>
                                Footer Left Column (HTML-friendly)
                                <textarea
                                    name='footerLeftColumn'
                                    value={this.state.footerLeftColumn}
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                            <label>
                                Footer Right Column (HTML-friendly)
                                <textarea
                                    name='footerRightColumn'
                                    value={this.state.footerRightColumn}
                                    onChange={(e) => this.handleChange(e)}
                                    />
                            </label>
                        </section>
                        <button
                            style={styles.button}
                            type='submit'>Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapStateToActions)(Settings);
