interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        이전
      </button>
      <span>{currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>다음</button>
    </div>
  );
};

export default Pagination;
