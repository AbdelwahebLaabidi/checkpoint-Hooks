import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';


const AjoutMovies=({liste, setListe})=>{

    const [show, setShow] = useState(false);
    const [titre, setTitre]=useState('')
    const [description, setDescription]=useState('')
    const [posterURL, setPosterURL]=useState('')
    const [rating, setRating]=useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ajouter=()=> {setListe([...liste, {titre,description,posterURL,rating, id: Math.random()}])}

    return(

    <div className='lol'>
        <Button variant="primary" onClick={handleShow}>
            +
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Ajouter un Film</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Enter Titre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e)=>setPosterURL(e.target.value)} type="text" placeholder="Enter Image URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating</Form.Label>
                        <Rating onChange={(e)=>setRating(e.target.value)} />
                        <br/>
                    </Form.Group>       

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=> {ajouter(); handleClose()}}>
                    Ajouter
                </Button>
            </Modal.Footer>
        </Modal>
    </div>

    )
}

export default AjoutMovies