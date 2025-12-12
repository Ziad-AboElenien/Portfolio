import x from '../../assets/avataaars.svg';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
    return (
        <>
        <Navbar/>
            <section className="home py-5 bg-dark bg-gradient">
                <div className='container py-5 d-flex flex-column justify-content-center h-100'>
                    <div className='row justify-content-center'>
                        <div className='item  col-7'>
                            <div className="inner text-center">
                                <img className='w-50' src={x} alt="Placeholder" />
                                <h1 className='display-3 my-3'>Ziad Elsayed</h1>
                                <p className=''><div className='line mx-auto'></div><i className='fa-solid fa-star px-2 fs-4'></i><div className='line mx-auto'></div></p>
                                <p className='fs-4 py-2'>Graphic Artist - Web Designer - Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}