"use client"

import { auth, currentUser } from '@clerk/nextjs';
import { describe } from 'node:test';
import { title } from 'process';
import React, { FormEventHandler, useEffect, useState } from 'react'

import { useUser } from "@clerk/nextjs";


interface Imodel {
    openModel: boolean;
    setOpenModel: (value: boolean) => void
    projects: any[]
    setProjects: (value: any[]) => void
    fetchProjects: () => void
}

const ModelAddP = ({ openModel, setOpenModel, projects, setProjects, fetchProjects }: Imodel) => {

    const { user } = useUser();

    const [project, setProject] = useState("")
    const [projectDescription, setprojectDescription] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();



        if (!title || !projectDescription) {
            alert("please fill in the fields");
            return;
        }

        try {
            let projectObj: { userId: any, title: string, description: string } = {
                userId: user?.id,
                title: project,
                description: projectDescription
            }


            const res = await fetch("http://localhost:3000/api/addProject", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ ...projectObj })
            })

            const result = await res.json();

            if (result.sucess) {
                fetchProjects();
                setProject("");
                setprojectDescription("");
                setOpenModel(false);
            }


        } catch (error) {
            console.log(error);
        }


    }





    return (
        <div className={`modelP flex justify-center items-center   rounded-xl ${openModel ? " modelP-open  layer" : "hidden"}`}>
            <div className='flex bg-white relative w-[350px] p-6 rounded-xl flex-col gap-5'>
                <h3 className='text-lg font-bold text-black'>Add a new Project</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3'>
                        <input value={project} className='border-2 p-2 focus:border-[#EF47BC] focus:outline-none flex-1' onChange={(e) => setProject(e.target.value)} />
                        <textarea value={projectDescription} className='border-2 focus:border-[#EF47BC] p-2 focus:outline-none flex-1' onChange={(e) => setprojectDescription(e.target.value)} >

                        </textarea>
                        <button className='btn bg-[#EF47BC] px-4 py-2 text-white font-medium rounded-sm'>Add</button>
                    </div>
                </form>
                <button onClick={() => setOpenModel(false)} className=' rounded-full p-2 top-3 right-6 absolute btn-circle btn btn-neutral'>X</button>
            </div>
        </div>
    )
}
export default ModelAddP;