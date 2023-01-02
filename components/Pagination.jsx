import ReactPaginate from 'react-paginate'

export default function Pagination(props) {
  const { onPageChange, pageCount } = props;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      onPageChange={onPageChange}
      pageCount={pageCount}
      previousLabel="previous"
      containerClassName="pagination"
      pageClassName="page-item"
      activeClassName="active"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
    />
  )
}
