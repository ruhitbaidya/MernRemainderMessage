import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const CheckRemainder = () => {
  const [data, setData] = useState("");
  const getData = ()=>{
    axios.get("http://localhost:3002/register/setRemainder/find-allRM")
    .then((res)=>{
      setData(res.data.data)
    }).catch((error)=>{
      console.log(error)
      toast.error("Somthing was wrong")
    })
  }
  const deleteData = (id)=>{
    axios.delete(`http://localhost:3002/register/setRemainder/delete-remainder/${id}`)
    .then((res)=>{
      console.log(res)
      toast.success(res.data.message)
      getData();
    }).catch((error)=>{
      console.log(error)
      toast.error("Somthing was wrong")
    })
  }
  useEffect(()=>{
    getData();
  }, [])
  return (
    <section className='bg-dark py-5' >
      <div className='container'>
        <Toaster />
        <div className='row'>
            <div className='col-md-12'>
                <h1 className='text-center text-light'>Show All Remainder</h1>
                <table className='table table-dark my-5'>
                    <thead>
                        <tr>
                            <th>Remainder Date</th>
                            <th>To Date</th>
                            <th>Remainder Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{data && data.map((name)=>{
                          return <tr key={name._id}>
                          <td>{name.remainDay}</td>
                          <td>{name.today}</td>
                          <td>{name.message}</td>
                          <td>
                              <button className='btn btn-outline-danger mx-3 rounded-0' onClick={()=> deleteData(name._id)}>Delete</button>
                          </td>
                      </tr>
                        })}</tbody>
                </table>
            </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default CheckRemainder
