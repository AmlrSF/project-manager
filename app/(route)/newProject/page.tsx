
"use client"

import ModelAddP from '@/components/ModelAddP';
import { auth } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const page = () => {

    const [openModel, setOpenModel] = useState(false);
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const request = await fetch("http://localhost:3000/api/projects", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })

            const res = await request.json();
            console.log(res);

            setProjects(res.projects);

        } catch (error) {
            console.log(error);

        }
    }

    const deleteProject = async (id:string)=>{
        try {
            const request = await fetch(`http://localhost:3000/api/projects/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })

            
            const isConfirmed = window.confirm("are yoi sure blud");

            if(!isConfirmed) return ;

            await request.json();

            fetchProjects();
          
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container flex flex-col gap-5'>
            <div className='  flex justify-between gap-3 items-center mt-10  border-b-2 pb-10'>
                <div className='flex  flex-col gap-3'>
                    <h1 className='text-3xl mb-[-5px] font-medium '>Add new Project</h1>
                    <p className='text-slate-500 text-thin'>Manage your project.</p>
                </div>
                <button onClick={() => setOpenModel(true)} className='px-5 py-3 bg-[#EF47BC] text-xl font-medium text-white'>New</button>
            </div>

            <ModelAddP openModel={openModel} projects={projects} setProjects={setProjects} setOpenModel={setOpenModel} fetchProjects={fetchProjects} />

            <div className='grid-container'>
                {projects.map((item: any, index) => {
                    return (
                        <div className='border-2 flex gap-4 items-center justify-between   p-4' key={index}>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-xl font-medium'>{item.title}</h1>
                                <p className='text-slate-600 font-normal mt-[-7px]'>{item.description}</p>
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <MdDelete className="text-red-600 text-xl cursor-pointer" onClick={()=>deleteProject(item.userId)}/>
                                <FaEdit className="text-green-600 text-xl cursor-pointer"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default page;