import React from "react";
function portfolio(){
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">My Portfolio | Projects</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">"Transforming Ideas into Impactful Digital Experiences: With a passion for innovation, I specialize in crafting stunning websites and seamless WordPress solutions. From eye-catching designs on Canva to strategic digital marketing, I bring your vision to life and help your brand stand out in the digital landscape."</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full border-x border-y shadow-2xl border-black  h-full object-center block transition-all ease-in-out hover:scale-150" src="./assets/project1.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full h-full border-x border-y shadow-2xl border-black object-center block hover:scale-150 transition-all ease-in-out" src="./assets/project3.png"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full border-x border-y shadow-2xl border-black  object-center block hover:scale-125 transition-all ease-in-out " src="./assets/project2.png"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover border-x border-y shadow-2xl border-black object-center block hover:scale-125 transition-all ease-in-out" src="./assets/project6.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full h-full object-center border-x border-y shadow-2xl border-black block hover:scale-150 transition-all ease-in-out" src="./assets/project7.png"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full border-x border-y shadow-2xl border-black  h-full object-center block hover:scale-150 transition-all ease-in-out" src="./assets/project4.png"/>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
    )
}
export default portfolio;