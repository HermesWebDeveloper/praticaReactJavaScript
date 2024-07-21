import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Exercicio01 from './ex01.jsx'
import Exercicio02 from './ex02.jsx'
import Exercicio03 from './ex03.jsx'
import Exercicio04 from './ex04.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Exercicio01 />
    <hr></hr>
    <Exercicio02 />
    <hr></hr>
    <Exercicio03 />
    <hr></hr>
    <Exercicio04 />
  </React.StrictMode>
)
