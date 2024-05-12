import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './Components/images/ECN_logo-1.png'

const Logins = () => {

  const AllowedUsers = [
    'user1', 
    'user2', 
    'user3',
    'user4',
    'user5',
    'user6',
    'user7',
    'user8',
    'user9',
    'user10',
  ];

  
  const [username, setUsername] = useState('');
  const navigate = useNavigate()


  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (AllowedUsers.includes(username)) {
      alert('User Can Vote')
      navigate('/dashboard')
    }

    else{
      alert('User Can not Vote')
      navigate('/')

    }
  };


  return (
    <div className='lg:bg-slate-950 h-screen flex justify-center items-center'>

      <div>
        <div className='lg:bg-white lg:w-[50rem] h-[30rem] rounded-3xl flex justify-center items-center px-5  lg:px-20'>

          <div className='lg:w-full'>
            <div className='w-32 flex m-auto py-5'>
                  <img src={logo} alt="" />
            </div>
            <form action="" onSubmit={handleSubmit}>

              <h2 className='text-center pb-5 text-slate-950 lg:text-slate-950'>Please Verify your unique ID</h2>

              <input type="text" required value={username} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full" />
              <button  class="btn btn-active  btn-primary 
                  bg-slate-900 text-white border-none 
                  hover:bg-slate-800 py-3 px-10 mt-5 w-full">
                  Verify Unique ID
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logins