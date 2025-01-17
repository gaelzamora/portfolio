import { useState } from "react"
import { projectImage, projects } from "../assets/data/data"
import {motion, AnimatePresence} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const itemVariants = {
    hidden: {
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    visible: {
        y: '-30%',
        transition: {   
            duration: 0.5
        }
    }
}

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersection } from "../hooks/useIntersection";
import { downToUp, itemOpacity } from "../animations/animations";

function Projects() {
    const [isHover, setIsHover] = useState(false)
    const [projectRef, isIntersectingProject] = useIntersection()
    const [cardRef, isIntersectingCard] = useIntersection()

    return (
        <section id="projects">

        <motion.div 
            className="md:py-20"
            variants={downToUp}
            initial='hidden'
            animate={isIntersectingProject ? 'visible' : ''}
            ref={projectRef}
            
            >
            <p className="text-gray-300 text-4xl block">/ pet projects</p>
            <div className="w-full mt-5">
                <div className='relative'>
                    {projectImage.map(project => (
                        <>
                            <p className="py-10 text-2xl text-gray-300">/ / {project.name}</p>
                            <p className="py-5 text-xl text-gray-500 tracking-wide text-justify">{project.description}</p>
                            <Link to={project.link} className="text-green-400 " > {' > '} View code</Link>
                            <Swiper
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            className="pt-5 relative"
                            >   
                                {project.images.map(image => (    
                                    <SwiperSlide 
                                        onMouseEnter={() => setIsHover(true)}
                                        onMouseLeave={() => setIsHover(false)}
                                    >
                                        <img src={image} alt="" className='rounded-2xl'  />
                                    </SwiperSlide>
                                ))}

                                <motion.div 
                                    className="flex gap-4 absolute left-1 bottom-4 md:bottom-6 z-50"
                                    variants={itemVariants}
                                    initial='hidden'
                                    animate={isHover ? 'visible' : 'hidden'}
                                    exit='hidden'
                                    >
                                    {project.technologies.map(tech => (
                                            <img src={tech} alt="Tech" className="md:w-10 w-6" />
                                    ))}
                                </motion.div>
                            </Swiper>
                        </>
                    ))}
                </div>
            </div>
            <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 auto-rows-[350px] gap-4" ref={cardRef}>
                <AnimatePresence mode="wait">
                    {projects.map((project, index) => (
                        <motion.div 
                            className="bg-[#10213e] rounded-2xl px-8 py-14 relative"
                            key={index}
                            custom={{delay: (index+1) * 0.4}}
                            initial='hidden'
                            animate={isIntersectingCard ? 'visible' : ''}
                            layoutId={project.name}
                            variants={itemOpacity}
                        >
                            <div className="flex justify-between items-start">
                                <p className="text-gray-200 text-lg tracking-wide font-semibold flex-1">{project.name}</p>
                                <Link to={project.link}>
                                    <FontAwesomeIcon icon={faGithub} className='cursor-pointer text-3xl text-white' />
                                </Link>
                            </div>

                            <div className="text-md text-gray-200 tracking-wider mt-10 h-32 overflow-y-scroll pr-4">
                              {project.description}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
        </section>
    )
}

export default Projects