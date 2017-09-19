import './AllListings.scss'

class AllListings extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
      <main>
        <section id="main-banner">
          <div className="container text-center">
            <h1>Current <span>Listings</span></h1>
            <p>Check back often, our users are always adding new listings</p>
          </div>
        </section>

        <section id="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">1</div>
              <div className="col-md-4">2</div>
            </div>
          </div>
        </section>
      </main>
		)
	}
}

export default AllListings
