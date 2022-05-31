export const create = async () => {
    let fs = require('fs');
    if (!fs.existsSync('fresh.txt')){
	    fs.writeFileSync('fresh.txt','I am fresh and young', function(error){
   		    if(error) throw error;})
        } else {
	        console.error('FS operation failed');
        }
};
