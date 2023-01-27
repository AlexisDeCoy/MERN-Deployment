import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate();

    const deletePet = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='w-50 mx-auto text-center'>
            <table className='w-100'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {props.pets.map((pet, i) =>
                        <tr key={i} >
                            <td>{pet.petName}</td>
                            <td>{pet.type}</td>
                            <td>
                                <button onClick={(e) => { navigate(`/pets/${pet._id}`) }}>Details</button>
                                <button onClick={(e) => { navigate(`/pets/${pet._id}/edit`) }}>Edit</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className='btn btn-primary mt-5' onClick={(e) => { navigate(`/pets/new`) }}>Add a Pet!</button>
        </div>
    )
}

export default PetList;

