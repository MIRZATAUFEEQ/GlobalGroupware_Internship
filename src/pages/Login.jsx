import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearAllUserErrors, login } from '../store/slices/userSlice'

const Login = () => {
    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const { loading, isAuthenticated, error, message } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    useEffect(() => {
        if (error) {
            dispatch(clearAllUserErrors())
        }
        if (isAuthenticated) {
            navigate('/')
        }
    }, [dispatch, isAuthenticated, error, navigate, loading])

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='border border-gray-300 rounded-4xl h-[15rem] w-[18rem] flex justify-center'>
                    <div className='w-full flex flex-col gap-4 justify-center px-5'>
                        <div className='w-full px-1 py-1 flex justify-center'><span className='font-bold text-nowrap text-xl'>Login your account</span></div>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} inputType='text' inputPlaceholder='Enter your email' />
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} inputType='password' inputPlaceholder='Enter your password' />
                        <button
                            className="w-full px-5 py-1 border border-gray-300 rounded-4xl bg-[#FAFAFA] text-black"
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login