import { Component } from 'react';
import { Bars } from 'react-loader-spinner';

class Loader extends Component {
    render() {
        return (
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" />
            </div>
        );
    }
}

export default Loader;
