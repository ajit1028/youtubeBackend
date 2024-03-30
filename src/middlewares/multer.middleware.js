//importing  multer for handling file upload
import multer from "multer";

// Configuring the storage settings for multer using diskStorage
const storage = multer.diskStorage({
    // Setting the destination directory for storing uploaded files
    destination: function (req, file, cb) {
        cb(null, './public/temp');
    },
    // Setting the filename for the uploaded file
    filename: function (req, file, cb) {
        // Using the original filename as the filename for the uploaded file
        cb(null, file.originalname);
    }
});

// Creating an instance of multer with the configured storage settings
export const upload = multer({ storage });