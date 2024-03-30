//import the v2 modeule from 'cloudinary' library
import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


//configuring the cloudinary API credientials using environment variables    
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        //check if local file is provided if not then return null
        if(!localFilePath) return null;
        //upload the file on clu=oudinary 
       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" // it automatically determine the resuorce type
        })
        //filr has been uploaded successfully
        console.log("file is uplaoded on cloudinary", response.url);
        return response;
    } catch (error) {
          // If an error occurs during the upload, remove the locally saved temp file
          fs.unlinkSync(localFilePath);

          // Returning null to indicate the upload failure
          return null;
    }
}

// Exporting the uploadOnCloudinary function to make it available for use in other modules
export { uploadOnCloudinary };