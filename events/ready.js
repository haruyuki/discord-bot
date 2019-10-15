module.exports = async client => {
  // Log that the bot is online.
  client.logger.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");

  // Make the bot "play the game" which is the help command with default prefix.
  client.user.setActivity(`to BayoDino, bayo!help for help!`, {type: "Listening"});
  client.user.setStatus("online");

  const channel = client.channels.get('619902581342208014');
  //channel.send("I won't send eyes again! Thank you for also posting eyes :eyes:");
  console.log("ready.");
};
