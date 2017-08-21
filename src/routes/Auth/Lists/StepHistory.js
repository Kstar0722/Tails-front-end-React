export default class StepHistory extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { currentState } = this.props
        return (
            <div className="step-history">
                <div className="step-item">
                    <div className={currentState == 'stepTwo' ? "step-two-circle circle" : "circle"}>1</div>
                    <div className={currentState == 'stepTwo' ? "step-two-line line" : "line"}></div>
                </div>
                <div className="step-item">
                    <div className={currentState == 'stepTwo' ? "step-two-circle circle" : "circle"}>2</div>
                    <div className={currentState == 'stepTwo' ? "step-two-line line" : "line"}></div>
                </div>
                <div className="step-item">
                    <div className={currentState == 'stepTwo' ? "step-two-circle-three-btn circle" : "circle"}>3</div>
                </div>
            </div>         
        )
    }
}