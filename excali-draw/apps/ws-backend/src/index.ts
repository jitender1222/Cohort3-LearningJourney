import { WebSocket, WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common2/client";

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === "string") {
      return null;
    }
    if (!decoded || !decoded.userId) {
      return null;
    }
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

const wss = new WebSocketServer({ port: 8080 });

interface User {
  ws: WebSocket;
  rooms: string[];
  userId: string;
}
const users: User[] = [];

wss.on("connection", function connection(ws, request) {
  try {
    const url = request.url;
    if (!url) {
      return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";
    const userId = checkUser(token);

    if (userId == null) {
      ws.close();
      return null;
    }

    users.push({
      userId,
      rooms: [],
      ws,
    });

    ws.on("message", function message(data) {
      const paresdData = JSON.parse(data as unknown as string);

      // when type is join room

      if (paresdData.type === "join_room") {
        const user = users.find((x) => x.ws === ws);
        if (user === undefined) {
          console.log("user is empty");
          return null;
        }
        user?.rooms.push(paresdData.roomId);
        console.log(
          `User ${user.userId} user-1 joined room: ${paresdData.roomId}`
        );
      }

      // when type is leave room
      if (paresdData.type === "leave_room") {
        const user = users.find((x) => x.ws === ws);
        if (!user) {
          return;
        }
        user.rooms = user?.rooms.filter((x) => x === paresdData.room);
      }

      // when type is chat
      if (paresdData.type === "chat") {
        const message = paresdData.message;
        const roomId = paresdData.roomId;
        console.log("inside chat users", users);

        users.forEach((user) => {
          if (user.rooms.includes(roomId)) {
            user.ws.send(
              JSON.stringify({
                type: "chat",
                message: message,
                roomId,
              })
            );
          }
        });
        console.log("userss", users);
      }
    });
  } catch (error) {
    return null;
  }
});
