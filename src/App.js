//import logo from './logo.svg';
import './App.css';
import Secondpage from "./components/secondpage";
import LoginForm from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import Organization from './components/Organization';
import Volunteer from './components/Volunteer';
import Volunteerico from './components/Volunteericon';
import Join from './components/Join';
import logo from './logo.png';
import logo2 from './logo2.png'
function App(){
  return(
    <div className="app">
      <img style={{marginLeft:300}} src={logo2}></img> 
      <LoginForm/>
      <SignUp/>
      <img style={{marginLeft:800, marginTop:-200}} src={logo} className='img1'></img> 
      <About/>
      <Organization/>
      <Volunteer/>
      <Join/>
      <Volunteerico/>
          
    </div>
  );
}
export default App;

