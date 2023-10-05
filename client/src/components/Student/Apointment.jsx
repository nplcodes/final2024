import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

// Validaton uing yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import  {object , string}  from "yup";

// Validation Form schema
const validationSchema = object().shape({
  
  reason: string()
  .matches(/^[A-Za-z\s]+$/, 'Reason can only contain letters and spaces')
  .max(200, 'Reason must be at most 200 characters')
  .required('Reason is required')
  
  });

function Apointment() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
      });
      const onSubmitHandler = async(data) => {
        try {
          console.log('Data saved to MongoDB');
        } catch (error) {
          console.error('Error saving data to MongoDB', error);
        }
        reset();
      };

  return (
    <div className='p-10'>
        {/* Booking left part */}
        <div className='w-full flex p-10'>
            {/* <div className='bg-gray-200 min-w-[5%] h-auto flex flex-col items-center gap-2 justify-center'>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><AiOutlineUnorderedList /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <SlCalender /></p>
                <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'> <BiMessageAltEdit /></p>
            </div> */}
            <div className='w-[95%] h-auto grid grid-cols-6'>
                {/* Leaders info left part */}
                {/* ...................................... */}
                <div className='h-auto col-span-1 flex flex-col p-5 border'>
                    <img className='w-32 h-32 rounded-md'src="https://police.gov.rw/fileadmin/user_upload/KANYA2.png" alt="div" />
                    <p className='self-center text-md'>Admin</p>
                    <div className='bg-white mt-3'>
                        <div className='p-2 bg-blue-500 mb-1 flex justify-between items-center'>
                            <p>Book </p>
                            <AiOutlineClockCircle />
                        </div>
                        <div className=''>
                            <div className='bg-slate-300 p-1 mb-1 cursor-pointer'>
                                <p>1:00-2:00</p>
                            </div>
                            <div className='bg-slate-300 p-1 mb-1 cursor-pointer'>
                            <p>2:00-3:00</p>
                            </div>
                            <div className='bg-slate-300 p-1  cursor-pointer'>
                            <p>4:00-5:00</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='grid col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                    <div className="flex z-10">
                    <div className="p-12 bg-white mx-auto w-100 ">
                        <div className='pb-7'>
                        <p className='text-2xl pt-5'>Request Appointment <span className='text-sm'>jun 6, 2023</span></p>
                        </div>
                        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                            <label className="text-sm font-medium text-gray-700">Start Time</label>
                            <input
                                type="text"
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="1:00-3:00 p.m"
                                name="startTime"
                                disabled
                            />
                            </div>
                            <div>
                            <label className="text-sm font-medium text-gray-700">End Time</label>
                            <input
                                type="text"
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="2:00-3:00 p.m"
                                name="endTime"
                                disabled
                            />
                            </div>
                            <div className='col-span-2'>
                            <label className="text-sm font-medium text-gray-700">Reason</label>
                            <textarea  rows="6" {...register("reason")}
                                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                placeholder="Enter issue description"
                                name="description"
                            ></textarea>
                             <label className="text-sm font-medium text-red-500">{errors.reason?.message}</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 w-32 rounded-md hover:bg-black text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
                        >
                            Book
                        </button>
                        <p>
                        </p>
                        </form>
                    </div>
                    </div>
      </div>
                </div>
            </div>
        </div>
  )
}

export default Apointment