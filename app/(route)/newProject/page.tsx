
"use client"

import ModelAddP from '@/components/ModelAddP';
import React, { useState } from 'react'

const page = () => {

    const [openModel,setOpenModel] = useState(false);

    
    return (
        <div className='container'>
            <div className='  flex justify-between gap-3 items-center mt-10  border-b-2 pb-10'>
                <div className='flex  flex-col gap-3'>
                    <h1 className='text-3xl mb-[-5px] font-medium '>Add new Project</h1>
                    <p className='text-slate-500 text-thin'>Manage your project.</p>
                </div>
                <button onClick={()=>setOpenModel(true)} className='px-5 py-3 bg-[#EF47BC] text-xl font-medium text-white'>New</button>
            </div>

           <ModelAddP openModel={openModel} setOpenModel={setOpenModel} />

        </div>
    )
}

export default page;