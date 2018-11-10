const Discord = require('discord.js');//تعريف بكج
const client = new Discord.Client();// تعريف الكلينت
const ms = require('ms');
const pms = require('pretty-ms');

client.on('ready', () => {
          client.user.setActivity("GangUp >_<",{type: 'WATCHING'});
  
  });
client.login(process.env.BOT_TOKEN);






var ServerID = "508294311004340224"; // ايدي السيرفر
var ChannelID = "508321973126955038"; // اول روم للسبام

var ChannelIID = "508321998657814563"; // تاني روم للسبام
var ChannelIIID = "509437107517784065"; // تاني روم للسبام
var ChannelIIIID = "509437125226397729"; // تاني روم للسبا
 

//البكجات
//npm i discord.js
//npm install opusscript
//npm install node-opus
//npm install ffmpeg-binaries
//npm i ms : For Good Quality
//npm i pretty-ms : For Good Quality



client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console

function timerFunc() {
  
  
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelIID).send(Math.random().toString(36).substring(7)) // 


    });

          
          
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelIIID).send(Math.random().toString(36).substring(7)) // 


    });

          
          
          
    client.on('message', msg => {//Rie
        client.guilds.get(ServerID).channels.get(ChannelIIIID).send(Math.random().toString(36).substring(7)) // 


    });
}






var timer = setTimeout(timerFunc, 870);//Good Speed : 870 Very Fast : 305

client.on('ready', () => console.log('ProBot Credits Miner v2'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('Lets Go'));//كلام يظهر فل كونسول

client.on('ready', () => console.log('This Is A Beta Version And Maybe You Will Get Banned Quiqly Tip : Wait For The Official Release')); 

client.on('ready', () => console.log('By Rie'));//كلام يظهر فل كونسول



//ProBot Miner V3 
//Better Quality & Fast Mining & Better Minning = More Credits

var prefix = "T";
const pr1 = ['455496843774918656' , '502907623641972757' , ''];


client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
   
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send('${prefix}say <words>'); 
   
  if (command == "say") {
            if (!pr1.includes(message.author.id)) return;
   
  message.channel.send(args.join("  "))
      message.delete();
    }
  });
 

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'Tjoin') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
    }
  }
})



client.on('ready', () => {
  client.channels.find(ch => ch.id === "508330495927648280" && ch.type === 'voice').join();//اكتب اي دي روم صوت هنا
});

client.on("ready", () => {
let channel =     client.channels.get("508321973126955038")
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("508321998657814563")
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("509437107517784065")
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("509437125226397729")
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on('ready', async() => {
var server = "508294311004340224"; // ايدي السررفر
var channel = "509437125226397729";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , **')
    },305);
})
