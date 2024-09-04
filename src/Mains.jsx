
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Mains = () => {
    return (
        <div>
            
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Mains;