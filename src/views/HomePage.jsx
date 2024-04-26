import ImageGrid from '../components/imagegallery.jsx';
import Nheader from '../components/Nheader.jsx';
import image1 from '../assets/images/arora.png';
import image2 from '../assets/images/dhiman.png';
import image3 from '../assets/images/dua.png';
import image4 from '../assets/images/CHOUDHARY.png';
import sir from '../assets/images/Sir.jpeg';


function BooksPage() {
 

 return (
   <>
     <style>
       {`
       #map-container {
         display: flex;
         justify-content: center;
         margin-top: 20px;
         overflow-x: hidden; /* Ensure no horizontal scrollbar */
       }
      
       @keyframes word {
         0% {
           transform: translateY(100%);
         }
         15% {
           transform: translateY(-10%);
           animation-timing-function: ease-out;
         }
         20% {
           transform: translateY(0);
         }
         40%,
         100% {
           transform: translateY(-110%);
         }
       }
      
       .animate-word {
         animation: word 7s infinite;
       }
       .animate-word-delay-1 {
         animation: word 7s infinite;
         animation-delay: -1.4s;
       }
       .animate-word-delay-2 {
         animation: word 7s infinite;
         animation-delay: -2.8s;
       }
       .animate-word-delay-3 {
         animation: word 7s infinite;
         animation-delay: -4.2s;
       }
       .animate-word-delay-4 {
         animation: word 7s infinite;
         animation-delay: -5.6s;
       }
       
       `}
     </style>
     <Nheader />
     <div className="flex h-44 items-center justify-center bg-blue font-bold text-black" style={{ backgroundImage: "url('')", opacity: 0.8 }}>
  <div className="text-center space-y-12">
    <div className="text-center text-3xl font-bold">
      <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
        <span className="animate-word-delay-1 col-span-full row-span-full">AUTOMATED WEATHER MONITORING SYSTEM</span>
        <span className="animate-word-delay-2 col-span-full row-span-full">HELLO WELCOME</span>
        <span className="animate-word-delay-3 col-span-full row-span-full">WEATHER MONITORING SYSTEM</span>
        <span className="animate-word-delay-4 col-span-full row-span-full">HELLO WELCOME</span>
      </div>
    </div>
  </div>
</div>




     <ImageGrid />
     <br></br>
     <section className="bg-white dark:bg-gray-900">
               <div className="container px-6 py-10 mx-auto">
                 <br></br>
               <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                   About the <span className="text-blue-500">Project</span>
               </h1>
               <p className="max-w-7xl mx-auto mt-6 text-gray-500 dark:text-gray-300 text-justify" >
               The Vishnuprayag Hydro Electric Plant in Uttarakhand, India, faces a critical problem due to inadequate weather monitoring infrastructure. The current system relies on manual data collection methods, resulting in significant gaps in real-time weather intelligence. This lack of comprehensive monitoring makes it challenging to anticipate and proactively address weather-related risks, such as heavy rainfall, snowfall, and high winds, which can disrupt operations and compromise safety.
               </p>
               <p className="max-w-7xl mx-auto mt-6 text-gray-500 dark:text-gray-300 text-justify" >
               The primary objective of implementing an automated weather monitoring system at the Vishnuprayag Hydro Electric Plant is to enhance operational efficiency, safety, and environmental sustainability. This system aims to address the current shortcomings in weather monitoring infrastructure by leveraging IoT technology, API integration, and advanced analytics to provide real-time and comprehensive weather intelligence. By doing so, the plant seeks to anticipate and proactively mitigate weather-related risks, optimize resource allocation, and minimize downtime and equipment damage.
               </p>
               <br></br>
               <br></br>
               <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                   Components of the Project
               </h1>
                   <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                       <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                           <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                           <p><b>IoT Sensors</b>: Deployed strategically across the plant's periphery and surrounding terrain, IoT sensors will capture a wide array of meteorological parameters, including temperature, humidity, precipitation, wind speed, and atmospheric pressure. These sensors will be designed to withstand harsh weather conditions and transmit data seamlessly to a centralized data hub for analysis.</p>
                           <p><b>API Integration</b>: The system will integrate with reputable weather APIs to augment the data collected by IoT sensors. By tapping into external sources of weather data, such as satellite imagery, weather forecasts, and historical trends, the system can enhance its accuracy and predictive capabilities, thereby improving the reliability of weather forecasts and risk assessments.</p>
                           </p>

                          
                       </div>

                       <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                           <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                           <p><b>Decision Support Dashboard</b>: A user-friendly dashboard will be developed to visualize the weather data in a comprehensible and actionable format. Plant operators, maintenance personnel, and management staff can access real-time updates, historical trends, and predictive analytics through this interface, enabling informed decision-making and proactive risk management.</p>
                           <p><b>Alert Mechanisms</b>: The system will incorporate automated alert mechanisms to notify stakeholders of impending weather-related threats or anomalies. Whether it's a sudden increase in precipitation, gusty winds, or a potential avalanche risk, timely alerts via email, SMS, and coordination among the plant's personnel and relevant authorities.</p>
                           </p>

                           
                       </div>
                   </div>
               </div>
           </section>
  
     <section className="bg-white dark:bg-gray-900">
           <div className="relative flex">
               <div className="min-h-screen lg:w-1/3"></div>
               <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

               <div className="container flex flex-col justify-center min-h-0 px-4 py-5 lg:absolute lg:inset-x-0">
                  

                   <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                    
                   <img className="object-cover pl-20 object-center lg:w-[10rem] w-full rounded-lg h-96" src={sir} alt="" />

                    
                       <div className="mt-8 lg:px-10 lg:mt-0">
                           

                           <p className="max-w-4xl mt-6 text-gray-500 dark:text-gray-400 text-justify">
                           He has accomplished academician with a Ph.D. in Information Technology from IIIT, Allahabad. With over 5 years of experience in academics, he has taught a wide range of subjects including Computer Networks, Operating Systems, and Data Structures. Neeraj has participated in numerous international and national conferences and has guided several undergraduate projects. His research interests lie in Wireless Sensor Networks, Manifold Learning, Machine Learning, Computer Networks, and Data Structures.
                           </p>

                           <h3 className="mt-6 text-lg font-medium text-blue-500">Neeraj Jain</h3>
                           <p className="text-gray-600 dark:text-gray-300">Assistant Professor (Senior Grade at JIIT)</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <section className="bg-white dark:bg-gray-900">
           <div className="container px-6 py-10 mx-auto">
               <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>

               <p className="max-w-2xl mx-auto my-6 text-justify text-gray-500 dark:text-gray-300">
               Our dedicated team ensures accurate and timely weather updates, utilizing cutting-edge technology and meticulous data analysis to deliver seamless experiences on our monitoring system websites.
               </p>

               <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                   <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                       <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image4} alt="" />
                       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Kanika Choudhary</h1>
                       
                       <div className="flex mt-3 -mx-2">
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               {/* Add Reddit SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                               {/* Add Facebook SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               {/* Add Github SVG icon here */}
                           </a>
                       </div>
                   </div>

                   <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                       <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image1} alt="" />
                       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Riya Arora</h1>
                       
                       <div className="flex mt-3 -mx-2">
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               {/* Add Reddit SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                               {/* Add Facebook SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               {/* Add Github SVG icon here */}
                           </a>
                       </div>
                   </div>

                   <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                       <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image3} alt="" />
                       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Khyati Dua</h1>
                       
                       <div className="flex mt-3 -mx-2">
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               {/* Add Reddit SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                               {/* Add Facebook SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               {/* Add Github SVG icon here */}
                           </a>
                       </div>
                   </div>

                   <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                       <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image2} alt="" />
                       <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Ishhita Dhiman</h1>
                       <div className="flex mt-3 -mx-2">
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                               {/* Add Reddit SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                               {/* Add Facebook SVG icon here */}
                           </a>
                           <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                               {/* Add Github SVG icon here */}
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </section>
     <div id="map-container">
       <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.086878713697!2d79.4922369255146!3d30.772140983727144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a78c4189cae8d3%3A0xd2b85cb32f97a40b!2sMana%2C%20Uttarakhand%20246422!5e0!3m2!1sen!2sin!4v1709050414330!5m2!1sen!2sin"
         width="80%"
         height="600px"
         style={{ border: "0" }}
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
       ></iframe>
     </div>
     <br />
   </>
 );
}

export default BooksPage;
