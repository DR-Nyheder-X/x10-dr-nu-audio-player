import fetch from 'isomorphic-fetch'

const base = '/api/v1'
const headers = { 'Accept': 'application/json' }

export function get (path, opts = {}) {
  return fetch(base + path, Object.assign({}, {headers}, opts))
  .then((resp) => resp.json())
}
