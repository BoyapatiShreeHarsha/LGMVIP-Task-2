import React from 'react'

function Card(props) {
    let { id, email, fname, lname, avatar } = props;
    return (
        <div className="card" style={{textAlign:"center"}} >
            <img src={avatar} className="card-img-top" alt="avatar" style={{ width: "200px", height: "200px",margin:"6px auto" }} />
            <div className="card-body">
                <p className="card-text">Id-{id}</p>
                <p className="card-text">{`${fname} ${lname}`}</p>
                <p className="card-text">{email}</p>
            </div>
        </div>
    )
}

export default Card
