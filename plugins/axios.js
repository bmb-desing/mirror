import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `https://api.mirror-universe.ru`
}

export default axios.create(options)
