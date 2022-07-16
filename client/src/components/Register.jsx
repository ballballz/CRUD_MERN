import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider'

const Register = () => {

    const { udata, setUdata } = useContext(adddata)

    const navigate = useNavigate()
    const [check,setCheck] = useState(true)
    const [formData,setFormDate] = useState({
        name: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        address: '',
        des: ''

    })

    const { name,email,age,mobile,work,address,des } = formData 

    const onChange = (e) => {
        setFormDate((data)=>{
            return {
                ...data,
                [e.target.name] : e.target.value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:5000/api/user/register',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,age,mobile,work,address,des
            })
        });

        const data = await res.json()

        if(res.status === 201) {
            navigate('/')
            setUdata(data)
        }else{
            alert("error")
        }
    }


    useEffect(()=>{
        if(!name || !email || !age || !mobile || !work || !address || !des){
            setCheck(true)
        }else{
            setCheck(false)
        }
    },[name,email,age,mobile,work,address,des])

  return (
    <div className='container mt-5'>
        <h1>Register</h1>
        <form>
            <div className='row'>
                <div className="mb-3 col-6">
                    <label className="form-label">Name</label>
                    <input type="text" value={name} name='name' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Email</label>
                    <input type="email" value={email} name='email' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Age</label>
                    <input type="text" value={age} name='age' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Mobile</label>
                    <input type="text" value={mobile} name='mobile' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Work</label>
                    <input type="text" value={work} name='work' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-6">
                    <label className="form-label">Address</label>
                    <input type="text" value={address} name='address' className="form-control" onChange={onChange}/>
                </div>
                <div className="mb-3 col-12">
                    <label className="form-label">Description</label>
                    <textarea rows='5' value={des} name='des' className="form-control" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={check}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register