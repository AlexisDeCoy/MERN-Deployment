import React, { useEffect, useState } from 'react';
// import AuthorForm from '../components/AuthorForm';
import PetList from '../components/PetList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                // console.log(res.data);
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId));
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            {/* <AuthorForm/>
           <hr/> */}
            {loaded && <PetList pets={pets} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;