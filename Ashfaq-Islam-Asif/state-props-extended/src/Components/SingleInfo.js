import { Component } from 'react';

class SingleInfo extends Component {
    render() {
        const { field, value } = this.props.info;
        return (
            <p style={{ lineHeight: '10px' }}>
                <b>{field}: </b> {value}
            </p>
        );
    }
}

export default SingleInfo;
