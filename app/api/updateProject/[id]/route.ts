import connectdb from "@/libs/connectMongoDb";
import Project from "@/models/project";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";




export async function PUT(req:Request, {params}:Params):Promise<any> {

    let {title, description} = await req.json();
    
    let { id } = params;

    try {
        await connectdb();
        let doc = await  Project.findOneAndUpdate(
            {_id:id},
            {$set:{title, description}},
            {new:true}
        )

        return NextResponse.json({success:true, message:"project updated"});
    } catch (error) {
        console.log(error);
        
    }
}