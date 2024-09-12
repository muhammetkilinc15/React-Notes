import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { fetchUsers } from './redux/userSlice';
import User from './User';

function UserList() {

    const { users } = useSelector((store) => store.user)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    return (
        <div>
        {
           users && users.map((user)=>(
                <User key={user.id} user={user}/>
           ))
        }
        </div>
    )
}

export default UserList