import { connect } from 'react-redux'
import StepHistory from '../StepHistory'
import NextStep from '../NextStep'
import '../lists.scss'

class StepTwo extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="create-list">
                <div className="container">
                    <StepHistory currentState="stepTwo"/>
                    <div className="step-one">
                        <div className="comment">
                            Tell us a little about your animals            
                        </div>
                        <div className="animal-list">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl} className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="animal-item">
                                        <img src={imageUrl}  className={ isSelected ? "select-animal-image" : "animal-image" } onClick={()=>this.selectImg()}/>
                                        <div className="animal-name">Dog</div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <NextStep nextStep="/step-two"/>
                    </div>                
                </div> 
            </div>
		)
	}
}

export default StepTwo