import './header.css';
import logo from './youtube_logo.svg'

function App() {
  return (
    <div className="container">
        <div className='logo'>
            <img src={logo} />
        </div>
        <div className='search'>
            <span>
            <input type='search' className='search-bar' placeholder='Search'/>
            <button className='btn'>Search</button>    
            </span>
        </div>
        <div className='user'>
            <a href='#' className='user-login'>Sign in</a>
        </div>
    </div>
  );
}

export default App;
