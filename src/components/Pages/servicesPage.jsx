import React from "react"
function ServicesPage(){
    return(
<>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">What services I provide?</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Expert web development, creative design, and strategic digital marketing services tailored to elevate your online presence."</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="WordPress Development" className="object-cover object-center h-full w-full" src="./assets/wordpress_development.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">WordPress Development</h2>
  <p className="text-base leading-relaxed mt-2">
    Specializing in creating dynamic and responsive WordPress sites tailored to your business needs, with expertise in themes, plugins, and custom coding.
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="Frontend Development" className="object-cover object-center h-full w-full" src="./assets/website_development.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Frontend Development</h2>
  <p className="text-base leading-relaxed mt-2">
    Expertise in HTML, CSS, and JavaScript to craft visually stunning and interactive web applications, focusing on delivering an exceptional user experience.
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="Graphic Design with Canva" className="object-cover object-center h-full w-full" src="./assets/canva_designing.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Graphic Design with Canva</h2>
  <p className="text-base leading-relaxed mt-2">
    Creating captivating graphics that elevate brands and engage audiences, from social media content to marketing materials designed to resonate with your target market.
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="Digital Marketing" className="object-cover object-center h-full w-full" src="./assets/digital_marketing.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Digital Marketing</h2>
  <p className="text-base leading-relaxed mt-2">
    Ensuring your websites or Your brand successfuly promoted and take you in best sales, leads and engagement. Everything in it depends upon on your requirements and Business / Brand.
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="SEO Optimization" className="object-cover object-center h-full w-full" src="./assets/seo_optimization.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">SEO Optimization</h2>
  <p className="text-base leading-relaxed mt-2">
    Implementing SEO best practices to enhance your website's visibility on search engines, optimizing content and structure to attract organic traffic.
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
  <div className="rounded-lg h-64 overflow-hidden">
    <img alt="JavaScript Development" className="object-cover object-center h-full w-full" src="./assets/app_development.svg"/>
  </div>
  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">App Development</h2>
  <p className="text-base leading-relaxed mt-2">
    Proficient in App Development with years of experience. Convertion of your website to app OR want a custom App for your Business / Brand. Everything is here...
  </p>
  <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </a>
</div>

    </div>
  </div>
</section>
</> )
}
export default ServicesPage;