import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FilterMovies=({setMovies, setRate , Movies,rate})=>{
const deleteMovies=()=>{
        setMovies('')
        setRate(0)
}
    
    return(
        <div className='kok'>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={Movies} onChange={(e)=> setMovies(e.target.value)} type="text" placeholder="Recherche" />
                </Form.Group>
            </Form>
            <Rating value={rate} onChange={(e)=>setRate(e.target.value)}/>
            <Button onClick={deleteMovies} variant="secondary">Reset</Button>

        </div>
    )
}

export default FilterMovies