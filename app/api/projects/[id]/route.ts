import mongoose from "mongoose";
import Project from "@/models/project";
import connectdb from "@/libs/connectMongoDb";
import { NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";



export async function GET({ params }:Params) : Promise<any>{

   let {id} = params;

    try {
        await connectdb();
        const project = await Project.findOne({_id:id});

        return NextResponse.json({success:true,project});
    } catch (error) {
        
    }
}