import './Pagination.scss'
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux'
import { setCurrentPage, setPages, setTotalItems } from '../../../../actions/pagination'

class Paginations extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total != this.props.pagination.countTotal) {
      this.props.setTotalItems(nextProps.total)
      this.props.setPages(Math.round(nextProps.total / this.props.pagination.defaultPageSize))
    }
  }

  onClickPrevious() {
    if (this.props.pagination.currentPage > 1 ) {
      const page = --this.props.pagination.currentPage
      this.props.setCurrentPage(page)
      this.props.getItems(page)
    }
  }

  onClickNext() {
    if (this.props.pagination.currentPage < this.props.pagination.countPages) {
      const page = ++this.props.pagination.currentPage
      this.props.setCurrentPage(page)
      this.props.getItems(page)
    }
  }

  handleClickPageLink(page) {
    this.props.setCurrentPage(page)
    this.props.getItems(page)
  }

  renderPaginationItems() {
    let items = []

    if (this.props.items.length) {
      for (var i = 1; i <= this.props.pagination.countPages; i++) {
        items.push(
          <PaginationItem active={ (this.props.pagination.currentPage == i) ? true : false }>
            <PaginationLink onClick={ this.handleClickPageLink.bind(this, i) }>
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      }
    }

    return items
  }

  render() {
    if (this.props.pagination.countPages > 1) {
      return(
        <div className="pagination-list">
          <Pagination size="lg">
            <PaginationItem>
              <PaginationLink previous onClick={this.onClickPrevious.bind(this)} />
            </PaginationItem>

            { this.renderPaginationItems() }

            <PaginationItem>
              <PaginationLink next onClick={this.onClickNext.bind(this)} />
            </PaginationItem>
          </Pagination>
        </div>
      )
    } else return null
  }
}

const mapstateToProps = (state) => ({
  pagination: state.pagination
})

export default connect(mapstateToProps, { setCurrentPage, setPages, setTotalItems })(Paginations)
