import { Link } from 'react-router-dom'
import '../styles/signin.css'
import Footer from './Footer'
import Navbar from './Navbar'

const Signin = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="welcome-section">
                <h1>Seamless AI Login</h1>
                <h2>Effortless Access to your Account and Beyond.</h2>
            </div>
            <div className="login-section">
                <h1>Login</h1>
                <p>Welcome Back! Let's Create Amazing Content Together.</p>
                <form>
                    <input type="text" placeholder="User Name" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="submit">LOGIN</button>
                    <Link to="/signup">New User? Signup</Link>
                </form>

            </div>
        </div>
        <Footer />
        </>
    )
}

export default Signin