import React from 'react'
import Navbar from '../components.lite/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup} from '../ui/radio-group'; 

const signup = () => {
  return (
    <div>
<Navbar></Navbar>
<div className='flex items-center justify-center max-w-7xl mx-auto'>
  <form action="" className='w-1/2 border-gray-200 rounded-md p-4 my-10'>
    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
    <div>
      <Label>Name</Label>
      <Input type='text' placeholder='John Doe'></Input>
    </div>
     <div>
      <Label>Email</Label>
      <Input type='email' placeholder='johndoes@gmail.com'></Input>
    </div>
    <div>
      <Label>Password</Label>
      <Input type='password' placeholder='********'></Input>
    </div>
    <div>
      <Label>Phone Number</Label>
      <Input type='tel' placeholder='+1234567890'></Input>
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
  </form>
</div>
      </div>
  )
}

export default signup;