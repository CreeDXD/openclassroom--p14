import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import EmployeList from './pages/employe-list';
import { Provider } from 'react-redux';//installer redux et reduxtoolkit
import store from './redux/store/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>      
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/employelist" element={<EmployeList />} />
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
