import { AnimatePresence, motion } from "framer-motion"
import { backendTechnologies, frontendTechnologies, otherTechnologies } from "../assets/data/data"
import photo from '../assets/images/photo.jpeg'
import { useIntersection } from "../hooks/useIntersection"
import { downToUp, itemOpacity } from "../animations/animations"

function About() {

    const [elementRef, isIntersecting] = useIntersection({
        threshold: 0.2,
    })

    const [textRef, isIntersectingText] = useIntersection({
        threshold: 0.2
    })

    return (
        <section id="about">

        <motion.div className="py-44"
        ref={elementRef}
        variants={downToUp}
        initial='hidden'
        animate={isIntersecting ? 'visible' : ''}
            >
            <p className="text-gray-300 text-4xl block">/ about me</p>
            
            <div className="mt-10 grid md:grid-cols-3 gap-4">
                <div
                    className="col-span-2 text-gray-400 tracking-wide" 
                    
                >
                    <p className="text-justify">Hello, I'm Gael, a dedicated software engineer with a strong passion for programming, particularly in backend development, software architecture, cloud computing, and artificial intelligence.

My journey in software engineering has been fueled by an endless curiosity and a deep drive to stay at the cutting edge of technological innovation. I genuinely enjoy tackling complex challenges and designing efficient, scalable solutions that not only fulfill but exceed expectations.

I'm always eager to learn and grow, thriving in collaborative environments where I can share my expertise and gain insights from others. My mission is to leverage my technical skills and problem-solving mindset to create impactful software solutions that drive meaningful change.</p>
                    <p className="mt-3">Some technologies in which I have been working: </p>
                    <div className="grid md:grid-cols-3 md:auto-rows-[300px] gap-5 mt-5" ref={textRef}>
                        <div className="max-w-[300px]">
                            <p className="text-lg text-green-400">Backend: </p>
                            <AnimatePresence mode="wait">
                                {backendTechnologies.map((item, index) => (
                                    <>
                                        <motion.p 
                                        className="py-1"
                                        key={index}
                                        custom={{delay: (index+1) * 0.4}}
                                        variants={itemOpacity}
                                        initial='hidden'
                                        animate={isIntersectingText ? 'visible' : ''}
                                        layoutId={item.name}
                                        >- {item.name}</motion.p>
                                    </>
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-lg text-green-400">Frontend: </p>
                            <AnimatePresence mode="wait">
                                {frontendTechnologies.map((item, index) => (
                                    <>
                                        <motion.p 
                                            className="py-1"
                                            key={index}
                                            custom={{delay: (index+1) * 0.4}}
                                            variants={itemOpacity}
                                            initial='hidden'
                                            animate={isIntersectingText ? 'visible' : ''}
                                            layoutId={item.name}
                                            >- {item.name}</motion.p>
                                    </>
                                ))}
                            </AnimatePresence>
                        </div>
                        <div className="max-w-[300px]">
                            <p className="text-lg text-green-400">Other: </p>
                            <AnimatePresence mode="wait">
                                {otherTechnologies.map((item, index) => (
                                    <>
                                        <motion.p 
                                            className="py-1"
                                            key={index}
                                            custom={{delay: (index+1) * 0.4}}
                                            variants={itemOpacity}
                                            initial='hidden'
                                            animate={isIntersectingText ? 'visible' : ''}
                                            layoutId={item.name}
                                            >- {item.name   }</motion.p>
                                    </>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={photo} alt="imagen" className="rounded-full hidden md:flex bg-cover w-56 h-56 md:absolute md:right-0 object-cover " />
                </div>
            </div> 
        </motion.div>
    </section>
    )
}

export default About