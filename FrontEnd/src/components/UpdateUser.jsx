
import React, { useContext, useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import UserContext from '../context/UserContext.jsx'
import { toast } from 'react-toastify';






const UpdateUser = () => {
    const { id } = useParams();

    const { oneUser, updateUser } = useContext(UserContext)
    const [imgURL, setImgUrl] = useState()

    const [user, setUser] = useState({
        name: "",
        age: "",
        phone: "",
        uploadProfileImage: ""


    })




    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }



    const submitForm = () => {


        updateUser(id, user.name, user.age, user.phone, user.uploadProfileImage)

        setUser({
            name: "",
            age: "",
            phone: "",
            profileImage: ""
        })




        toast.success("User updated successfully", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        navigate('/')


    }


    const navigate = useNavigate()

    const handleCancel = () => {

        navigate('/')

    }




    const settingAlltheData = async (id) => {


        const singleuser = await oneUser(id)



        setUser({
            name: singleuser.name,
            age: singleuser.age,
            phone: singleuser.phone



        })




        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(singleuser.profileImage.data.data))
        );
        setImgUrl(`data:${singleuser.profileImage.contentType};base64,${base64String}`)



    }





    const handleImageChange = (e) => {
   
        setUser({ ...user, uploadProfileImage: e.target.files[0] })





    }



    useEffect(() => {
        settingAlltheData(id)
    }, [])








    return (


        <>




            <div >

                <div className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  `} id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div className="w-full flex justify-start text-gray-600 mb-3">


                           

                                <img src={user.uploadProfileImage ? URL.createObjectURL(user.uploadProfileImage) : imgURL} alt="" srcSet="" width="90" className='rounded mr-5 border-2  border-black' />




                                <label htmlFor="uploadProfileImage" className='className="flex flex-col justify-center items-center   bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 lg:w-[20vw] w-[35vw] text-center py-3'>

                                    upload Profile


                                    <svg aria-hidden="true" className="mb-3 mx-auto w-5 h-5 text-gray-400 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" ></path></svg>

                                </label>


                                <input id="uploadProfileImage" name='uploadProfileImage' type="file" multiple className="relative top-6 hidden" placeholder='Select Profile ' value='' title="Choose a video please" onChange={handleImageChange} />




                            </div>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter User Details</h1>
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">User Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. Hitesh" value={user.name} onChange={onChange} name='name' />




                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Age</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. 20" value={user.age} onChange={onChange} name='age' />




                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Phone</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">


                                    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>




                                </div>
                                <input id="phone" type='text' className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="Ex.9828161010" value={user.phone} onChange={onChange} name='phone' />
                            </div>







                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={submitForm}>Submit</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={handleCancel}>Cancel</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleCancel} aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
             


            </div>


        </>



    )
}

export default UpdateUser