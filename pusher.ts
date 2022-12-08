import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1507237",
  key: "f69b364de88cd0d310aa",
  secret: "ebd3eb2ea8d5061e57c8",
  // secret: JSON.stringify(process.env.PUSHER_SECRET),
  cluster: "us2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("f69b364de88cd0d310aa", {
  cluster: "us2",
  forceTLS: true,
});
