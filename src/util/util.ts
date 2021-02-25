import fs from 'fs';
import Jimp = require('jimp');

interface FilterImageResult {
    ok: boolean,
    imageUrl?: string,
    error?: Error
}

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<FilterImageResult>{
    return new Promise( async resolve => {
        try {
            const photo = await Jimp.read(inputURL);
            const outPath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
            const outhFullPath = __dirname+outPath;
            
            photo
                .resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write(outhFullPath, (img) => {
                    resolve({ ok: true, imageUrl: outhFullPath });
                });
        } catch (err) {
            console.error(err);
            resolve({ ok: false, error: err});
        }
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlinkSync(file);
    }
}