import React, { useState } from 'react'
import Footer from './Footer'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const SetRemainder = () => {
    const [remainder, setRemainder] = useState({ today: "", remainDay: "", message: "" })
    const handelInput = (e) => {
        setRemainder({
            ...remainder,
            [e.target.name]: e.target.value
        })
    }
    const sendData = () => {
            axios.post("http://localhost:3002/register/setRemainder/add-Remainder", remainder)
            .then((res) => {
                console.log(res)
                toast.success(res.data.message)
            }).catch((error) => {
                console.log(error)
                toast.error("Somthing was wrong")
            })
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        sendData();
        setRemainder({ today: "", remainDay: "", message: "" })
    }
    return (
        <section className='bg-dark pt-4'>
            <Toaster />
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6 text-light'>
                        <form onSubmit={handelSubmit}>
                            <h2 className='text-center text-light'>Set Remainder </h2>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor="set">Remainder Date</label>
                                    <input type="date" className='form-control' name="remainDay" id="set" value={remainder.remainDay} onChange={handelInput} />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor="today">Today Date</label>
                                    <input type="date" className='form-control' name="today" id="today" value={remainder.today} onChange={handelInput} />
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-12'>
                                    <label htmlFor='message'>Message</label>
                                    <textarea type="text" className='form-control' name="message" value={remainder.message} id="message" placeholder='Write Your Message' onChange={handelInput}>

                                    </textarea>
                                </div>
                                <div className='col-md-12'>
                                    <div className="d-grid gap-2 mt-3">
                                        <button className="btn btn-outline-light" type="submit">Set Remainder</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default SetRemainder
