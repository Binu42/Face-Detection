import React from 'react';

const Register = ({onRouteChange}) => {
    return (
        <article className='center-top br3 ba dark-gray b--black-10 mv4 w-90 w-50-m w-30-l shadow-3'>
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="name">Name</label>
                        <input className="border pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  id="name" placeholder='Enter Your Name'/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="border pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" placeholder='Enter Your E-mail'/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="border b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" placeholder='Enter Your password'/>
                    </div>
                </fieldset>
                <div className="">
                    <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('signin')} className="f5 white link dim black db pointer">Login</p>
                </div>
            </div>
            </main>
        </article>
    )
}

export default Register;