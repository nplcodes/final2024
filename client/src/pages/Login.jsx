import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../components/social-media-icons/SocialIcons';
import { useDispatch, useSelector} from 'react-redux';
import { authActions } from '../redux/auth/authSlice';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const backgroundImageUrl = 'https://igihe.com/IMG/arton54068.jpg?1406050788';

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
};


const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);  // Use isLoading from Redux store
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the loginUserStart action to set loading state
      dispatch(authActions.loginUserStart());

      // Make an API call to fetch user information based on the login credentials
      await axios.post('http://localhost:8080/auth/login', formData);
      const userDataResponse = await axios.get(`http://localhost:8080/auth/login/${formData.email}`);
      const userData = userDataResponse.data;

      // Assuming response.data contains user data including the role
      if (userData.role === 'Student') {
        dispatch(authActions.loginUserSuccess(userData));
        navigate('/Home/issue-page');
      } else if (userData.role === 'Staff') {
        dispatch(authActions.loginUserSuccess(userData));
        navigate('/Home/staff-home');
      } else if (userData.role === 'admin') {
        dispatch(authActions.loginUserSuccess(userData));
        navigate('/Home/admin/manage');
      } else {
        // Handle other roles or cases if needed
      }
    } catch (error) {
      console.error('Login failed', error);
      if (error.response.data.error === 'Your account is pending.') {
        setError('Wait ..., Your account is pending.');
      } else if (error.response.data.error === 'User not exist.') {
        setError('User account not exist.');
      } else if (error.response.data.error === 'Invalid credentials.') {
        setError('Invalid credentials.');
      }

      // Dispatch the loginUserFailure action with the error message
      dispatch(authActions.loginUserFailure(error.message));
    }
  };
  

  return (
<form onSubmit={handleLogin}>
<div class="bg-no-repeat bg-cover bg-center relative" style={containerStyle}>
    <div class="absolute bg-gradient-to-b from-blue-700 to-black opacity-75 inset-0 z-0"></div>
  <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div class="self-start hidden lg:flex flex-col  text-white">
          <img src="" class="mb-3" alt=''/>
          <h1 class="mb-3 font-bold text-5xl">Hey! welcome to npc </h1>
          <p class="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups</p>
            <p className='mt-5'>Join npc on #social medias:</p>
            
            <SocialIcons />

        </div>
      </div>
      <div class="flex justify-center self-center  z-10">
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div class="mb-4">
              <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p class="text-gray-500">Please sign in to your account.</p>
            </div>
            <div class="space-y-5">
                        <div class="space-y-2">
                              <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
              <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="mail@gmail.com" />
              </div>
              <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" 
              type="password" 
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
               />
            </div>
              <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a href="n" class="text-gray-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button onClick={handleLogin} type="submit" class="w-full flex justify-center bg-blue-500  hover:bg-black text-gray-100 p-3  rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                {loading ? 'Logging in...' : 'Login'}

              </button>
            </div>
            <p>Don't Have account? <Link to='/register' className='text-blue-500'>Sign Up</Link></p>
            </div>
            {error && <div style={{ color: 'red' }}>{ error }</div>}
            <div className='flex items-center justify-center'>
              <SocialIcons />
            </div>
        </div>
      </div>
  </div>
</div>
   </form>
  );
};

export default LoginForm;
