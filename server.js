const io = require("socket.io")();

const players = {
  p1: null,
  p2: null
};

const names = [];

let id = 0;

io.on("connection", client => {
  // can send events to the client
  client.on("join", name => {
    id += 1;
    // first two to connect join as players
    if (players.p1 === null) {
      players.p1 = id;
    }
    if (players.p2 === null) {
      players.p2 = id;
    }

    // add everyone to spectator list
    const newPlayer = { id, name };
    names.push({ newPlayer });
    client.emit("self", id); // send user their id
    client.emit('list', names); // give the joined user a list of people in game
    // update existing users with the new user
    client.broadcast.emit("new-player", newPlayer);
  });

  client.on("leave", id => {
    // remove id
    console.log('remove id')
  });
});

const port = 8000;
io.listen(port);
console.log("listening on port", port);
