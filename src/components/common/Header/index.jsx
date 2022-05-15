import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={'shadow drop-shadow-md bg-light dark:bg-black py-3'}>
                <div className={'container'}>
                    <div className={'flex justify-between items-center'}>
                        <h3>
                            <Link to={'/'} title={'Logo'} className={'text-lg text-theme dark:text-light font-semibold'} >Header</Link>
                        </h3>
                        <div>
                            <Link to={'/login'} title={'Log In'} className={'text-theme dark:text-light'} >Login</Link>
                            <Link to={'/register'} title={'Sign up'} className={'text-theme dark:text-light ml-2'} >Signup</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;