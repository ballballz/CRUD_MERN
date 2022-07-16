import React,{ useContext,useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'

const Edit = () => {

    const { updateData, setUpdateData } = useContext(updatedata)
    const { id } = useParams("")
    const navigate = useNavigate()
    const [formData,setFormDate] = useState({
        username: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        address: '',
        des: ''

    })

    const { username,email,age,mobile,work,address,des } = formData 

    const getData = async () => {
        const res = await fetch(`http://localhost:5000/api/user/getdata/${id}`,{
            method: 'get',
            headers: {
                "Content-Type":"application/json"
            }
        });

        const data = await res.json()
        console.log(data)

        if(res.status === 404 || !data) {
            alert("error")
        }else{
            setFormDate({
                username: data.name,
                email: data.email,
                age: data.age,
                mobile: data.mobile,
                work: data.work,
                address: data.address,
                des: data.desc
            })
        }
    }


    const onChange = (e) => {
        setFormDate((data)=>{
            return {
                ...data,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        const res = await fetch(`http://localhost:5000/api/user/update/${id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:username,email,age,mobile,work,address,des
            }) 
        })

        const data = await res.json()

        if(res.status === 201) {
            navigate('/')
            setUpdateData(data)
        }else{
            alert("error")
        }

    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className='container mt-5'>
        <h1>Edit User</h1>
        <form>
            <div className='row'>
                <div className="mb-3 col-6">
                    <label className="form-label">Name</label>
                    <input type="text" value={username} name='username' className="form-control" onChange={onChange}/>
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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </div>
        </form>
    </div>
  )
}

export default Edit