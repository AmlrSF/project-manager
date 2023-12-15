
import mongoose from 'mongoose';
import Project from '@/models/project'; 
import { NextResponse } from 'next/server';

export async function GET(req:Request):Promise<any>{

    let id = req.url.split("/api/projects/")[1];

    console.log(id);

    try {

        let singleProject = await Project.findOne({userId:id});
        
        return NextResponse.json({succes:true, singleProject});
        
    } catch (error) {
        console.log(error);
    }

}

export async function DELETE(req:Request){
    let id = req.url.split("/api/projects/")[1];

    console.log(id);

    try {

        await Project.findOneAndDelete({userId:id});
        
        return NextResponse.json({succes:true, message:"deleted successfully"});
        
    } catch (error) {
        console.log(error);
    }
 
}