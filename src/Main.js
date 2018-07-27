import React, { Component } from 'react';
import MainAscii from './Main.ascii';

class Main extends Component {
    render() {
        return (
            <pre className='asciiart'>
                {MainAscii}
            </pre>
        );
    }
}

export default Main;