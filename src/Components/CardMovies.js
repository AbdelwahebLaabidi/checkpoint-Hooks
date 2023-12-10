import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CardMovies=({el})=>{
const [showMore, setShowMore] = useState(false);


    return(
        <div className='top'>
            <Card style={{ width: '18rem' ,     height: '700px' }}>
            <Card.Img style={{width: "286px", height: "350px"}}  variant="top" src={el.posterURL} alt='Not Found' />
            <Card.Body>
                <Card.Title>{el.titre}</Card.Title>
                <Card.Text>
                {showMore ? el.description : `${el.description.substring(0, 150)}`}
                <button onClick={()=> setShowMore(!showMore)} className="btn">{showMore ? "Show less" : "Show more"} </button>
                </Card.Text>
                <Rating  value={el.rating} readOnly />
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardMovies