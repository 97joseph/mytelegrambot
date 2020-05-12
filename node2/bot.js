const Telegraf=require('telegraf');
const bot=new Telegraf('token');

//code  /start
bot.start((ctx)=>{
   ctx.reply(ctx.from.first_name+"You have entered the start command");
   ctx.updateSubTypes[0];
   //console.log(ctx)==show all the attributes of the ctx
   console.log(ctx.from);
   console.log(ctx.chat);
   console.log(ctx.message);
   console.log(ctx.updateSubTypes);

})

bot.help((ctx)=>{
 ctx.reply("You have entered the help command");   
})
bot.settings((ctx)=>{
    ctx.reply("You have entered the settings command");
})
bot.launch(); 
