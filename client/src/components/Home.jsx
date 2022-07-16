import React,{ useState } from 'react'
import View from './Details'
import { Link, NavLink } from 'react-router-dom'
import { useEffect,useContext } from 'react'
import { adddata,updatedata,deldata } from './context/ContextProvider'


const Home = () => {

    const { udata, setUdata } = useContext(adddata)
    const { updateData, setUpdateData } = useContext(updatedata)
    const { delData, setDelData } = useContext(deldata)

    let user_no = 1
    const [users,setUsers] = useState([])
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [formData,setFormDate] = useState({
        username: '',
        email: '',
        age: '',
        mobile: '',
        work: '',
        address: '',
        des: ''

    })

    const showModal = (data) => {
        setFormDate({
            username: data.name,
            email: data.email,
            age: data.age,
            mobile: data.mobile,
            work: data.work,
            address: data.address,
            des: data.desc
        })
        setOpen(true);
    }

    const getData = async () => {
        const res = await fetch('http://localhost:5000/api/user/getdata',{
            method: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        });

        const data = await res.json()
        console.log(data)

        if(res.status === 404 || !data) {
            alert("error")
        }else{
            setUsers(data)
        }
    }

    const deleteuser = async (id) => {
        const res = await fetch(`http://localhost:5000/api/user/delete/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type":"application/json"
            }
        });

        const data = await res.json()

        if(res.status === 200) {
            setDelData(data)
        }
    }
    
    useEffect(()=>{
        getData()
        setTimeout(()=>{
            setDelData('')
            setUpdateData('')
            setUdata('')
        },1000)
    },[users])
    
  return (
    <>
    {udata ? <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{udata.name}</strong> user added successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> : ''}

    {updateData ? <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{updateData.name}</strong> user updated successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> : ''}

    {delData ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{delData.name}</strong> user deleted successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> : ''}

    <div className='mt-5'>
        <div className='container'>
            <div className='add mt-2'>
               <Link to='/register'> <button className='btn btn-primary'>+ Add data</button></Link>
            </div>
            <table className="table mt-2">
                <thead>
                    <tr className='table-dark'>
                    <th scope="col">id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Job</th>
                    <th scope="col">Number</th>
                    <th scope="col" width="20%">Action</th>
                    </tr>
                </thead>
                <tbody>        
                    {users.map((user)=>{
                        return (
                            <>
                                <tr>
                                    <th scope="row">{user_no++}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.work}</td>
                                    <td>{user.mobile}</td>
                                    <td className='d-flex justify-content-between'>
                                        <button className='btn btn-info' onClick={()=>showModal({...user})}>View</button>
                                        <NavLink to={`edit/${user._id}`}><button className='btn btn-warning'>Edit</button></NavLink>
                                        <button className='btn btn-danger' onClick={()=>deleteuser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>  
        {open && <View open={open} handleClose={handleClose} formData={formData}/>}
    </div>
    </>
  )
}

export default Home
