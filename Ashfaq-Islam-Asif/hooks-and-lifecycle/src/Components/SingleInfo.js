const SingleInfo = ({ field, value }) => {
    return (
        <p style={{ lineHeight: '10px' }}>
            <b>{field}: </b> {value}
        </p>
    );
};

export default SingleInfo;
