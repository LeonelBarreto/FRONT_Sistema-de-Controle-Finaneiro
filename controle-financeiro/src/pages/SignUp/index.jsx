import './styles.css';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='container-sign-up'>
      <img src={Logo} alt="logo" className='logo' />

      <div className='content-sign-up'>
        <form>
          <h2>Sign Up</h2>
          <div className='container-inputs'>
            <label htmlFor='name'>Name</label>
            <input type="text" name='name' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='email'>E-mail</label>
            <input type="text" name='email' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='password'>Password</label>
            <input type="password" name='password' />
          </div>
          <div className='container-inputs'>
            <label htmlFor='repeat-password'>Repeat password</label>
            <input type="password" name='repeat-password' />
          </div>

          <button className='btn-purple btn-big'>Register</button>
        <Link to='/'>Already registered? Click here!</Link>
        </form>
      </div>
      
    </div>
  );
}

export default SignUp;
