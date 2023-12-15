import connectdb from "@/libs/connectMongoDb";
import Project from "@/models/project";
import { NextResponse } from "next/server";



export async function PUT(req: Request): Promise<any> {
    let { title, description } = await req.json();
    let id = req.url.split("/api/updateProject/")[1];

    console.log(title, description, id)

    try {
        await connectdb();
        const doc = await Project.findById(id)
        doc.title = title;
        doc.description = description;
        
        await doc.save();
        return NextResponse.json({ sucess: true, message: "updated succesfully" });
    } catch (error) {
        console.log(error);

    }
}