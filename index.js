const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc",
});

rpc.on("ready", () => {
    rpc.setActivity({
        largeImageKey: "large_image",
        largeImageText: "large Image Text",
        smallImageKey: "large_image",
        smallImageText: "Small Image Text",
        buttons: [
            {
                label: "my nudes 😍",
                url: "https://noscope096.github.io/forDicordRPC/",
            },
        ],
    });

    console.log("RPC active");
});

rpc.login({
    clientId: "1109779132159639623",
});
