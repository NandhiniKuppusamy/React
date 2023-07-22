import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginform';
import logo1 from './logo1.png'
function App() {
  return (
    <div className="page">     
      <img style={{height: '2%', width: '2%', left: '700px', display:'block'}} className='image' src={logo1}></img>
      <LoginForm/>
      {/* <img style={{marginTop: 430,marginRight:600,height: '2%', width: '2%'}} src={logo1}></img> */}

    </div>
  );
}

export default App;
