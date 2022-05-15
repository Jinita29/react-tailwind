import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <section className={'h-full bg-[#fff] text-black flex justify-center items-center dark:bg-black dark:text-light'} >
                <div className={'container'}>
                    <div className={'max-w-2xl m-auto text-red-500'}>
                        <span className={'text-5xl font-bold mb-5 inline-block'}>Opps !!!</span>
                        <p className={'text-5xl font-semibold'}>
                            Page Not Found
                        </p>
                        <Link to={'/'} title={'Back to home'} className="inline-block primary-btn mt-10 border-red-500 font-semibold text-red-500"> Back to home </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Error;