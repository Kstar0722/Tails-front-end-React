export default class StepHistory extends React.Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { currentState } = this.props
        return (
            <div className="step-history">
                <div className="step-item">
                    <div className={
                        currentState == 'stepOne' || currentState == 'stepTwo' || currentState == 'stepThree'
                         ? "step-active-circle circle" : "circle"
                    }>1</div>
                    <div className={
                        currentState == 'stepTwo' || currentState == 'stepThree'
                         ? "step-active-line line" : "line"
                    }></div>
                </div>
                <div className="step-item">
                    <div className={
                        currentState == 'stepTwo' || currentState == 'stepThree'
                         ? "step-active-circle circle" : "circle"}
                    >2</div>                    
                </div>
                <div className="step-item step-last">
                    <div className={currentState == 'stepThree' ? "step-active-line line" : "line"}></div>
                    <div className={currentState == 'stepThree' ? "step-active-circle circle" : "circle"}>3</div>
                </div>
            </div>         
        )
    }
}