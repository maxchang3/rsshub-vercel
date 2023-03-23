const path = require('path')
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@', path.join(__dirname, '../node_modules/rsshub/lib'))

const config = require('rsshub/lib/config')

config.set({
    NO_LOGFILES: true,
})

const app = require('rsshub/lib/app')

module.exports = (req, res) => {
    app.callback()(req, res)
}
