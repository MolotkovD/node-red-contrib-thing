module.exports = function(RED) {
    function addNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
   
        this.on('input', function(msg) {
            msg.payload = {
                N: msg.payload.N ?? config.N,
                X: msg.payload.X ?? config.X,
                Y: msg.payload.Y ?? config.Y,
                T: msg.payload.T ?? config.T,
                G: msg.payload.G ?? config.G,
                V: msg.payload.V ?? config.V,
                D0: msg.payload.D0 ?? config.D0,
                L1: msg.payload.L1 ?? config.L1,
                L2: msg.payload.L2 ?? config.L2,
                L3: msg.payload.L3 ?? config.L3,
                L4: msg.payload.L4 ?? config.L4,
                P: msg.payload.P ?? config.P,
                Text: msg.payload.TEXT ?? config.TEXT,
            }
            node.send(msg)
            return msg;
        });
    }

    RED.nodes.registerType("Builder", addNode);
};