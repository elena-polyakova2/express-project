function getMessages (req, res) {
  res.send('<ul><li>Hello friend!</li></ul>)')
}

function postMessage (req, res) {
  console.log('Updating messages...');
}

//export functions
module.exports = {
  getMessages,
  postMessage,
}