import React, { Component } from 'react';
import * as indexart from './indexart.ascii';

class Main extends Component {
    state = {
        artvalue: null,
    };

    componentDidMount() {
        fetch(new Request(indexart), {
            method: 'GET',
            cache: 'default',
        }).then((response) => response.text().then((artvalue) => this.setState({artvalue})));
    }

    render() {
        return (
            <pre className='asciiart'>
                {this.state.artvalue}
            </pre>
        );
    }
}

export default Main;
