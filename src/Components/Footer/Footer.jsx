import x from '../../assets/Logo.png' ;

export default function Footer() {
    return (
        <footer className="bg-dark bg-gradient text-white">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4">
                        <div className="d-flex align-items-center gap-3">
                            <div className='rounded-circle overflow-hidden'>
                                <img src={x} alt="Logo" style={{ width: '50px', height: '50px' }} />
                            </div>
                            <div>
                                <h5 className="mb-0 fs-3 fw-bold">Ziad El-Sayed</h5>
                                <small className="text-black fs-5">Freelance Web Developer</small>
                            </div>
                        </div>
                        <p className="mt-3 text-white fs-5 mb-0">I build accessible, modern web interfaces focused on performance and UX.</p>
                    </div>

                    <div className="col-md-4 mb-4 text-center">
                        <h6 className="fw-bold fs-4">Quick Links</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 fs-5 justify-content-center mb-0 mt-3">
                            <li><a className="text-white text-decoration-none" href="/about">About</a></li>
                            <li><a className="text-white text-decoration-none" href="/portfolio">Portfolio</a></li>
                            <li><a className="text-white text-decoration-none" href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4 text-md-end text-center">
                        <h6 className="fw-bold fs-4">Around the web</h6>
                        <div className="d-flex fs-5 justify-content-md-end justify-content-center gap-2 mt-3">
                            <a className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center social-sm" href="#" aria-label="Twitter">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.32.48-2 .56a3.48 3.48 0 0 0 1.52-1.92c-.68.4-1.44.68-2.24.84A3.47 3.47 0 0 0 12 8.28c0 .28 0 .56.04.84A9.86 9.86 0 0 1 3 4.92a3.47 3.47 0 0 0 1.08 4.64c-.56-.02-1.08-.16-1.56-.4v.04c0 1.68 1.2 3.08 2.8 3.4-.5.14-1.02.18-1.56.06.44 1.36 1.68 2.36 3.16 2.4A6.98 6.98 0 0 1 2 19.54a9.84 9.84 0 0 0 5.32 1.56c6.4 0 9.9-5.28 9.9-9.86v-.44c.66-.5 1.22-1.12 1.66-1.84-.6.28-1.24.48-1.9.56z"/></svg>
                            </a>
                            <a className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center social-sm" href="#" aria-label="LinkedIn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.06c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.64 4.74 6.06V21H17v-5.1c0-1.22 0-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.68V21H9z"/></svg>
                            </a>
                            <a className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center social-sm" href="#" aria-label="GitHub">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.66 3.02 8.62 7.2 10.02.53.1.72-.24.72-.52 0-.26-.01-1-.02-1.96-2.93.64-3.55-1.12-3.55-1.12-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.07 1.62 1.09 1.62 1.09.94 1.6 2.46 1.14 3.06.88.1-.68.37-1.14.67-1.4-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.4-2.08 1.06-2.81-.11-.27-.46-1.36.1-2.84 0 0 .86-.28 2.8 1.07A9.67 9.67 0 0 1 12 6.8c.87.004 1.76.12 2.58.35 1.94-1.35 2.8-1.07 2.8-1.07.56 1.48.21 2.57.1 2.84.66.73 1.06 1.66 1.06 2.81 0 4.04-2.47 4.92-4.82 5.18.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.19.62.73.52 4.18-1.4 7.2-5.36 7.2-10.02C23.1 5.33 18.27.5 12 .5z"/></svg>
                            </a>
                        </div>

                        <div className="d-flex align-items-center fs-5 justify-content-md-end justify-content-center gap-2 mt-3 text-muted">
                            <i className="fa-solid text-white fa-location"></i>
                            <span className="text-white">Cairo, Egypt</span>
                        </div>
                    </div>
                </div>

                <hr className="border-secondary opacity-25" />

                <div className="row">
                    <div className="col text-center small text-black">&copy; {new Date().getFullYear()} Ziad El-Sayed — All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}