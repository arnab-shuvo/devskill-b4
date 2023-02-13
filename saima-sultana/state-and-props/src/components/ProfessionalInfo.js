import { Component } from 'react';
class ProfessionalInfo extends Component {
    render() {
        const { designation, company, yoe } = this.props.professionalInfo;
        return (
            <div>
                <h3>Professional Information</h3>
                <p><b>Designation:</b> {designation}</p>
                <p><b>Company:</b> {company}</p>
                <p><b>Years of Experience:</b> {yoe}</p>
            </div>
        );
    }
}

export default ProfessionalInfo;