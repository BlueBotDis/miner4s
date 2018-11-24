const Discord = require('discord.js');//Package
const client = new Discord.Client();//client
const ms = require('ms');//Package
const pms = require('pretty-ms');//Package
client.login(process.env.BOT_TOKEN);//Token






var ServerID = "508294311004340224"; // Server ID
var Channel1ID = "508321973126955038"; // 1Room-Spam
var Channel2ID = "508321998657814563"; // 2Room-Spam
var Channel3ID = "509437107517784065"; // 3Room-Spam
var Channel4ID = "509437125226397729"; // 4Room-Spam
var Channel5ID = "515631702802956404"; // 5Room-Spam
var Channel6ID = "515631782196936714"; // 6Room-Spam

//{Spam Systel [log . spaming .elc]}

client.on('Warn', console.warn);//

client.on('Error', console.error);//

client.on('Disconnect', () => console.log('Disconnected!'));//If The Bot Disconnected You Will See That In The Consol

client.on('Reconnecting', () => console.log('Reconnecting...'));//If The Bot Desconnected And He Comes Online Again Will Say That In The Console

function timerFunc() {
  
  
    client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel1ID).send(Math.random().toString(36).substring(7)) // 


    });




    client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel2ID).send(Math.random().toString(36).substring(7)) // 


    });

          
      client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel3ID).send(Math.random().toString(36).substring(7)) // 


    });

    client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel4ID).send(Math.random().toString(36).substring(7)) // 


    });
        
    client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel5ID).send(Math.random().toString(36).substring(7)) // 


    });

          
          
          
    client.on('message', msg => {//KarZo
        client.guilds.get(ServerID).channels.get(Channel6ID).send(Math.random().toString(36).substring(7)) // 


    });

}

//{Console Log}

var timer = setTimeout(timerFunc, 870);//Speed

client.on('ready', () => console.log('ProBot Credits Miner'));//Console Log ..

client.on('ready', () => console.log('Lets Spamming'));//Console Log ..



//{User System}

var prefix = "1";
const pr1 = ['455496843774918656' , '502907623641972757' , ''];//{ID Who Can Use Commands}


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
let channel =     client.channels.get("508321973126955038")//1
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("508321998657814563")//2
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("509437107517784065")//3
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
},25)
})

client.on("ready", () => {
let channel =     client.channels.get("509437125226397729")//4
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
},25)
})

client.on("ready", () => {
let channel =     client.channels.get("515631702802956404")//5
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
},25)
})

client.on("ready", () => {
let channel =     client.channels.get("515631782196936714")//6
setInterval(function() {
channel.send(`**#- MinerBot By ,,KarZo** KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo KarZo Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error `);
},25)
})
