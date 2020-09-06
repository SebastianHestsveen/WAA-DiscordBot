
 /*
   
      laget 05.09.2020
      sist oppdater 05.09.2020
      denne koden kobler seg til discord og skal spille noen dive lydfiler
      denne spiller waaaa og heter waaa som ref til walugi 
  */

var Discord = require('discord.js');  //kobler seg til discord
var bot = new Discord.Client();

//iden til botten sån at bare folk med denne koden kan påvirke den ikke del med andre!
const TOKEN = 'NzUxODQ5NDI0Mjc5NDM3NDI2.X1PEVw.j3A4NuoWkIR2GjDTHkGgNjIb49w';

//sier fra i konsolen når den loder
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

//når man skriver medling kobbler den seg til chatten 
bot.on('message', message =>{
  if (message.content === 'WAA!'){



    message.reply('WAAAAA!');
    
    //tilater å lage en vei til voicchanel 
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection =>{
      //spiller musik 
      const dispatcher = connection.play('aduio/Einar.mp3');      
      //får den til å live 
      dispatcher.on("end", end => { 
        voiceChannel.leave(); 
      });
    }).catch(err => console.log(err));
  }
});

bot.on('message', message =>{
  if (message.content === 'WAAA!'){
    message.reply('WAAAAA!');
    
    //tilater å lage en vei til voicchanel 
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection =>{
      //spiller musik 
      const dispatcher = connection.play('aduio/WAA.mp3');      
      //får den til å live 
      dispatcher.on("end", end => { 
        voiceChannel.leave(); 
      });
    }).catch(err => console.log(err));
  }
});

bot.on('message', message =>{
  if (message.content === 'WAAAA!'){
    message.reply('WAAAAA!');
    
    //tilater å lage en vei til voicchanel 
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection =>{
      //spiller musik 
      const dispatcher = connection.play('aduio/WAAA.mp3');      
      //får den til å live 
      dispatcher.on("end", end => { 
        voiceChannel.leave(); 
      });
    }).catch(err => console.log(err));
  }
});

bot.on('message', message =>{
  if (message.content === 'WAAAAA!'){
    message.reply('WAAAAA!');
    
    //tilater å lage en vei til voicchanel 
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection =>{
      //spiller musik 
      const dispatcher = connection.play('aduio/WAAAA.mp3');      
      //får den til å live 
      dispatcher.on("end", end => { 
        voiceChannel.leave(); 
      });
    }).catch(err => console.log(err));
  }
});

bot.on('message', message =>{
  if (message.content === 'WAAAAAA!'){
    message.reply('WAAAAA!');
    
    //tilater å lage en vei til voicchanel 
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then(connection =>{
      //spiller musik 
      const dispatcher = connection.play('aduio/WAAAAAAAA.mp3');      
      //får den til å live 
      dispatcher.on("end", end => { 
        voiceChannel.leave(); 
      });
    }).catch(err => console.log(err));
  }
});



//sender iden for å koble seg til
bot.login(TOKEN);