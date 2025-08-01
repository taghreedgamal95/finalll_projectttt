import React from 'react'

function Log() {
    return (
        <>
        <div>
          <h1>Log in</h1>
         <div className="form-floating mb-3">
           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
           <label htmlFor="floatingInput">Email address</label>
          </div>
         <div className="form-floating">
           <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
           <label htmlFor="floatingPassword">Password</label>
         </div>
          <div>
            <input className="btn1 btn-primary" type="submit" defaultValue="Submit" />
          </div>
        </div>
        </>
    )
}

export default Log
