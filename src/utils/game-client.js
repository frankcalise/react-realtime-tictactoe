import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function joinGame(name, callback) {
  socket.emit("join", name);
  socket.on("self", id => callback({ type: "id", payload: id }));
  socket.on("list", list => callback({ type: "list", payload: list }));
  socket.on("new-player", player =>
    callback({ type: "player", payload: player })
  );
}

export { joinGame };
