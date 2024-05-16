const express = require('express')

class ThingServer{
    static instance;
    app;

    constructor() {
        if (ThingServer.instance) {
          return ThingServer.instance;
        }
        ThingServer.instance = this;
        this.setup()
        Object.freeze(this);
      }

    setup() {
        global.monitorNodes = {}
        global.controlNodes = {}
        this.app = express()
        
        this.app.use(
            express.json()
        )
        
        this.app.use(express.urlencoded({
            extended: true
        }))

        this.app.post('/Things/:ThingName', (req, res) => {
            global.monitorNodes[req.params.ThingName]?.send({payload: req.body})
            res.send(global.controlNodes[req.params.ThingName]?.controlData)
        })

        this.app.listen(29534, () => {
            console.log("PORT: 29534")
        })

    }    
}

new ThingServer()
