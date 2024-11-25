import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";


const Posts = () => {
  const [data, setData] = useState([]);

  const [pageNo, setPageNo] = useState(4);


  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => setData(res.data))
      .catch((err) => alert('Error while fetching data'))
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {
          data.map((post, index) => (
            <>
              <img className="post" src={post.download_url} alt="" />
            </>
          ))
        }

      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  )
}
export default Posts;