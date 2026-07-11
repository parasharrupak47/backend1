import mongoose from "mongoose"
import mongoosePaginate from "mongoose-aggregate-paginate-v2"
const VideoSchema = new mongoose.Schema({
    {
        VideoFile:{
            type : String, // cloudinary url
            required : true
        },
        thumbnail : {
            type : String, // cloudinary url 
            required : true   
        },
        title : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
        },
        duration : {
            type : Number,
            required : true
        },
        views :{
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : false
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    }, {
    timestamps : true
})



VideoSchema.plugin(mongoosePaginate)

export const Video = mongoose.model("Video" , VideoSchema)