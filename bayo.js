const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('message',message=>{
  if (message.content == 'bayo!hi'){
   message.reply('wait am i working?');
  }else if (message.content == 'bayo!'){
   message.reply('call me Bayonetta!');
  }else if (message.content == 'bayo!heroku?'){
    message.reply('Yes I\'m running off Heroku!');
  }else if (message.content == 'bayo!ergastolator1'){
    message.reply('Thanks for waiting for me ergastolator1!');
  }else if (message.content == 'bayo!help'){
    message.reply("I'm a very basic bot made by BayoDino and Haruyuki and Ergastolator1. I'll become a helper for Cranterns bot ^-^, Ergastolator1 is not a person that made it, BTW :) He only helped to make it, but thanks for including him anyways in the command!");
  }else if (message.content == 'bayo!confused'){
    message.reply("Why are you confused?");
  }else if (message.content == 'bayo!ily'){
    message.reply("oooh thank you! :heart:");
  }else if (message.content == 'bayo!speak'){
    var items = Array("Ok",":eyes:","I don't like my pfp","I've no idea","What should i say now?","I have to drink coffee to speak", "I **really** need money, i need 100 Dollars!","By name is similar to BayoDino's username");
    var item = items[Math.floor(Math.random()*items.length)];
    message.reply(""+item+"");
  }else if (message.content == 'bayo!whychangepfp?'){
    message.reply("Because it's weird");
  }else if (message.content == 'bayo!can i edit you?'){
    message.reply("Why?");
  }

});

Client.login(process.env.BOT_TOKEN);
