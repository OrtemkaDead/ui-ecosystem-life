import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Button } from '../src/Button'

const App = () => {
  return (
    <>
      <div>Example test</div>
      <Button />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
