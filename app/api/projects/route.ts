import mongoose from "mongoose";
import Project from "@/models/project";
import { NextRequest, NextResponse } from "next/server";
import connectdb from "@/libs/connectMongoDb";



export async function GET(): Promise<any> {
  try {
    connectdb();

    const projects = await Project.find({});

    return NextResponse.json({ sucess: true, projects }, { status: 200 });

  } catch (error) {
    console.log(error);

  }
}


export async function DELETE(): Promise<any> {
  try {
    connectdb();

    await Project.deleteMany();

    return NextResponse.json({ success: true, message: "all project deleted" });

  } catch (error) {
    console.log(error);
  }
}