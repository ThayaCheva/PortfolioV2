import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styling/projects.css'
import './index.css'

export default function Projects() {
    const [selectedProject, setSelectedProject] = React.useState([]);
    const [projectState, setProjectState] = React.useState("closed-state");
    const [hideProject, setHideProject] = React.useState(false);

    function handleHideProject() {
        setHideProject(!hideProject);
    }

    function changeState(project, classname) {
        if (projectState === "opened-state") {
            setProjectState("closed-state");
        }
        else {
            setProjectState("opened-state");
            handleHideProject();    
            setSelectedProject([project, classname]);
        }
    }

    const projects = [
            {title: "LASTBITE", 
            desc: "LastBite is a service which essentially acts as an online food marketplace. It addresses the problem of achieving responsible consumption and production by giving a platform through which users can give away unwanted food or leftover food and others can choose to collect it. Made for 2023 Melbourne Hack and won 2nd place.", github: "https://github.com/LordPachimari/last-bite", 
            video: "https://www.youtube.com/watch?v=J-vVu0iHTps", 
            path: 'lastbite',
            folder: require.context(`./images/project-image/lastbite`, false),
            program: ["React", "Nextjs", "Supabase", "Zustand"]
            },
           
            {title: "ABYSS GUIDE", 
            desc: "The website is based on the show Made In Abyss and functions as a basic guide or introduction. This project is created using HTML and CSS. Furthermore, the page is also responsive to mobile devices.", 
            github: "https://github.com/ThayaCheva/Web-Development/tree/master/Made%20In%20Abyss%20Website_2", 
            video: "https://www.youtube.com/watch?v=DVy6FzfPX1M", 
            path: 'mia',
            folder: require.context(`./images/project-image/mia`, false),
            program: ["HTML", "CSS"]},

            {title: "PIRATE GAME", 
            desc: "Shadow Pirate is a top-down game created using Java and the Bagel library. Built with a focus on object-oriented programming. In this game, the player's goal is to reach the treasure at the end of level 2 while battling pirates and avoiding their attacks. Players will encounter various obstacles and discover helpful items along the way.", 
            github: "https://github.com/ThayaCheva/ShadowPirate", 
            video: "", 
            path: "pirate",
            folder: require.context(`./images/project-image/pirate`, false),
            program: ["JAVA", "BAGEL"]},

            {title: "PACMAN", 
            desc: "A unique spin on PacMan that offers players the freedom to create custom maps using a map editor. The game boasts multiple levels and introduces new gameplay mechanics, including autoplay, portals, and power-ups like freezing monsters. Furthermore, the game features new monsters, each with its own distinct behaviors.", 
            github: "https://github.com/ThayaCheva/PacMan2", 
            video: "", 
            path: "pacman", 
            folder: require.context(`./images/project-image/pacman`, false),
            program: ["JAVA", "JGAMEGRID"]},
        ]

    const ProjectLanguages = () => {
        return (
            selectedProject[0].program.map(i => <div className="skills-item">{i}</div>)
        )
    }

    const MainCarousel = () => {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3, // Display three items at a time
            slidesToScroll: 1,
            arrows: true,
            swipe: false,
        };

        if (window.innerWidth <= 1000) {
            // settings.vertical = true;
            // settings.verticalSwiping = true;
            settings.slidesToShow = 1;
        }

        const projectsElements = projects.map((p, index) => {
            if (index % 3 === 0) {
                return (
                    <div key={index} className={`project-item item-1`} onClick={() => changeState(p, "item-1")}>
                        {window.innerWidth <= 20 ? <img className="project-border" alt="project-border"src={require("./images/border-mobile.png")}></img> : <img className="project-border" alt="project-border" src={require("./images/border.png")}></img>}
                        <div className="project-title">
                            {p.title}
                        </div>
                    </div>
                )
            }
            else if (index % 3 === 1) { 
                return (
                    <div key={index} className={`project-item item-2`} onClick={() => changeState(p, "item-2")}>
                        {window.innerWidth <= 20 ? <img className="project-border" alt="project-border"src={require("./images/border-mobile.png")}></img> : <img className="project-border" alt="project-border" src={require("./images/border.png")}></img>}
                        <div className="project-title">
                            {p.title}
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div key={index} className={`project-item item-3`} onClick={() => changeState(p, "item-3")}>
                        {window.innerWidth <= 20 ? <img className="project-border" alt="project-border"src={require("./images/border-mobile.png")}></img> : <img className="project-border" alt="project-border" src={require("./images/border.png")}></img>}
                        <div className="project-title">
                            {p.title}
                        </div>
                    </div>
                )
            }
        })
        
        return (
            <Slider {...settings} className="slider">
                {projectsElements}
            </Slider>
        );
    };

    
    const ProjectCarousel = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1, // Display three items at a time
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        
        const [imagesLoaded, setImagesLoaded] = React.useState(false);

        const fileKeys = selectedProject[0].folder.keys();

        React.useEffect(() => {
            Promise.all(
                fileKeys.map((image) =>
                    new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = require(`./images/project-image/${selectedProject[0].path}${image.slice(1)}`);
                    img.onload = resolve;
                    img.onerror = reject;
                })
            )
            )
            .then(() => {
                setImagesLoaded(true);
            })
            .catch((error) => {
                console.error("Error loading image:", error);
            });
        }, [fileKeys]);

        if (!imagesLoaded) {
            return <div>Loading...</div>;
        }
        if (window.innerWidth <= 620) {
            settings.arrows = false;
        }

        const filePaths = fileKeys.map((key, index) => <img key={index} src={require(`./images/project-image/${selectedProject[0].path}${key.slice(1)}`)} alt="project"/>);

        return (
            <Slider {...settings}>
                {filePaths}
            </Slider>
        );
    };
    

    return (
        <section id="projects">
            <div className="projects-container">
                {!hideProject && <div className="main-carousel-container">
                    <MainCarousel/>
                </div>}
                {hideProject && <div className="project-display">
                    <div className={`project-item ${selectedProject[1]}`}  onClick={() => handleHideProject()}>
                    {window.innerWidth <= 1000 ? <img className="project-border" alt="project-border" src={require("./images/border-mobile.png")}></img> : <img className="project-border" alt="project-border" src={require("./images/border.png")}></img>}
                    {selectedProject[1] !== "item-1" ? <img className="exit-button" src={require("./images/cross-black.png")} alt="cross-black"></img> : <img className="exit-button" src={require("./images/cross-white.png")} alt="cross-white"></img>}
                        <div className="project-title">
                            {selectedProject[0].title}
                        </div>
                    </div>
                    <div className="project-info">
                        <div className="project-carousel-container">
                            <ProjectCarousel/>
                        </div>
                        <div className="skills-list"> 
                            <ProjectLanguages/>
                        </div>
                        <p>{selectedProject[0].desc}</p>
                        <div className="btn-container">
                            <a className="btn-1" href={selectedProject[0].github} target="_blank" rel="noreferrer">GITHUB</a>
                            {selectedProject[0].video !== "" ? <a className="btn-1" href={selectedProject[0].video} target="_blank" rel="noreferrer">VIDEO</a> : <div className="btn-blank">VIDEO</div>}
                        </div>
                    </div>
                </div>}
            </div>
        </section>
    )
}