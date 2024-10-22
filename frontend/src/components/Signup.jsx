import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useRef } from 'react'
import { addUserInfo } from '../api'

const Signup = () => {

    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passRef = useRef(null);

    const handlesignup = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passRef.current.value;

        try {

            // sending data api.js to addID function where we will recive response from backend
            const result = await addUserInfo(email, username, password)
            // setMessage(result.message);
        } catch (error) {
            // setMessage(error.message);
        }
    }
    return (

        <>
            <Navbar />
            <div className="container">
                <div className="welcome-section">
                    <h1>Seamless AI Sign Up</h1>
                    <h2>Effortless Access to your Account and Beyond.</h2>
                </div>
                <div className="login-section">
                    <h1>Sign Up</h1>
                    <p>Welcome , Let's Create Amazing Content Together !</p>
                    <form>
                        <input type="email" placeholder="Email" required ref={emailRef} />
                        <input type="text" placeholder="Enter a Username" required ref={usernameRef} />
                        <input type="password" placeholder="Password" required ref={passRef} />
                        <button type="submit" onClick={handlesignup}>Create Account</button>
                        <Link to="/signin">Already have an Account?</Link>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Signup