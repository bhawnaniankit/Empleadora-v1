import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

export const SignIn = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className=' border shadow  px-20 py-32 flex flex-col justify-center items-center'>
      <div>
        <div className=' text-center '>
          <div className='my-1 text-3xl font-bold'>Create an Account</div>
          <div className=' text-slate-400'>Don't have an account? <Link to="/signup"><u>Signup</u></Link></div>
        </div>

        <div className=' m-w-md flex flex-col my-4 items-start'>
          <LabledInput label='Username' onchange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter your username' ></LabledInput>
          <LabledInput label='Password' onchange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter your password' ></LabledInput>
          <button onClick={async () => {
            try {
              const res = await axios.post("http://localhost:8080/api/v1/auth/client/signin", {
                username: username,
                password: password
              })
              navigate("/contest")
            }
            catch (e) {
              console.log(e);
            }
          }} className=' w-full md:min-w-80 lg:min-w-96 border-2 p-2 bg-black my-4 font-bold rounded-md text-white'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

interface LabledInputTypes {
  label: string,
  placeholder: string,
  onchange: (e: any) => void
  type: string
}

function LabledInput({ label, placeholder, onchange, type }: LabledInputTypes) {
  return <>
    <Lable label={label}></Lable>
    <input onChange={onchange} className=' w-full lg:min-w-96 md:min-w-80 border-2 p-2 rounded-md text-slate-400' type={type} placeholder={placeholder} />
  </>
}
const Lable = React.memo(({ label }: { label: string }) => {
  return <label className=' text-base font-semibold my-2' >{label}</label>
})
