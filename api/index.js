const config = require('rsshub/lib/config')

config.set({
    NO_LOGFILES: true,
})

const app = require('rsshub/lib/app')

module.exports = (req, res) => {
    app.callback()(req, res)
}
