import React from 'react';

const Form = props => {
    let userLoginInfo = {};
    return (
        <div className='login' style={{ textAlign: 'center' }}>
            <span>Login</span>
            <br /><input type="text" placeholder="username" onChange={(e) => { userLoginInfo.username = e.target.value }} />
            <br /><input type="password" placeholder="password" onChange={(e) => { userLoginInfo.password = e.target.value }}  />
            <br /><button onClick={()=>{props.submitLoginInfo(userLoginInfo)}}>Login</button>
        </div >
    )
}

export default Form;