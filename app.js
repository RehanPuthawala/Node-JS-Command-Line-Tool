// console.log(require);
const message = require("./testing.js");

// console.log(message.understandingNode);
// console.log(message.praiseForNode);

message.understandingNode = "Node is Very Detailed";
// console.log(message.understandingNode);

const newMessage = require("./testing.js");

console.log(newMessage.understandingNode);
