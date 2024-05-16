
module.exports = function(RED) {
    
    function MonitorNode(config) {
        RED.nodes.createNode(this, config);
        global.controlNodes[config.name] = this

        this.on("input" , (msg) => {
            this.controlData = msg.payload
        })
    }

    RED.nodes.registerType("command", MonitorNode);
}