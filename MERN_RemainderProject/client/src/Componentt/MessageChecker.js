import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
const MessageChecker = () => {
    const [matchData, setMatchData] = useState("")
    const [currentDate, setCurrentDate] = useState("")
    const getData = ()=>{
        axios.get("http://localhost:3002/register/setRemainder/find-allRM")
        .then((res)=>{
          console.log(res.data.data)
          setMatchData(res.data.data)
          matchVerify()
        }).catch((error)=>{
          console.log(error)
          toast.error("Somthing was wrong")
        })
      }

      const matchVerify = (text)=>{
        const date = new Date();
        let month = date.getMonth() + 1
        let days = date.getDate()
        let year = date.getFullYear();
        if(month <= 9){
            month = "0" + month;
        }
        if(days <= 9){
            days = "0" + days;
        }
        const datefull = `${year}-${month}-${days}`
        setCurrentDate(datefull)
        
      }
      useEffect(()=>{
        getData()
      }, [])

  return  <> 
  {
    matchData && matchData.map((data)=>{
        if(data.remainDay ===  currentDate){
             return toast.success(data.message)
         }
     })
  } 
  <Toaster />
  </>
}

export default MessageChecker
