"use client"
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React, { useState } from 'react';
import googleImg from '../../../../public/assets/google.png'
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import toast, { Toaster } from 'react-hot-toast';
import { redirect } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const onSubmitForm = async (e)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const {data , error} = await authClient.signUp.email({
      name : user.name,
      image : user.image,
      email : user.email,
      password : user.password
    });

    if (error) {
      toast.error("User already exists");
      return
    }

    if (data) {
      toast.success("Sign Up Successful");
      redirect('/')
    }
  };

  const handleGoogle = async()=> {
    await authClient.signIn.social({
        provider: "google",
      });
  }
    return (
        <div className='max-w-7xl mx-auto mt-16 px-5 md:px-0'>
           <div className='space-y-3 mb-8 text-center'>
             <h2 className={`text-4xl font-semibold`}>Create Your Account</h2>
            <p className='text-black/50'>Start your adventure with Wanderlust</p>
           </div>
            <div className=' max-w-xl mx-auto shadow border border-gray-200  p-12 rounded-2xl'>
                <Form onSubmit={onSubmitForm}
      className="flex  flex-col gap-4 "
      render={(props) => <form {...props} data-custom="foo" />}
    >
        <TextField isRequired className="" name="name" type='text'>
      <Label>Full Name</Label>
      <Input placeholder="Enter Your Username" />
      <FieldError />
    </TextField>
        <TextField className="" name="image" type='url'>
      <Label>Image Link</Label>
      <Input placeholder="Image URL" />
    </TextField>
      <TextField 
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email Address</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
      className={'relative'}
        isRequired
        minLength={8}
        name="password"
        type={showPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <span className='absolute top-8.5 right-3 cursor-pointer' onClick={()=> setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEye/> : <FaEyeSlash/>
          }
        </span>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={'w-full bg-cyan-500 hover:scale-105 transition duration-300'} type="submit">
          Create Account
        </Button>
      </div>
      <div className="flex items-center gap-4">
  <div className="flex-1 border-t border-black/50"></div>

  <p className="text-black/50">Or sign up with</p>

  <div className="flex-1 border-t border-black/50"></div>
</div>
    </Form>
    <div className='flex justify-center items-center my-4'>
    <Button onClick={()=> handleGoogle()} className={'bg-gray-200 hover:scale-105 transition duration-300'} variant='ghost'>
    <Image src={googleImg} className='w-6' width={100} height={100} alt='google'></Image>
    Sign Up With Google
  </Button>
</div>
        <div className='flex gap-1.5 justify-center items-center'>
            <p className="text-black/50">Already Have an Account?</p>
            <Link className='text-cyan-500' href={'/signin'}>Sign In</Link>
        </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default SignUpPage;