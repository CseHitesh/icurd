import React from 'react'
import {  useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext.jsx'
import { ToastContainer, toast } from 'react-toastify';

const User = ({ imgUrl, name, age, id }) => {

    const navigate = useNavigate()

    const { deleteUser } = useContext(UserContext)


    const handleDelete = () => {
        deleteUser(id)

        toast.error('User deleted successfully', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    return (
        <>


            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full border border-black p-1"
                                src={imgUrl}
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{age}</p>
                </td>



                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center md:text-left">

                    <button className="my-1 px-3 py-1 font-semibold text-green-900 leading-tight bg-green-100 rounded-full " onClick={() => navigate(`updateuser/${id}`)}>

                        Update
                    </button>

                    <button className=" my-1 font-semibold text-red-900 leading-tight rounded-full bg-red-100 px-3 py-1 md:mx-2"
                        onClick={handleDelete}>

                        Delete
                    </button>

                    <button className=" my-1 font-semibold text-gray-900 leading-tight rounded-full bg-gray-100 px-3 py-1"

                        onClick={() => navigate(`/view/${id}`)}

                    >

                        Profile
                    </button>

                </td>
            </tr>
        </>

    )
}

export default User