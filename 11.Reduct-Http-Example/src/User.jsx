import React from 'react'

function User({user}) {
    const {name,username} = user
  return (
    <div>
        <div>
            {name} - {username}
        </div>
    </div>
  )
}

export default User