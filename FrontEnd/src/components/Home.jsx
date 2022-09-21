
import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../context/UserContext.jsx"
import User from "./User.jsx"



const Home = () => {




    const { getUsers, users } = useContext(UserContext)

    useEffect(() => {
       

            getUsers()
        

    }, [])


    return (
        <>



            <div className="antialiased font-sans bg-gray-200">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8 lg:px-60">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
                        </div>

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                User
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Age
                                            </th>
                                         
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {users.map((element) => {




                                            const base64String = btoa(
                                                String.fromCharCode(...new Uint8Array(element.profileImage.data.data))
                                            );



                                            return <User key={element._id} id={element._id} imgUrl={`data:${element.profileImage.contentType};base64,${base64String}`} name={element.name} age={element.age} />
                                        }






                                        )}

                                    </tbody>
                                </table>


                                <div
                                    className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">

                                    <div className="inline-flex mt-2 xs:mt-0">
                                        <button
                                            className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">



                                            <Link to="/adduser">Add User</Link>


                                        </button>





                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        </>


    )
}

export default Home;