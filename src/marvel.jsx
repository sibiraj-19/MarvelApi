import React from 'react'
import { useNavigate } from 'react-router-dom'
const marvel = ({data}) => {
    let navigate=useNavigate();
   
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
{
    (data)?(
        data.map(item=>{
            return(
                <div className="card" key={item.id} onClick={()=>navigate(`/${item.id}`)}>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {item.name}
                    </h5>
                <button className="btn btn-primary" >Know more</button>
                </div>
            </div>
            )
        })
    ):""
}      
     </>
  )
}

export default marvel