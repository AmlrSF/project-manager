import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Project = mongoose.models.Project || mongoose.model("Project",projectSchema);

export default Project;