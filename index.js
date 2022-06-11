// Requiring dependencies.
const RPC = require("discord-rpc");
const client = new RPC.Client({transport: "ipc" }); // Other Options: Websocket
const { id, secret } = require("./config.json");

// Customize your Presence
const activity = {
    details: "Invite Vivre & Vivre Music Now.",
    assets: {
        large_image: "inshot_20211004_102237118",
        large_text: "Vivre",
        small_image: "vivre",
        small_text: "Vivre Music"
    },
    buttons: [
        {
            "label": "Vivre",
            "url": "https://www.vivre.cf/invite"
        },
        {
            "label": "Vivre Music",
            "url": "https://www.vivre.cf/pages/vivre-music/invite"
        }
    ],
    timestamps: {start: Date.now()},
    instance: true
};

client.on("ready", () => {
    console.log("Listening on https://www.itscruel.cf");
    console.log("Made by Ahad#3257");
    client.request("SET_ACTIVITY", {pid: process.pid, activity: activity});
});

client.login({clientId: id, clientSecret: secret});