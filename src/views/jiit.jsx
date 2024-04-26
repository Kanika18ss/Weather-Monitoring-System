import image11 from '../assets/images/JIIT-Campus.jpg';
import image12 from '../assets/images/jiit.jpeg';
import Nheader from '../components/Nheader.jsx';

function JiitPage() {
   const pageTitle = "ABOUT Jaypee Institute of Information Technology";

   return (
       <>
           <Nheader pageTitle={pageTitle} />
           <div className="bg-gray-50 flex items-center">
               <section className="relative bg-cover bg-center py-32 w-full" style={{backgroundImage: `url(${image11})`}}>
                   <div className="absolute inset-0 bg-black opacity-50"></div>
                   <div className="mx-auto text-left text-white relative z-10">
                       <div className="flex ">
                           <div className="w-1/2">
                               <h1 className="text-5xl font-medium mb-6">Jaypee Institute of Information Technology</h1>
                               <p className="text-xl mb-12 text-justify">JIIT has been constantly ranked amongst the top engineering Institutes in Delhi NCR. Recently it has been ranked among top Engineering Institutes in India by Edu Rand 2014 Engineering College Rankings.</p>
                               <a href="https://www.jiit.ac.in/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-black py-4 px-12 rounded-full hover:bg-blue-600">Visit</a>
                           </div>
                       </div>
                   </div>
               </section>
           </div>
           <section className="bg-white dark:bg-gray-900">
               <div className="container px-6 py-10 mx-auto">
                 <br></br>
               <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                   About the <span className="text-blue-500">UNIVERSITY</span> 
               </h1>
               <p className=" mx-auto mt-6 text-justify text-gray-500 dark:text-gray-300">
                            Established in the year 2001, JIIT, has been declared as a "Deemed to be University" under Section 3 of the UGC Act 1956 in the year 2004. JIIT’s state-of-the-art, environmentally conditioned campus comprises smart buildings with Wi-Fi connectivity covering the Academic Block, Business School cum Research Block, Faculty Residences, Student Hostels, and Annapurna. Well-equipped modern laboratories and an intellectually stocked Learning Resource Centre with books and E-Resources provide a pleasant and stimulating ambience.
               </p>
                   <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                       <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                           <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                           To become a centre of excellence in the field of IT and related emerging areas of education,
                                training and research comparable to the best in the world for producing professionals who shall be
                                  leaders in innovation, entrepreneurship, creativity and management
                           </p>

                           <div className="flex items-center mt-6">
                               <img className="object-cover rounded-full w-14 h-14" src="https://www.jiit.ac.in/sites/default/files/1_1.jpg" alt="" />
                               <div className="mx-4">
                                   <h1 className="font-semibold text-blue-500 text-left">Vision</h1>
                                   <span className="text-sm text-gray-500 dark:text-gray-300">Jaypee Institute of Information Technology</span>
                               </div>
                           </div>
                       </div>

                       <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                           <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                           To develop as a benchmark University in emerging technologies.
                           To provide state-of-the-art teaching learning process and R&D environment.
                           To harness human capital for sustainable competitive edge and social relevance.
                           </p>

                           <div className="flex items-center mt-6">
                               <img className="object-cover rounded-full w-14 h-14" src="https://www.jiit.ac.in/sites/default/files/1_1.jpg" alt="" />
                               <div className="mx-4">
                                   <h1 className="font-semibold text-blue-600 text-left">Mission</h1>
                                   <span className="text-sm text-gray-500 dark:text-gray-300">Jaypee Institute of Information Technology</span>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

           
           


        <div className="bg-white h-screen font-sans flex flex-col items-center justify-center">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
           <div>
             <div className="flex flex-col items-center justify-center">
               <a className="inline-flex px-1 py-1 gap-x-2 rounded-xl border border-gray-400 border-2 hover:border-orange-500 items-center text-sm font-semibold text-gray-600 space-x-1" href="#">
                 <span className="bg-orange-100 flex items-center justify-center gap-2 text-orange-800 text-sm font-semibold px-2.5 py-0.5 rounded-lg dark:bg-blue-900 dark:text-blue-300">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-400">
                     <path d="m3 11 18-5v12L3 14v-3z"></path>
                     <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                   </svg>
                   New
                 </span>
                 <span>Move to TOP</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                   <path d="M5 12h14"></path>
                   <path d="m12 5 7 7-7 7"></path>
                 </svg>
               </a>
               <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                 <p className="sm:block">Jaypee Institute</p>
                 <span className="text-zinc-500 md:block"> Of Information</span>
                 <p className="text-orange-600 md:block"> Technology</p>
               </h1>
             </div>
             <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
               <button className="inline-flex items-center text-white bg-orange-500 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                 Get started now
               </button>
              
             </div>
           </div>
         </div>
         <div className="mt-16 ml-6 sm:mt-24 lg:mt-0 lg:col-span-5">
           <p className="text-base ml-12 text-gray-600 sm:text-xl lg:text-lg xl:text-xl text-justify">
           The institutions with the passage of their evolution and growth have succeeded in creating their place of excellence in the country and abroad. The institutes have been attracting bright students from all parts of the country for quality education in Computer Science and Information Technology at undergraduate, postgraduate and doctoral levels. 
           </p>
           <div className="mt-12 ml-8">
             <div className="grid grid-cols-3 gap-6 sm:gap-6 xl:gap-8">
               <div className="text-center sm:flex sm:items-center sm:justify-center">
                 <div className="sm:flex-shrink-0">
                   <div className="flow-root">
                     <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                       Students
                     </div>
                     <p className="text-4xl font-bold text-gray-900">4500+</p>
                   </div>
                 </div>
               </div>
               <div className="text-center sm:flex sm:items-center sm:justify-center">
                 <div className="sm:flex-shrink-0">
                   <div className="flow-root">
                     <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                       Faculties
                     </div>
                     <p className="text-4xl font-bold ml-4 text-gray-900">300+</p>
                   </div>
                 </div>
               </div>
               <div className="text-center sm:flex sm:items-center sm:justify-center">
                 <div className="sm:flex-shrink-0">
                   <div className="flow-root">
                     <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-orange-600 bg-orange-100 rounded-full">
                       Courses
                     </div>
                     <p className="text-4xl font-bold ml-4 text-gray-900">25+</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="mt-12 flex justify-center space-x-3">
             <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
               <img className="aspect-square h-full w-full" alt="User 1" src="https://upload.wikimedia.org/wikipedia/en/5/56/Logo-jiit.png" />
             </span>
             <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
               <img className="aspect-square h-full w-full" alt="User 2" src="https://admission.juet.ac.in/static/images/juet_trans1.jpg" />
             </span>
             <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
               <img className="aspect-square h-full w-full" alt="User 3" src="https://www.juit.ac.in/hss_workshop/images/HomeLogo.jpg" />
             </span>
             <span className="relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full">
               <img className="aspect-square h-full w-full" alt="User 4" src="https://jaypeeu.ac.in/images/logo/jua.jpg" />
             </span>
             
           </div>
         </div>
       </div>
     </div>
   </div>
       </>
   );
}

export default JiitPage;


