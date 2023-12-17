"use client"


import { title } from 'process';
import React, { FormEventHandler, useEffect, useState } from 'react'



interface Imodel {
    EditModel: boolean;
    setEditModel: (value: boolean) => void
    fetchProjects: () => void
    singleProject:any
}

const ModelEditP = ({ EditModel, setEditModel, fetchProjects,singleProject}: Imodel) => {

  

    const [project, setProject] = useState<string>("")
    const [projectDescription, setprojectDescription] = useState<string>("");

 
    useEffect(()=>{

        setProject(singleProject?.title);
        setprojectDescription(singleProject?.description);
        
    },[singleProject]);

    console.log(singleProject);
    
    

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();



        if (!title || !projectDescription) {
            alert("please fill in the fields");
            return;
        }

        try {
        
            let UpdatedProjectObj = {
                title: project,
                description: projectDescription
            };
            
            
            let request = await fetch(`http://localhost:3000/api/updateProject/${singleProject._id}`,{
                method:"PUT",
                headers: {
                    "content-type": "application/json"
                },
                body:JSON.stringify({...UpdatedProjectObj})
                
            })

            let res = await request.json();
            console.log(res);
            
            if(res.success){
                fetchProjects();
                setEditModel(false);
            }
            //console.log(res);
            


        } catch (error) {
            console.log(error);
        }


    }





    return (
        <div className={`modelP flex justify-center items-center   rounded-xl ${EditModel ? " modelP-open  layer" : "hidden"}`}>
            <div className='flex bg-white relative w-[350px] p-6 rounded-xl flex-col gap-5'>
                <h3 className='text-lg font-bold text-black'>Edit a  Project</h3>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-3'>
                        <input value={project} className='border-2 p-2 focus:border-[#EF47BC] focus:outline-none flex-1' onChange={(e) => setProject(e.target.value)} />
                        <textarea value={projectDescription} className='border-2 focus:border-[#EF47BC] p-2 focus:outline-none flex-1' onChange={(e) => setprojectDescription(e.target.value)} >

                        </textarea>
                        <button className='btn bg-[#EF47BC] px-4 py-2 text-white font-medium rounded-sm'>Edit Project</button>
                    </div>
                </form>
                <button onClick={() => setEditModel(false)} className=' rounded-full p-2 top-3 right-6 absolute btn-circle btn btn-neutral'>X</button>
            </div>
        </div>
    )
}
export default ModelEditP;