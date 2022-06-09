import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import fs from 'fs'
//синхронно:
// export const create = async () => {
//     if (!fs.existsSync('fresh.txt')){
// 	    fs.writeFileSync('fresh.txt', 'I am fresh and young', function(error){
//    		    if(error) throw error;})
//         }else {
// 	        console.error('FS operation failed');
//         }
// };
//асинхронно:
export const create = async () => {
	fs.access('fresh.txt', fs.F_OK, (err) => {
		if (err) {
			fs.writeFile('fresh.txt','I am fresh and young', function(error){
				if(error) throw error;})
		  return;
		}else{
			console.log(new Error('FS operation failed'));
		}
	})	
};
create();
