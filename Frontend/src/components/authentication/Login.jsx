import React from 'react'
import Navbar from '../components.lite/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup} from '../ui/radio-group'; 

const Login = () => {
  return (
    <div>
<Navbar></Navbar>
<div className='flex items-center justify-center max-w-7xl mx-auto'>
  <form action="" className='w-1/2 border-gray-200 rounded-md p-4 my-10'>
    <h1 className="font-bold text-xl mb-5 text-center text-blue-600">Login</h1>
    
     <div className='my-2'>
      <Label>Email</Label>
      <Input type='email' placeholder='johndoes@gmail.com'></Input>
    </div>
    <div className='my-2'>
      <Label>Password</Label>
      <Input type='password' placeholder='********'></Input>
    </div>
   
    <div className='flex items-center justify-between '>
      <Label>Role</Label>
      <RadioGroup className="flex items-center gap-4 my-5">
      <div className="flex items-center gap-3">
       <Input type="radio"
         name="role"
       value="student" 
       className="cursor-pointer"
       /> 
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center gap-3">
  <Input type="radio"
         name="role"  
       value="Recruiter" 
       className="cursor-pointer"
       />     
       <Label htmlFor="r2">Recruiter</Label>
      </div>
     
    </RadioGroup>
    </div>
    
    <button className="block w-full py-3  text-white bg-primary hover:bg-primary/90 rounded-md ">
      Login
      </button>
      {/*No account then sign up*/}
      <p className=' text-gray-500 text-center my-2'>No account? <Link to="/signup" className="text-blue-700">Sign Up</Link>
      </p>
  </form>
</div>
</div>
  )
}

export default Login;