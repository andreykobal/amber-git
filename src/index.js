import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import Whitepaper from "./routes/whitepaper";
import Tokenomics from "./routes/tokenomics";


import { initContract } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="whitepaper" element={<Whitepaper />} />
      <Route path="tokenomics" element={<Tokenomics />} />
    </Routes>
    </BrowserRouter>,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
