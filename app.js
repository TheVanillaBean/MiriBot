const Discord = require("discord.js");
const axios = require('axios');

const client = new Discord.Client();

let prefix = "miri";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
    
    console.log(message.content);
    
    if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
    
    if (message.content.startsWith(prefix)) {
        console.log(message.content);        
        
        var messageContent = message.content.slice(5);
        var messageContentArray = messageContent.split(" ");
        var formattedMessage = messageContentArray.join('$$');

        var url = 'https://o5kidgfdje.execute-api.us-east-1.amazonaws.com/V3/calc?operand1=' + formattedMessage;
        console.log(url);
                
        axios.get(url)
        .then(function (response) {
            console.log(response);
            message.channel.send(response.data);
        })
        .catch(function (error) {
            message.channel.send('There was an error: ' + error);
        });

        
    }
});

client.login("NDAxNzk1NDEwNDk2MDYxNDUw.DTvY1w.ciSOib0MAibhC_EPMLZJC_M_JPQ");
