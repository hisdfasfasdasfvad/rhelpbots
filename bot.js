const Discord = require('discord.js');
const client = new Discord.Client();
const Discord = require('discord.js');


const prefix = "-";


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
         .addField("**『``-hid`` : **","**لاخفاء الرومات』**")
         .addField("**『``-un-hid`` : **","**لاظهار الرومات』**")
         .addField("**『``-unban`` : **","**لشيل البان عن الشخص』**")
         .addField("**『``-ban`` : **","**لاعطاء بان لشخص』**")
         .addField("**『``-clear`` : **","**لمسح الشات』**")
         .addField("**『``-server`` : **","**لاظهار معلومات السيرفر』**")
         .addField("**『``-bc`` : **","**لأرسال رسالة اونلاين**")
         .addField("**『``-Rainbow`` : **","**لصنع رتبه رينبو』**")
         .addField("**『``-kick`` : **","**لطرد شخص』**")
         .addField("**『``-id`` : **","**لاظهار معلوماتك』**")
         .addField("**『``-bot`` : **","**لظهار معلومات البوت』**")
         .addField("**『``-inv`` : **","**لاخذ رابط لانفيت البوت』**")
         .setDescription("***═════════ஜ۩  أوامر الاعضاء و الاداره  ۩ஜ═══════════***")
         
   message.author.sendEmbed(EpicEmbed)
 }
});


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

//====================================================================
//command = ban

client.on('message', async message => {
 var moment = require('moment');
 var mmss = require('ms')
 let date = moment().format('Do MMMM YYYY , hh:mm');
 let channelname = "logs";
 let User = message.mentions.users.first();
 let Reason = message.content.split(" ").slice(3).join(" ");
 let messageArray = message.content.split(" ");
 let time = messageArray[2];
 if(message.content.startsWith(prefix + "ban")) {
   if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**ماعندك برمشن :X:**");
    if(!message.guild.channels.find("name","logs")) return message.reply("مافي روم اسمه : ${channelname} ");
    if(!User) message.channel.send("Mention Someone");
    if(User.id === client.user.id) return message.channel.send("** :X: ماتقدر تبند البوت**");
    if(User.id === message.guild.owner.id) return message.channel.send("** :X:لااستطيع تبنيد الاونر **");
    if(!time) return message.channel.send("**- اكتب الوقت**");
    if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('** :X: البوت لايدعم هذا الوقت**');
   if(!Reason) Reason = "Null";
    let banEmbed = new Discord.RichEmbed()
    .setAuthor(`New Banned User !`)
    .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
    .addField('- Banned By: ',message.author.tag,true)
    .addField('- Banned User:', `${User}`)
    .addField('- Reason:',Reason,true)
    .addField('- Time & Date:', `${message.createdAt}`)
    .addField('- Duration:',time,true)
    .setFooter(message.author.tag,message.author.avatarURL);
    let logchannel = message.guild.channels.find(`name`, "logs");
if(!logchannel) return message.channel.send("Can't find log channel.");
incidentchannel.send(banEmbed);
message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
    .then(() => { setTimeout(() => {
        message.guild.unban(User);
    }, mmss(time));
 });
}
});

//====================================================================
//command = id
client.on('message',async message => {
    if (message.content.startsWith(prefix + 'id')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**This Command Just In Servers**')
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(':clipboard: | User identity info')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('• Name :', message.author.username,true)
        .addField('• Tag :', message.author.discriminator,true)
        .addField('• ID :', message.author.id,true)
        .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• Total invites :', inviteCount,true)
        .addField('• Roles :', roles)
        .setTimestamp()
        message.channel.sendEmbed(id).then(c => {
            c.react('📋')
                })
            })
        }
    
        
});

//====================================================================
//command = bot

client.on('message',async message => {
  if (message.content.startsWith(prefix+"bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .setTitle('``INFO '+client.user.username+'``')
          .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
          .addField('``servers``', [client.guilds.size], true)
          .addField('``channels``' , `[ ${client.channels.size} ]` , true)
          .addField('``Users``' ,`[ ${client.users.size} ]` , true)
          .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
          .addField('``My ID``' , `[ ${client.user.id} ]` , true)
          .addField('``My Prefix``' , `[ ${prefix} ]` , true)
          .addField('``My Language``' , `[ Java Script ]` , true)
          .setFooter('By: Support | Man-bot ')
  })
}
});

//====================================================================
//command = discord.gg

client.on('message',async message => {
if(message.content.includes('discord.gg')){
                                  if(!message.channel.guild) return message.reply('**لا تنشر بالخاص**');
if (!message.member.hasPermissions(['ADMINISTRATOR'])){
message.delete()
return message.reply(`** انت لا يمكنك ان تنشر سيرفرات بهاذا السيرفر فقط الاداره يمكنها ان اتنشر **`)
}
}
});

//====================================================================
//command = kick

client.on('message',async message => {
 if (message.author.kick) return;
 if (!message.content.startsWith(prefix)) return;
 let channelname = "``logs``";
 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 if (command == "kick") {
              if(!message.channel.guild) return;
        
 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
 if(!message.guild.channels.find("name","logs")) return message.reply("مافي روم اسمه : ${channelname} ");
 let user = message.mentions.users.first();
 let reason = message.content.split(" ").slice(2).join(" ");

 if (message.mentions.users.size < 1) return message.reply("منشن شخص");
 if(!reason) return message.reply ("اكتب سبب الطرد");
 if (!message.guild.member(user)
 .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

 message.guild.member(user).kick(7, user);

 const banembed = new Discord.RichEmbed()
 .setAuthor('Kicked !', user.displayAvatarURL)
 .setColor("RANDOM")
 .setTimestamp()
 .addField("User:",  `[ + ${user.tag} + ]`)
 .addField("By:", `[  + ${message.author.tag} +  ]`)
 .addField("Reason:", `[ + ${reason} +  ]`)
message.guild.channels.find("name","logs").send({embed : banembed})
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

client.on('ready', () => {//new ready event
 setInterval(function(){
     client.guilds.forEach(g => {
                 var role = g.roles.find('name', 'Rainbow Man');//rainbow role name
                 if (role) {
                     role.edit({color : "RANDOM"});
                 };
     });
 }, 2500);//the rainbow time
})

//====================================================================
//command = bc

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });

message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
//====================================================================


//====================================================================
//command = server

client.on('message',async message => {
if(message.content.startsWith(prefix +"server")){ // الامر
 if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

//====================================================================
//command = clear

client.on("message",async message => {
var args = message.content.substring(prefix.length).split(" ");
 if (message.content.startsWith(prefix+"clear")) {
   if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
             }

});

//====================================================================
//command = UnBan

client.on('message' ,async message => {
let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
if(message.content.startsWith(prefix + 'unban')) {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
   if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
   message.guild.unban(user);
   message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
   var embed = new Discord.RichEmbed()
   .setThumbnail(message.author.avatarURl)
   .setColor("RANDOM")
   .setTitle('**●Unban** !')
   .addField('**●User Unban :** ', `${user}` , true)
   .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
   .setAuthor(message.guild.name)
   message.channel.sendEmbed(embed)
}
});

//====================================================================
//command = Hide

client.on('message',async msg => {
if(msg.content === prefix + 'hide') {
 msg.guild.channels.forEach(c => {
   c.overwritePermissions(msg.guild.id, {
     SEND_MESSAGES: false,
     READ_MESSAGES: false
   })
 })
 msg.channel.send('**done!!**')
}
}) 

//====================================================================
//command = UnHide

client.on('message',async msg => {
if(msg.content === prefix + 'unhide') {
 msg.guild.channels.forEach(c => {
   c.overwritePermissions(msg.guild.id, {
     SEND_MESSAGES: true,
     READ_MESSAGES: true
   })
 })
 msg.channel.send('**done!!**')
}
}) 

//====================================================================
//command = allbc

client.on("message",async message => {
if(message.author.bot) return;
 if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'allbc')){
if(!message.author.id === '539541145835929623') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
=================================================================


const developers = ["539541145835929623"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
//====================================================================


client.login(process.env.BOT_TOKEN);