import React, { useState, useEffect } from 'react'
import Card from './Card'
import Loader from './Loader';

function Getusers() {
    const [article, setarticle] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpage, settotalpage] = useState(0);
    const [loading, setLoading] = useState(true);

    let previous = async () => {
        setpage(prevpage=>prevpage-1);
        // console.log(page); 
    }

    let next = async () => {
        setpage(prevpage=>prevpage+1);
        // console.log(page);
    }

    let update= async()=>{
        setLoading(true);
        let old=article;
        let url = `https://reqres.in/api/users?page=${page}`;
        let array = await fetch(url);
        array = await array.json();
        settotalpage(array.total_pages);
        setLoading(false);
        old=array.data;
        setarticle([...old]);
    }

    useEffect(() => {
        update();   //see notes
    }, [page])



    return (
        <div className="container">
            <h2 style={{textAlign:"center"}}>Users Information</h2>

            {loading && <Loader/>}

            <div className='row'>
                {article.map((ele) => {

                    return (<div className='col-md-4 my-2' key={ele.id}>
                        <Card key={ele.id} id={ele.id} email={ele.email} fname={ele.first_name} lname={ele.last_name} avatar={ele.avatar} />
                    </div>)
                })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0px" }}>
                <button type="button" className="btn btn-info" onClick={previous} disabled={(page === 1) ? true : false}>&larr; Prev</button>
                <button type="button" className="btn btn-info" onClick={next} disabled={(page == totalpage) ? true : false}>Next &rarr;</button>
            </div>
        </div>
    )
}

export default Getusers
