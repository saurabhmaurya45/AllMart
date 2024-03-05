// import logo from './logo.svg';

import CategoryWiseProduct from '../components/categorywiseproduct/categorywiseproduct';
import FooterQuickLinks from '../components/footerquicklinks/footerquicklinks';
import Corousel from '../components/corousel/corousel';


export default function Home() {
    return (
        <>
        <div>
            <Corousel />
            <CategoryWiseProduct />
            <FooterQuickLinks />
        </div>
        </>
    )
}