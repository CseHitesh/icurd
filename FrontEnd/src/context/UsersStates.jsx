import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext.jsx'
import axios from 'axios';
const UsersStates = (props) => {

    const [localenv, setlocalEnv] = useState({ HOST: 'https://curd-with-image.onrender.com' })

const [users, setUsers] = useState([])

    // Geting all user
    const getUsers = async () => {
        // API Call 
        const response = await fetch(`${localenv.HOST}/api/users/getUsers`);

        const myjson = await response.json()
        setUsers(myjson)

    }


    //one user find 


    const oneUser = async (id) => {

        // API Call 

        const response = await fetch(`${localenv.HOST}/api/users/getuser/${id}`);
        const myjson = await response.json()

        return myjson
    }

    // Add user
    const addUser = async (name, age, phone, uploadProfileImage) => {




        // console.log(uploadProfileImage)


        const formdata = new FormData();
        formdata.append("name", name)
        formdata.append("age", age)
        formdata.append("phone", phone)
        formdata.append("uploadProfileImage", uploadProfileImage)


        const url = `${localenv.HOST}/api/users/adduser`

        const config = {

            headers: {
                "Content-Type": "multipart/form-data",
            }


        }



        const addedUser = await axios.post(url, formdata, config)
            .catch(error => console.log(error.message))
        setUsers(users.concat(addedUser.data.data))

        return addedUser.data.message
    }


    //update user 


    const updateUser = async (id, name, age, phone, uploadProfileImage) => {

        const formdata = new FormData();

        formdata.append("name", name)
        formdata.append("age", age)
        formdata.append("phone", phone)
        formdata.append("uploadProfileImage", uploadProfileImage)


        const url = `${localenv.HOST}/api/users/updateuser/${id}`

        const config = {

            headers: {
                "Content-Type": "multipart/form-data",
            }


        }





        const response = await axios.put(url, formdata, config)
            .catch(error => console.log(error.message))


        const updatedUsers = await users.filter((user) => { return user._id !== id })
        const updatedUsers2 = updatedUsers.concat(response.data.data)
        setUsers(updatedUsers2)


        return response.data.message

        }

        //deleting user
 
    const deleteUser = async (id) => {


        const url = `${localenv.HOST}/api/users/deleteuser/${id}`

        const response = await axios.delete(url)
            .catch(error => console.log(error.message))





        const newUsers = await users.filter((user) => { return user._id !== id })
        setUsers(newUsers)


        return response.data.message
    }




    return (


        <UserContext.Provider value={{ users, oneUser, getUsers, addUser, updateUser, deleteUser }}>



            {props.children}

        </UserContext.Provider>


    )
}

export default UsersStates;