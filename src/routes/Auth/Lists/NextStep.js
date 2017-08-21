import { Link } from 'react-router';

export default class NextStep extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { nextStep } = this.props
        return (
            <div className="btn-next-step">
                <Link className="btn btn-next" to={nextStep}>Next</Link>
            </div>
        )
    }
}