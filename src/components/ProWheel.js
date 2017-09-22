import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router'
import './ProWheel.scss'
import {  ChasingDots,  Circle,  CubeGrid,  DoubleBounce,  FadingCircle,  FoldingCube,  Pulse,  RotatingPlane,  ThreeBounce,  WanderingCubes,  Wave } from 'better-react-spinkit'
import Modal from 'react-modal'
class ProWheel extends React.Component {
	constructor(props) {
		super(props)
    }

    render(){
        return (
            <Modal isOpen={true}>
                <div className = "prowheel">
                    <Circle size={100} color='blue' /> 
                </div> 	
            </Modal>
        )
    }
}

export default ProWheel