const discord = require("discord.js")
const client = new discord.client()

client.on("ready", () => {
  console.log("i amm ready, my master")
});


client.on("message", message => {
  if(message.content === "!ping") {
    return message.channel.send("pong " +client.ws.ping)
  }
})

client.login("ODYyNDg2ODk2NTQ1MjM0OTc1.YOZDhA.gccUyLlyMAQf8zaEJy_1D4tLc1E")
