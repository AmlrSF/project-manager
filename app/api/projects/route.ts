import mongoose from "mongoose";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import connectdb from "@/libs/connectMongoDb";

interface IProject {
  title: string;
  description: string;
}

export async function GET(request: NextRequest): Promise<any> {
  try {
    connectdb();

    const projects = await Project.find({});

    return NextResponse.json({sucess:true, projects},{status:200});
  
  } catch (error) {
    console.log(error);
    
  }
}
