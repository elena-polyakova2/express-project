//built-in path module
const path = require('path');
// /folder/files.jpg \folder\files.jpg

function getMessages (req, res) {
  // res.send('<ul><li>Hello friend!</li></ul>)')
  res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')); //find the file by its path
}

function postMessage (req, res) {
  console.log('Updating messages...');
}

//export functions
module.exports = {
  getMessages,
  postMessage,
}