"use client"

import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const Submithandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let rendertask = <h1>No task available</h1>

  if(mainTask.length>0){

    rendertask = mainTask.map((t,i)=>{
      return <li className='flex items-center justify-between mb-5'>
      <div className='flex items-center justify-between w-2/3'>
       <h5 className='text-2xl font-semibold '>{t.title}</h5>
       <h6 className='text-lg font-medium '>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{deleteHandler(i)}}
      className='bg-red-600 text-white px-4 py-2 rounded'>Delete</button>
    </li>
    })
  }
  
  return (
    <>
    <h1 className='bg-black text-white text-center text-4xl p-6'>To Do List</h1>

    <form onSubmit={Submithandler}>
      
      <input type='text' className='border-2 border-zinc-800 m-8 px-5 py-2 text-2xl' placeholder='Enter Title Here'
      value={title} onChange={(e)=>{
        settitle(e.target.value)
      }}></input>

      <input type='text' className='border-2 border-zinc-800 m-8 px-5 py-2 text-2xl' placeholder='Add Description'
      value={desc} onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      
      <button className='text-white bg-black px-4 py-3 rounded'>Add Task</button>
    </form>

    <hr/>

    <div className="p-8 bg-slate-200">
      <ul>
        {rendertask}
      </ul>
    </div>

    </>
  )
}

export default page