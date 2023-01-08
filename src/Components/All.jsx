import React, { useEffect, useState } from 'react'

const All = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = useState(1)

    const getData = async() => {
        setLoading(true);
        await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&sort=stars&order=desc&page=${page}&per_page=10`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.items) 
            setLoading(false)
        })
        .catch((err)=>setLoading(false))
    }

    useEffect(()=>{
        getData();
    },[page])

  return loading ? (<h1>Loading...</h1>) : (
    <div>
        <br/>
        <br/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", rowGap:"20px"}} >
            {data?.map((el)=>{
            return <a href={el.html_url} key={el.id} style={{textDecoration:"none", color:"black"}}>
                <div key={el.id} style={{padding:"15px", width:"fit-content", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px" }} >
                <div style={{height:"200px", width:"200px"}}>
                    <img src={el.owner.avatar_url} alt="" height={"100%"} width={"100%"}/>
                </div>
                <div style={{width:"100%"}}>
                    <h5 style={{width:"100%", margin:"5px auto auto auto"}}>{el.name}</h5>
                    <h5 style={{width:"100%", margin:"5px auto auto auto"}}>{el.language}</h5>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <p style={{width:"fit-content"}}><span style={{fontWeight:"bold"}}>Stars: </span>{el.stargazers_count}</p>
                        <p style={{width:"fit-content"}}><span style={{fontWeight:"bold"}}>Forks: </span>{el.forks_count}</p>
                    </div>
                </div>
            </div>
            </a>
            })}
        </div>
        <button disabled={page===1} onClick={()=>{setPage(page-1)}}>Prev</button>
        <button>{page}</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  )
}

export default All;