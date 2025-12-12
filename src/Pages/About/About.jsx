import Footer from "../../Components/Footer/Footer.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import x from '../../assets/profile.jpg'

export default function About() {
    return (<>

        <Navbar />
        <section className="py-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-3">About Me</h2>
                    <div className="d-inline-block">
                        <div className="line mx-auto"></div>
                    </div>
                </div>

                {/* Main About Content */}
                <div className="row align-items-center g-4 mb-5">
                    {/* Image / Profile */}
                    <div className="col-lg-5 text-center">
                        <div className="w-100 mb-3">
                            <div className="rounded-circle prof-img mx-auto overflow-hidden" >
                                <img className="w-100" src={x} alt="Profile" />
                            </div>
                        </div>
                        <h4 className="fw-bold text-dark">Ziad El-Sayed</h4>
                        <p className="text-muted">Front End Web Developer</p>
                    </div>

                    {/* About Text */}
                    <div className="col-lg-7">
                        <h3 className="fw-bold mb-3">Passionate Developer</h3>
                        <p className="text-muted lh-lg mb-3">
                            I'm a dedicated web developer with expertise in modern frontend and backend technologies.
                            I specialize in building responsive, user-friendly web applications that solve real-world problems.
                        </p>
                        <p className="text-muted lh-lg mb-4">
                            With a focus on clean code, performance, and UX design, I transform ideas into powerful digital solutions.
                            I'm passionate about continuous learning and staying updated with the latest technologies.
                        </p>

                        {/* Skills Pills */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-2">Key Skills</h5>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-primary">React</span>
                                <span className="badge bg-primary">JavaScript</span>
                                <span className="badge bg-primary">Bootstrap</span>
                                <span className="badge bg-primary">Node.js</span>
                                <span className="badge bg-primary">MongoDB</span>
                                <span className="badge bg-primary">REST API</span>
                                <span className="badge bg-primary">HTML/CSS</span>
                                <span className="badge bg-primary">Responsive Design</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience & Stats */}
                <div className="row g-4 text-center mb-5">
                    <div className="col-md-3">
                        <div className="card card-hover-effecct border-0 shadow-sm">
                            <div className="card-body py-4">
                                <i className="fas fa-briefcase text-primary mb-3" style={{ fontSize: '32px' }}></i>
                                <h5 className="fw-bold">Projects</h5>
                                <p className="text-muted mb-0">15+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-hover-effecct border-0 shadow-sm">
                            <div className="card-body py-4">
                                <i className="fas fa-code text-primary mb-3" style={{ fontSize: '32px' }}></i>
                                <h5 className="fw-bold">Languages</h5>
                                <p className="text-muted mb-0">6+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-hover-effecct border-0 shadow-sm">
                            <div className="card-body py-4">
                                <i className="fas fa-users text-primary mb-3" style={{ fontSize: '32px' }}></i>
                                <h5 className="fw-bold">Clients</h5>
                                <p className="text-muted mb-0">10+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-hover-effecct border-0 shadow-sm">
                            <div className="card-body py-4">
                                <i className="fas fa-trophy text-primary mb-3" style={{ fontSize: '32px' }}></i>
                                <h5 className="fw-bold">Experience</h5>
                                <p className="text-muted mb-0">3+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I Do */}
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="d-flex gap-3">
                            <div>
                                <i className="fas fa-laptop-code text-primary" style={{ fontSize: '28px' }}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">Web Development</h5>
                                <p className="text-muted mb-0">
                                    Building responsive, performant web applications using modern frameworks and best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-3">
                            <div>
                                <i className="fas fa-mobile-alt text-primary" style={{ fontSize: '28px' }}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">Mobile Responsive</h5>
                                <p className="text-muted mb-0">
                                    Creating mobile-first designs that work seamlessly across all devices and screen sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-3">
                            <div>
                                <i className="fas fa-database text-primary" style={{ fontSize: '28px' }}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">Backend Solutions</h5>
                                <p className="text-muted mb-0">
                                    Developing scalable backend systems with databases and APIs for robust applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-3">
                            <div>
                                <i className="fas fa-paint-brush text-primary" style={{ fontSize: '28px' }}></i>
                            </div>
                            <div>
                                <h5 className="fw-bold">UI/UX Design</h5>
                                <p className="text-muted mb-0">
                                    Designing beautiful, intuitive user interfaces with focus on user experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}