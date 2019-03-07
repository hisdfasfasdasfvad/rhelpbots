const Discord = require('discord.js');
const client = new Discord.Client();
console.log("BOT ONLINE");

const prefix = "R";


//====================================================================
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`${prefix}help | Bot ON ${client.guilds.size} Servers!`, `${prefix}help | Bot has ${client.users.size} Users!`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`           [Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`  Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('  Informations :')
  console.log('')
  console.log(`  servers! [ " ${client.guilds.size} " ]`);
  console.log(`  Users! [ " ${client.users.size} " ]`);
  console.log(`  channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════]╗')
  console.log('  Bot Is Online')
  console.log('╚[═════════════]╝')
  console.log('')
  console.log('')
});

//====================================================================
//command = help       

client.on('message',async message => {
  if (message.content === prefix + "help") {
  message.channel.send(" تــــم ارســالك في الخــاص" )      
       const EpicEmbed = new Discord.RichEmbed() 
         .setColor("RANDOM")
         .setThumbnail(message.author.avatarURL)
         .setDescription("***═════════ஜ۩  أوامر الاعضاء و الاداره  ۩ஜ═══════════***")
         .addField("**『``-Rainbow`` : **","**لصنع رتبه رينبو』**")
         .addField("**『``-inv`` : **","**لاخذ رابط لانفيت البوت』**")
         .setDescription("***═════════ஜ۩  أوامر الاعضاء و الاداره  ۩ஜ═══════════***")
         
   message.author.sendEmbed(EpicEmbed)
 }
});



//====================================================================
//command = Rainbow

client.on('message',async message => {//new msg event
if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'Rainbow')) {//to create the rainbow role
   let role = message.guild.roles.find('name', 'Rainbow')
   if(role) return message.channel.send(`هاي الرتبة موجودة !`)//if the role already created return with this msg
 //start of create role 
 if(!role){
   rainbow =  message.guild.createRole({
  name: "Rainbow",//the role will create name
  color: "#000000",//the default color
  permissions:[]//the permissions
//end of create role
})

}
message.channel.send('تــــم صنع الرتبة بنجاح')//if the step completed
}})


//====================================================================
//command = inv
client.on('message' , message => {
  if (message.content === prefix + "inv") {
      if(!message.channel.guild) return message.reply('This Command is Only For Servers');
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('Click Here To Invite bot')
.setURL(`https://discordapp.com/api/oauth2/authorize?client_id=551760518050742285&permissions=0&scope=bot`)
message.channel.sendEmbed(embed);
 }
});


client.login(process.env.BOT_TOKEN);