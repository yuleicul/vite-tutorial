import { join } from 'lodash-es'

document.querySelector('#app').innerHTML = `
  <h1>${join(['Hello', 'Viteeeee'], ' ')}</h1>
`
