import React, { useState, useEffect } from 'react';
import Nheader from '../components/Nheader.jsx';
import image12 from '../assets/images/image12.jpeg';

function AboutPage() {
   const pageTitle = "ABOUT AWMS";
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
       const script = document.createElement('script');
       script.src = "https://static.elfsight.com/platform/platform.js";
       script.async = true;
       script.dataset.useServiceCore = true;
       document.body.appendChild(script);

       return () => {
           document.body.removeChild(script);
       };
   }, []);

   return (
       <>
           <Nheader pageTitle={pageTitle} />
           <div>
           <header className="bg-center bg-fixed bg-no-repeat bg-cover relative" style={{ height: '50vh', backgroundImage: "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" }}>
 <div className="h-full bg-opacity-50 bg-black flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
   <div className="mx-2 text-center flex flex-row gap-12">
     <div>
       <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
         <span className="text-white">Automated</span>
       </h1>
       <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
         Weather <span className="text-white">Monitoring</span>  <span className="text-white">system</span>
       </h2>
     </div>
     <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
     <div class="elfsight-app-9bdd6787-4b85-47a7-a56c-178c6ad0cd51" data-elfsight-app-lazy></div>
   </div>
 </div>
</header>

               <section className="bg-white dark:bg-gray-900">
                   <div className="container px-6 py-10 mx-auto">
                       <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                           What is AWMS ?
                       </h1>

                       <div className="flex justify-center mx-auto mt-6">
                           <span className="inline-block w-40 h-1 bg-gray-500 rounded-full"></span>
                           <span className="inline-block w-3 h-1 mx-1 bg-gray-500 rounded-full"></span>
                           <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
                       </div>

                       <div className="flex items-start mx-auto mt-16">
                           <div>
                               <p className="flex items-center text-justify max-w-6xl text-gray-500 lg:mx-8">
                                   Automated weather monitoring systems are technological setups designed to automatically collect, process, and disseminate weather-related data. These systems employ various sensors, instruments, and communication technologies to gather real-time information about weather conditions such as temperature, humidity, air pressure, wind speed, and precipitation.
                               </p>
                           </div>
               
                       </div>
                   </div>
               </section>

               <header className="bg-white dark:bg-gray-900">
               <div className="container px-6 py-16 mx-auto">
    <div className="items-center lg:flex">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2 lg:mr-20">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">How is <span className="text-blue-500">IOT</span> used in <br /> Weather Monitoring?</h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-justify">IoT revolutionizes weather monitoring by deploying sensors and weather stations to collect real-time data on temperature, humidity, wind speed, and more, transmitting it wirelessly to centralized platforms for analysis. Integrated with machine learning algorithms and other data sources like satellite imagery, IoT systems provide accurate weather forecasts and early warnings of severe events. Scalable and flexible, these systems support decision-making in agriculture, transportation, disaster management, and beyond, enabling proactive measures to mitigate risks and optimize operations.</p>
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">More</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 lg:ml-20">
                <img className="w-full h-full lg:max-w-xl" src={image12} alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>
</div>

               </header>
           </div>
       </>
   );
}

export default AboutPage;


