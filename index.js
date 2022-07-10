const express = require('express')
const cors = require('cors')

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1435324",
  key: "c8d02bfa11630368670d",
  secret: "6d70570c6d6a81d4c49c",
  cluster: "ap1",
  useTLS: true
});

const app = express();

app.use(cors(
    {
        // origin:['http://192.168.100.40:8080/', 'http://localhost:8080/']
    }
))

app.use(express.json())

app.post("/api/messages",async(req, res)=>{
    await pusher.trigger("chat-app", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log("listening to port 8000");
app.listen(8000)