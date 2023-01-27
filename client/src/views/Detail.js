import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const deletePet = (authorId) => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h1>Details about: {pet.petName}</h1>

            <div className='w-80 mx-auto shadow text-center p-2'>
                <h2>Type: {pet.type}</h2>
                <h2>Description: {pet.description}</h2>
                <h2>Skills:</h2>
                <h3> {pet.skill1}</h3>
                <h3> {pet.skill2}</h3>
                <h3> {pet.skill3}</h3>
                <button className='btn btn-danger' onClick={deletePet}>Adopt {pet.petName}</button>
                <button className='btn btn-warning' onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    )
}

export default Detail;