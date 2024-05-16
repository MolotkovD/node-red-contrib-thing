require("./initer")

module.exports = function(RED) {
    
    function MonitorNode(config) {
        RED.nodes.createNode(this, config);
        global.monitorNodes[config.name] = this
    }

    RED.nodes.registerType("monitoring", MonitorNode);
}