import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        petName: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    });

    const onChangeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => 
                setFormData({
                    petName: res.data.petName,
                    type: res.data.type,
                    description: res.data.description,
                    skill1: res.data.skill1,
                    skill2: res.data.skill2,
                    skill3: res.data.skill3
                })
            )
            .catch((err) => console.log(err))
    }, [id]);

    const onSubmitHandler = e => {
        e.preventDefault();
        //make a post request to create a new product
        axios.put('http://localhost:8000/api/pets/' + id, formData)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Edit {formData.petName}</h2>
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={onSubmitHandler}>
            <div className='form-group'>
                    <label className='h6'>Name</label><br />
                    <input type="text" name='petName' className='form-control' onChange={onChangeHandler} value={formData.petName} />
                </div>
                {
                    errors.petName && (
                        <span className='text-danger'> {errors.petName.message} </span>
                    )
                }
                <div className='form-group'>
                    <label className='h6'>Type</label><br />
                    <input type="text" name='type' className='form-control' onChange={onChangeHandler} value={formData.type} />
                </div>
                {
                    errors.type && (
                        <span className='text-danger'> {errors.type.message} </span>
                    )
                }
                <div className='form-group'>
                    <label className='h6'>Description</label><br />
                    <input type="text" name='description' className='form-control' onChange={onChangeHandler} value={formData.description} />
                </div>
                {
                    errors.description && (
                        <span className='text-danger'> {errors.description.message} </span>
                    )
                }
                <div className='form-group'>
                    <label className='h6'>Skill 1</label><br />
                    <input type="text" name='skill1' className='form-control' onChange={onChangeHandler} value={formData.skill1} />
                </div>
                <div className='form-group'>
                    <label className='h6'>Skill 2</label><br />
                    <input type="text" name='skill2' className='form-control' onChange={onChangeHandler} value={formData.skill2} />
                </div>
                <div className='form-group'>
                    <label className='h6'>Skill 3</label><br />
                    <input type="text" name='skill3' className='form-control' onChange={onChangeHandler} value={formData.skill3} />
                </div>
                <br/>
                <input type="submit" className='btn btn-dark' value="Edit Pet"/>
                <button className='btn btn-warning' onClick={() => navigate('/')}>Back</button>
            </form>
        </div>
        </div>
    )
}

export default ProductForm;