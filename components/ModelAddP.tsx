"use client"

import React, { FormEventHandler, useState } from 'react'

interface Imodel{
    openModel:boolean;
    setOpenModel:(value:boolean)=>void
}

const ModelAddP = ({openModel,setOpenModel}:Imodel) => {

    const [project, setProject] = useState("")
    const [projectDescription, setprojectDescription] = useState("")

    const handleSubmit:FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();

        let projectObj = {
            title:project,
            description:projectDescription
        }
        console.log(projectObj);
        
    }

    let state = true;

    return (
        <div className={`modelP flex justify-center items-center   rounded-xl ${openModel ?" modelP-open  layer" :"hidden"}`}>
            <div className='flex bg-white relative w-[350px] p-6 rounded-xl flex-col gap-5'>
                <h3 className='text-lg font-bold text-black'>Add a new Project</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3'>
                        <input value={project} className='border p-2 focus:outline-none flex-1' onChange={(e)=>setProject(e.target.value)} />
                        <textarea value={projectDescription} className='border p-2 focus:outline-none flex-1' onChange={(e)=>setprojectDescription(e.target.value)} >

                        </textarea>
                        <button className='btn bg-[#EF47BC] px-4 py-2 text-white font-medium rounded-sm'>Add</button>
                    </div>
                </form>
                <button onClick={()=>setOpenModel(false)} className=' top-3 right-3 absolute btn-circle btn btn-neutral'>X</button>
            </div>
        </div>
    )
}
export default ModelAddP;