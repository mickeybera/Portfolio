import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =async data => {
    const userInfo={
        name:data.name,
        email:data.email,
        message:data.message
    }
    try {
        await axios.post("https://getform.io/f/bjjeqqxb",userInfo);
        toast.success("your message is sent!")
    } catch (error) {
        console.log(error)
        toast.error("something went wrong!")
    }
  }
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
     <h1 className='text-3xl font-bold mb-4'>contact me</h1>
     <span>Please fill out the form below to contact me</span>
     <div className='flex flex-col items-center justify-center mt-5'>
        <form onSubmit={handleSubmit(onSubmit)} 
        // action="https://getform.io/f/bjjeqqxb"
        // method='POST'
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>send your message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700' 
                >
                 FullName
                </label>
                <input {...register("name", { required: true })}
                className='rounded-lg' type="text" 
                id='name'
                name='name'
                placeholder='enter your full name' />
                  {errors.name && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700' 
                >
                 email
                </label>
                <input {...register("email", { required: true })}
                className='rounded-lg' type="text" 
                id='email'
                name='email'
                placeholder='enter your email' />
                  {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700' 
                >
                 message
                </label>
                <textarea {...register("message", { required: true })}
                className='rounded-lg' type="text" 
                id='message'
                name='message'
                placeholder='enter your Quiry' />
                  {errors.message && <span className='text-red-500'>This field is required</span>}
            </div>
            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-500 duration-300'>send</button>
        </form>
     </div>
    </div>
    </>
  )
}

export default Contact
