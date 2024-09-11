import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Auth = () => {
  const navigate = useNavigate();

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div className=' border shadow  px-20 py-32 flex flex-col justify-center items-center'>
      <div className=''>
        <div className=' text-center '>
          <div className='my-1 text-3xl font-bold'>Create an Account</div>
          <div className=' text-slate-400'>Already have an account? <Link to="/signin"><u>Login</u></Link></div>
        </div>

        <div className=' flex flex-col my-4 items-start'>
          <LabledInput onchange={(e) => { setName(e.target.value) }} label='Name' type="text" placeholder='Enter your name' ></LabledInput>
          <LabledInput onchange={(e) => { setUsername(e.target.value) }} label='Username' type="text" placeholder='Enter your username' ></LabledInput>
          <LabledInput onchange={(e) => { setEmail(e.target.value) }} label='Email' type="text" placeholder='m@example.com' ></LabledInput>
          <LabledInput onchange={(e) => { setPassword(e.target.value) }} label='Password' type="password" placeholder='Enter your password' ></LabledInput>
          <button onClick={async () => {
            try {
              const res = await axios.post("http://localhost:8080/api/v1/auth/client/signup", {
                name, username, email, password
              });
              navigate("/contest")
            }
            catch (e) {
              console.log(e);
            }
          }} className=' w-full md:min-w-80 lg:min-w-96 border-2 p-2 bg-black my-4 font-bold rounded-md text-white'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

interface LabledInputTypes {
  label: string,
  placeholder: string,
  onchange: (e: any) => void,
  type: string
}

function LabledInput({ label, placeholder, onchange, type }: LabledInputTypes) {
  return <>
    <label className=' text-base font-semibold my-2' >{label}</label>
    <input onChange={onchange} className=' w-full lg:min-w-96 md:min-w-80 border-2 p-2 rounded-md text-slate-400' type={type} placeholder={placeholder} />
  </>
}

export default Auth
