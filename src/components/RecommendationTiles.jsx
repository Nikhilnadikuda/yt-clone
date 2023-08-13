import React from 'react'
import './RecommendationTiles.css'
const RecommendationTiles = (props) => {
    const handleClick=(cat)=>{
        props.setContent(cat);
    }
    return (
        <div className="container">
            <div className='rec-tiles'>
                <div className="tile" onClick={()=>handleClick("")}>All</div>
                <div className="tile" onClick={()=>handleClick("gaming")}>Gaming</div>
                <div className="tile" onClick={()=>handleClick("documentary")}>Documentary</div>
                <div className="tile" onClick={()=>handleClick("news")}>News</div>
                <div className="tile" onClick={()=>handleClick("popular")}>Popular</div>
                <div className="tile" onClick={()=>handleClick("comedy")}>Comedy</div>
                <div className="tile" onClick={()=>handleClick("recommended")}>Recommended</div>
                <div className="tile" onClick={()=>handleClick("cricket")}>Cricket</div>
                <div className="tile" onClick={()=>handleClick("electronics")}>Electronics</div>
                <div className="tile" onClick={()=>handleClick("shopping")}>Shopping</div>
                <div className="tile" onClick={()=>handleClick("live")}>Live</div>
                <div className="tile" onClick={()=>handleClick("music")}>Music</div>
                <div className="tile" onClick={()=>handleClick("recent")}>Recently uploaded</div>
                <div className="tile" onClick={()=>handleClick("foryou")}>For you</div>
                <div className="tile" onClick={()=>handleClick("entertainment")}>Entertainment</div>
            </div>
        </div>

    )
}

export default RecommendationTiles