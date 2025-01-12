const fs = require("fs");
module.exports.config = {
	name: "halinh",
  version: "1.1.1",
	hasPermssion: 0,
	credits: "Nmquan", 
	description: "no prefix",
	commandCategory: "Không dấu lệnh",
	usages: "vanh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
if (event.body.indexOf("hlinh")==0 || (event.body.indexOf("Hlinh")==0)) {
		var msg = {
				body: "Anh yêu em HTTL 26/10/2005",
				attachment: fs.createReadStream(__dirname + `/Noprefix/hlinh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }