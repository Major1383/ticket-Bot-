const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { config } = require('process');
client.commands = new Discord.Collection();


client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
  client.user.setActivity(`In Development`);
  client.user.setStatus('online');
});
client.on('message', message => {

  let args = message.content.substring(prefix.length).split(' ');

  switch (args[0]) {
      case 'ticket':

  // ID from the catogory channel tickets.
  const categoryId = "827885182748196885";

  // Get username
  var userName = message.author.username;
  // Verkrijg discriminator
  var userDiscriminator = message.author.discriminator;

  // If ticket has been made
  var bool = false;


  // Ticket return code
  if (bool == true) return;

  var embedCreateTicket = new Discord.MessageEmbed()
      .setTitle("Hey, " + message.author.username)
      .setFooter("Support channel will be made");

  message.channel.send(embedCreateTicket);

  // Create channel and put it in the right catogary
  message.guild.channels.create(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal

      createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category.

          // Put permissions for everyone
          settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
          settedParent.overwritePermissions(message.guild.roles.find('name', "@management"), { "VIEW_CHANNEL": true });
          // Put permission by the user that created the ticket
          settedParent.overwritePermissions(message.author, {

              "READ_MESSAGES": true, "SEND_MESSAGES": true,
              "ATTACH_FILES": true, "CONNECT": true,
              "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true

          });
          settedParent.overwritePermissions(everyone, {

              "READ_MESSAGES": false, "SEND_MESSAGES": false,
              "ATTACH_FILES": false, "CONNECT": false,
              "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": false

          });

          var embedParent = new Discord.MessageEmbed()
              .setTitle("Hey, " + message.author.username.toString())
              .setDescription("Put down here your question");

          channel.new.send(embedParent);            
          });try {error} finally
              
          {err => {
          message.channel.send("Something went wrong.");
      };

  }try {
      
  }catch (error) {
      
  }(err => {
      message.channel.send("Something went wrong.");
  });
}
  
)
  }
}
)

client.login(token);
