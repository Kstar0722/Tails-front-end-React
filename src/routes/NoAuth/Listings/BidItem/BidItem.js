import './BidItem.scss'
import CowImage from 'assets/cow.jpg'

const BidItem = props => {
  return(
    <div className="list-item">
      <div className="top-part">
        <div className="image-holder text-center">
          <img src={CowImage} className="main-image" />
        </div>

        <div className="right-content-holder">
          <div className="row">
            <div className="col-lg-7"><h3>{props.title} - $ {props.cost}</h3></div>
          </div>

          <div className="row">
            <div className="col-md-12 listing-excerpt">
              <p>{props.description}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default BidItem
