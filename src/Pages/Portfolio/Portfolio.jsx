import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Portfolio.css";

export default function Portfolio() {

    let titles = ["Yummy", "Movie App", "Weather", "Bookmarker", "Daniels", "To-Do List", "Quotes App"];
    let descriptions = ["A recipe sharing platform", "A movie discovery app", "A weather forecasting tool", "A bookmark manager", "A personal portfolio website", "A task management application", "An inspirational quotes generator"];
    let demoLinks = ["https://ziad-aboelenien.github.io/yummy/", "https://ziad-aboelenien.github.io/Movie-App/", "https://ziad-aboelenien.github.io/Weather/", "https://ziad-aboelenien.github.io/Bookmarker/", "https://ziad-aboelenien.github.io/Daniels/", "https://ziad-aboelenien.github.io/To-Do-List/", "https://ziad-aboelenien.github.io/Quotes-App/"]
    let sourceLinks = ["https://github.com/Ziad-AboElenien/yummy", "https://github.com/Ziad-AboElenien/Movie-App", "https://github.com/Ziad-AboElenien/Weather", "https://github.com/Ziad-AboElenien/Bookmarker", "https://github.com/Ziad-AboElenien/Daniels", "https://github.com/Ziad-AboElenien/To-Do-List", "https://github.com/Ziad-AboElenien/Quotes-App"]

    return (<>
        <Navbar />
        <section className="portfolio my-5">
            <div className="container py-5">
                <header className="mb-4 text-center">
                    <h1 className="h2 mb-5 text-dark fw-bold">My Portfolio</h1>
                </header>

                <div className="row g-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-4">
                            <article className="card h-100 shadow-sm hover-zoom">
                                <div className="card-body d-flex flex-column">
                                    <h3 className="h5 card-title">{titles[i - 1]}</h3>
                                    <p className="text-muted small mb-3">{descriptions[i - 1]}</p>

                                    <div className="ratio ratio-16x9 mb-3">
                                        <iframe
                                            title={`project-${i}-demo`}
                                            src={demoLinks[i - 1]}
                                            className="portfolio-iframe"
                                            allowFullScreen
                                        />
                                    </div>

                                    <div className="mt-auto">
                                        <a target="_blank" href={demoLinks[i - 1]} className="btn btn-outline-primary btn-sm me-2">View Demo</a>
                                        <a target="_blank" href={sourceLinks[i - 1]} className="btn btn-outline-secondary btn-sm">Source</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </>
    );
}