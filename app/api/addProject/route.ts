import mongoose from "mongoose";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import connectdb from "@/libs/connectMongoDb";


export async function POST(request: NextRequest): Promise<any> {
  try {
    
    const { title, description } = await request.json();

    await connectdb();

    const project = await Project.create({title, description });

    return NextResponse.json({sucess:true, project},{status:201});
  
  } catch (error) {
    console.log(error);
    
  }
}
