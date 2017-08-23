import { Link } from 'react-router';

export default class NextStep extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { nextStep, disabled } = this.props
        
        return (
            <div className="btn-next-step">
                <Link className= {disabled ? "btn btn-next disabled" : "btn btn-next"  }   to={nextStep}>Next</Link>
            </div>
        )
    }
}