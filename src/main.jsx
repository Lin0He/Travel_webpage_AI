import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Response from './Response.jsx'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/Travel_webpage_AI">
      <Routes>
        <Route path="/*" element={<App />}/> 
        //<Route path="/response" element={<Response />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
