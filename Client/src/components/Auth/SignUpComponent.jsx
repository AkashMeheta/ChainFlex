import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from '../index'
import { useDispatch } from 'react-redux'
import authServices from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("");

    const submitMethod = async (data) => {
        console.log("From submit Method", data)
        setError("")
        try {
            const newUserData = await authServices.createAccount(data);
            if (newUserData) {
                console.log(newUserData)
                const userData = await authServices.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            console.log("From submit Method", error)
            setError(error.message)
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-purple-400">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(submitMethod)}>
                    <div className='space-y-5'>
                        <Input
                            label="Name"
                            type="text"
                            placeholder="Enter Your Name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter Your Email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            placeholder="Enter your Password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">Create A Account</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp