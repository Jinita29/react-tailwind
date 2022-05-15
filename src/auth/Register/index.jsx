import {useState} from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        password: '',
        cPassword: '',
        email: '',
    })
    const [errorMessages, setErrorMessages] = useState([]);

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let errors = {}

        if(formData.email === ''){
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email address is invalid ID';
        }else{
            errors.email = ''
        }
        if(formData.name === ''){
            errors.name = 'I like to know your good name.'
        }else{
            errors.name = ''
        }
        if(formData.password === ''){
            errors.password = 'Please enter valid password.'
        }else{
            errors.password = ''
        }
        if(formData.cPassword === ''){
            errors.cPassword = 'Confirm password can not be blank.'
        } else if (!(formData.cPassword == formData.password)){
            errors.cPassword = 'Confirm password should be same as a password.'
        }else{
            errors.cPassword = ''
        }

        setErrorMessages(errors)
        console.log("form data",formData, errorMessages);
    }
    return (
        <>
            <section className={'py-24 h-full bg-[#f5f5f5] text-black flex justify-center items-center dark:bg-black dark:bg-opacity-50 dark:text-light'} >
                <div className={'container'}>
                    <div className={'max-w-[430px] m-auto shadow p-5 px-8 bg-white dark:bg-black rounded overflow-hidden'}>
                        <h2 className={'text-black dark:text-white text-2xl text-center sm:text-3xl lg:text-4xl mb-8 md:mb-10 lg:mb-14 font-normal'}>Register</h2>

                        <form className={'max-w-4xl w-full'} onSubmit={(e)=>onSubmit(e)} >
                            <div className={'grid grid-cols-1 sm:grid-cols-1 gap-10 gap-y-4'}>
                                <label className="block">
                                    <span htmlFor={'name'} className="block text-sm font-medium dark:text-light mb-2">Name</span>
                                    <input type="text" placeholder={'Name'} name={'name'} value={formData.name} className="form-control" onChange={(e)=> handleOnChange(e)} />
                                    {errorMessages.name && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.name}</span>}
                                </label>
                                <label htmlFor={'email'} className="block">
                                    <span className="block text-sm font-medium dark:text-light mb-2">Email</span>
                                    <input type="text" placeholder={'Email'}  name={'email'} value={formData.email} className="form-control"  onChange={(e)=> handleOnChange(e)} />
                                    {errorMessages.email && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.email}</span>}
                                </label>
                                <label className="block">
                                    <span htmlFor={'password'} className="block text-sm font-medium dark:text-light mb-2">Password</span>
                                    <input type="password" placeholder={'Password'} name={'password'} value={formData.password} className="form-control" onChange={(e)=> handleOnChange(e)} />
                                    {errorMessages.password && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.password}</span>}
                                </label>
                                <label className="block">
                                    <span htmlFor={'cPassword'} className="block text-sm font-medium dark:text-light mb-2">Confirm Password</span>
                                    <input type="password" placeholder={'Confirm Password'} name={'cPassword'} value={formData.cPassword} className="form-control" onChange={(e)=> handleOnChange(e)} />
                                    {errorMessages.cPassword && <span className={'text-red-500 text-xs inline-block mt-2'}>{errorMessages.cPassword}</span>}
                                </label>
                                <div className={'col-span-1'}>
                                    <button type={'submit'} className="primary-btn"> Submit </button>
                                </div>
                            </div>
                        </form>

                        <p className={'mt-5'}>Already have an account? <Link to={'/login'} title={'Log In'} >Log In</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;