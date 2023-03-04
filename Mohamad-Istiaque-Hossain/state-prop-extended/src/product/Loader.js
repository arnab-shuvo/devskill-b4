import { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div class="loading">
                <span class="loading-bar"></span>
                <span class="loading-bar"></span>
                <span class="loading-bar"></span>
            </div>
        );
    }
}

export default Loader;