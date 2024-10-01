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
                    <p className="text-justify">I am student of Computer Engineering at <span className="text-green-400">Universidad Nacional Autonoma de Mexico</span> I'm cursing Seventh Semester, I am apassioned of Software Development my work is oriented to <span className="text-green-400">Backend Development.</span></p>
                    <p className="mt-3">Some technologies I have been work: </p>
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