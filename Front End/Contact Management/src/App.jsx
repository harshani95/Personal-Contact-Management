import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import AddContact from './components/AddContact';
//import ViewContact from './components/ViewContact';
import Home from './components/Home';
import ContactList from './components/ContactList';

function App() {
 
  return (
    <>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
            <a className="navbar-brand" href="#">Contact Management System</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to='/addcontact'>Add Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to='/contactList'>Contact List</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link"  to='/viewcontact'>View Contact</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addcontact' element={<AddContact/>}/>
          <Route path='/contactList' element={<ContactList/>}/>
          {/* <Route path='/viewcontact' element={<ViewContact/>}/> */}
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App
