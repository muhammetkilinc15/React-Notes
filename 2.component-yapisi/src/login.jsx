import React from 'react'

export const users = [
    { username: "mami", password: 123 },
    { username: "ugur", password: 123 },
]

function Login() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="" >Kullanıcı adınız</label>
                </div>
                <div className="col-lg-6">
                    <input type="text" className='form-control' placeholder='username' />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <label htmlFor="" >Kullanıcı Şifreniz</label>
                </div>
                <div className="col-lg-6">
                    <input type="password" className='form-control' placeholder='Şifre' />
                </div>
            </div>
            <button>Login</button>
        </>

    )
}

export default Login
