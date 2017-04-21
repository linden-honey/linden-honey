const fetch = require('node-fetch')
const config = require('../utils/config')
require('../models/song')

export async function up() {
    const url = config.get('db:migration:data_url')
    const responce = await fetch(url)
    const json = await responce.json()
    this('Song').create(json)
}

export async function down() {
    await this('Song').remove({})
}
