import { Outlet } from 'react-router-dom';
import FrokHeader from '../Component/Header';


const DefaultLayout = () => {
    return (
        <div>
            <FrokHeader />
            <main style={{ padding: '2rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;