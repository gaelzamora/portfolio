import { Typewriter } from "react-simple-typewriter"


function Home() {
  return (
    <section className="text-white md:text-center pb-44 pt-56" id="home">
        <h1 className="font-semibold tracking-wide text-6xl">
            <Typewriter 
                    words={['hi, gael, here.']}
                    cursor
                    cursorBlinking={true}
                    cursorColor="#44AE9D"
            />
        </h1>
        <div className="text-gray-400">
            <p className="mt-5 text-5xl">I make good things sometimes.</p>
            <p className="mt-5 text-2xl md:max-w-[70%] mx-auto md:text-center text-justify">I'm software developer, focused in Backend Development also I am apasioned of Machine Learning.</p>
        </div>
    </section>
  )
}

export default Home