const Pagination = ({ pageNo, setPageNo }) => {

  const prevThreeArray = Array.from({ length: 3 }, (_, index) => pageNo - 1 - index).filter((val) => val > 1).reverse();
  const nextFourArray = Array.from({ length: 4 }, (_, index) => pageNo + index);


  const combinedArray = [...prevThreeArray, ...nextFourArray];
  console.log(combinedArray);

  const handleForward = () => {
    setPageNo(pageNo + 1);
  }

  const handleBackward = () => {
    setPageNo(pageNo - 1);
  }
  return (
    <div className="pagination-container">
      {pageNo > 1 ? <div onClick={handleBackward} className="page-btn">{"<"}</div> : null}
      {
        combinedArray.map((val, index) => (
          <>
            <div onClick={() => setPageNo(val)} className={val === pageNo ? `page-btn active` : `page-btn`}>{val}</div>
          </>
        ))
      }

      <div onClick={handleForward} className="page-btn">{">"}</div>
    </div>
  );
}
export default Pagination;