import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import UserContext from '../context/UserContext.jsx'

import backarrow from '../../public/back.png';
import { toast } from 'react-toastify';


const ViewProfile = () => {

  const navigate = useNavigate()


  const { oneUser, deleteUser } = useContext(UserContext)

  const [user, setUser] = useState([])
  const [imgURL, setImgUrl] = useState()



  const { id } = useParams();

  const settingAlltheData = async (id) => {


    const singleuser = await oneUser(id)


    setUser(singleuser)


    const base64String = btoa(
      String.fromCharCode(...new Uint8Array(singleuser.profileImage.data.data))
    );
    setImgUrl(`data:${singleuser.profileImage.contentType};base64,${base64String}`)



  }




  const handleDelete = async () => {
    await deleteUser(id)
    navigate('/')

    toast.error("User Deleted Successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


  }
  useEffect(() => {
    settingAlltheData(id)
  }, [])
  return (
    <>




      <div className="max-w-2xl mx-auto">

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mt-10">
          <div className="flex justify-end px-4 pt-4">
            <button id="dropdownButton" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              onClick={() => navigate('/')}>


              <img src={backarrow} alt="" srcSet="" className="w-6 h-6" />
            </button>

            <div id="dropdown"
              className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
              <ul className="py-1" aria-labelledby="dropdownButton">
                <li>
                  <a href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                    Data</a>
                </li>
                <li>
                  <a href="#"
                    className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center py-10">
            <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={imgURL} alt="Profile" />
            <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h3>


            <span className="text-sm text-gray-500 dark:text-gray-400">phone:{user.phone}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Age:{user.age}</span>

            <div className="flex mt-4 space-x-3 lg:mt-6">
              <a href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                onClick={() => navigate(`/updateuser/${id}`)}
              >Update</a>
              <a href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800" onClick={handleDelete}>Delete</a>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default ViewProfile