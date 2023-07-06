const axios = require('axios'); 
const fs = require('node:fs'); 
  
async function resolveImage(image, returnStream = false) { 
  let imageStream; 
  
  if (/^https?:\/\//.test(image)) { 
    const response = await axios({ 
      method: 'GET', 
      url: image, 
      responseType: 'stream' 
    }); 
    imageStream = response.data; 
  } else if (typeof image === 'string') { 
    imageStream = fs.createReadStream(image); 
  } else if (typeof image === 'object' && image instanceof Buffer) { 
    imageStream = image; 
    returnStream = true;
  } else { 
    throw new Error('Unsupported image type'); 
  } 
  
  if (returnStream) { 
    return imageStream; 
  } else { 
    const chunks = []; 
    for await (const chunk of imageStream) { 
      chunks.push(chunk); 
    } 
    return Buffer.concat(chunks); 
  } 
} 
  
module.exports = { 
  resolveImage 
}