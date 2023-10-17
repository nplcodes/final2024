import { Link } from 'react-router-dom'

// Validaton uing yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {object, string}  from "yup";
import axios from 'axios';



const validationSchema = object().shape({
    username: string()
    .required('username is required'),
   
  fullName: string()
    .matches(/^[A-Za-z\s]+$/, 'Full name can only contain letters and spaces')
    .required('Full name is required'),
    
  email: string()
    .email('Invalid email format')
    .required('Please enter email'),
  
    class_role: string().required("select your role"),

  faculty: string().required("select your Faculty"),

  class: string().required("select your Class"),


  
  });
function AccountSettings() {


    const { register, handleSubmit,setValue, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
      }); 
  
      const onSubmitHandler = async (data) => {
        try {
          // Send a PUT request to update user data
          const response = await axios.put(`http://localhost:8080/auth/users`, data);
          setValue('faculty', data.faculty);
          setValue('class', data.class);


          console.log('User data updated:', response.data);
          // Redirect to the appropriate page
        //   navigate(link);
        } catch (error) {
          console.error('Error updating user data:', error);
        }
        reset();
      };

  return (
    <div className='flex gap-3 p-12'>
         <div className="max-w-[300px] bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-md h-36 w-36" src="https://police.gov.rw/fileadmin/user_upload/gumira.jpg" alt="qw" />
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                    <p className="text-base text-gray-400 font-normal">Academic Officer</p>
                    <div className='add '>
                        <button type="file" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 mt-3 rounded-sm w-full" > Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-cover bg-center relative">
                <div className="flex z-10">
                <div className="pb-12 pl-12 pb-r bg-white mx-auto rounded-2xl w-100 ">
                    <div>
                    <p className='text-2xl pt-5 pb-10 font-bold'>Provide More info ..... </p>
                    </div>
                    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="text-sm font-medium text-gray-700">Full names</label>
                        <label className="text-sm font-thin text-red-500">{errors.fullName?.message}</label>
                        <input
                        {...register("fullName")}
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Muneza Ben"
                            name="fullName"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Faculty</label>
                        <label className="text-sm font-thin text-red-500">{errors.faculty?.message}</label>

                        <select
                        {...register("faculty")}
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="faculty"
                        >
                            <option value="">Select Fuculty</option>
                            <option value="Law">Law</option>
                            <option value="Ict">Ict</option>
                            <option value="Languages">Languages</option>
                            <option value="Pps">Pps</option>


                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-thin text-red-500">{errors.username?.message}</label>
                        <input 
                          {...register("username")}
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="@lamar250"
                            name="username"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-thin text-red-500">{errors.email?.message}</label>
                        <input                    
                            {...register("email")}
                            type="email"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="@lamar250.com"
                            name="email"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">reserved 1</label>
                        <input
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Your password @123"
                            name="reserved"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">reserved 2</label>
                        <input
                            type="password"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Comfirm  password @123"
                            name="reserved"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Class</label>
                        <label className="text-sm font-thin text-red-500">{errors.class?.message}</label>
                        <select
                        {...register("class")}
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="class"
                        >
                            <option value="">Select Class</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>

                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Role in class</label>
                        <label className="text-sm font-thin text-red-500">{errors.role?.message}</label>
                        <select
                        {...register("class_role")}
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="class_role"
                        >
                            <option value="">Select Role</option>
                            <option value="Cep">Cep</option>
                            <option value="Pltn">Pltn </option>
                            <option value="Oc">Oc</option>
                            <option value="Cc">Cc</option>
                        </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 focus:outline-none focus:shadow-outline max-w-[100px]"
                    >
                        Edit
                    </button>
                    <p>
                        <Link to='/Home/manage-issue' className='text-blue-500'>Back</Link>
                    </p>
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AccountSettings