import React from 'react';

const Form = props => {
    console.log('proppps in form', props)
    let userLoginInfo = {};
    return (
        <div className='form' style={{ textAlign: 'center' }}>
            <form class="form-signin text-center">
            <div class="form-group">
                <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <label for="inputEmail textalign-left">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus onChange={(e) => { userLoginInfo.email = e.target.value }} />
            </div>
            <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required onChange={(e) => { userLoginInfo.password = e.target.value }} />
                
                <div class="form-check mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block active" type="submit" onClick={() => { props.submitSignInEmail(userLoginInfo) }}>Sign in</button>
            </form>
        </div >
    )
}

export default Form;