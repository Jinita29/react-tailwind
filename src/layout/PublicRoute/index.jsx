import {Outlet} from 'react-router-dom';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const PublicRoute = () => {
    return (
        <>
            <Header />
            <div className={'main-content min-h-[calc(100vh-100px)]'}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
export default PublicRoute;