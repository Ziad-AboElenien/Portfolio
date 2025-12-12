import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {

    const [userName, setUserName] = useState("");
    const [userEmail ,setUserEmail] =useState("");
    const [userAge ,setUserAge] =useState("");
    const [userPassword ,setUserPassword] =useState("");


    function resetForm(){
        setUserName("") ;
        setUserAge("") ;
        setUserEmail("") ;
        setUserPassword("") ;
    }

    function successForm(){
        resetForm();
        setTimeout(() => {
            toast.success("Form submitted successfully!");
        }, 700);
    }

    return (
        <>
            <Navbar />
            <section className="contact bg-light bg-gradient">
                <div className="container mt-5 py-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="card bg-white form bg-gradient shadow-sm border">
                                <div className="card-body">
                                    <header className="mb-4 text-center">
                                        <h2 className="h4 fw-bold mb-1">Contact</h2>
                                    </header>

                                    <form className="contact-form">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label fw-semibold">User Name</label>
                                            <input id="name" type="text" className="form-control" placeholder="Jane Doe"
                                            value={userName}
                                            onChange={(e)=> setUserName(e.target.value)
                                            }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="age" className="form-label fw-semibold">User Age</label>
                                            <input id="age" type="number" className="form-control" placeholder="30" 
                                            value={userAge}
                                            onChange={(e)=> setUserAge(e.target.value)
                                            }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label fw-semibold">User Email</label>
                                            <input id="email" type="email" className="form-control" placeholder="jane@example.com"
                                            value={userEmail}
                                            onChange={(e)=> setUserEmail(e.target.value)
                                            }
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label fw-semibold">User Password</label>
                                            <input id="password" type="password" className="form-control" placeholder="••••••••"
                                            value ={userPassword}
                                            onChange={(e)=> setUserPassword(e.target.value)
                                            }
                                            />
                                        </div>

                                        <div className="d-flex gap-2 justify-content-end">
                                            <button onClick={()=>{resetForm()}} type="reset" className="btn btn-outline-secondary">Reset</button>
                                            <button onClick={()=>{successForm()}} type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
