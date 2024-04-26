import React from 'react';
import Nheader from '../components/Nheader.jsx';
import image11 from '../assets/images/i11.jpeg';
import image13 from '../assets/images/i13.jpeg';
import image14 from '../assets/images/i21.jpeg';
import image15 from '../assets/images/i15.jpeg';
import image16 from '../assets/images/i16.jpeg';
import image17 from '../assets/images/i17.jpeg';
import image18 from '../assets/images/i18.jpeg';
import image19 from '../assets/images/i19.jpeg';
import image20 from '../assets/images/i20.jpeg';

function JpulPage() {
  return (
    <>
      <Nheader />
      <div className="bg-gray-50 flex items-center">
        <section className="relative bg-cover bg-center py-32 w-full" style={{ backgroundImage: `url('https://www.eqimg.com/images/2023/11062023-image4-thumb-equitymaster.jpg')` }}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto text-left text-white relative z-10">
            <div className="flex">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6">Jaiprakash Power Ventures Limited</h1>
                <p className="text-xl mb-12">- An Indian power company, incorporated on Dec 21, 1994, that is part of India s leading Infrastructure conglomerate Jaypee Group.</p>
                <a href="https://www.jppowerventures.com/#" target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-black py-4 px-12 rounded-full hover:bg-blue-600">Visit</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <br></br>
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            <span className="text-black-500 text-4xl">Vision and Mission</span>
          </h1>
          <p className="max-w-6xl mx-auto mt-6 text-justify text-gray-500 dark:text-gray-300">
            Jaypee Group is a diversified infrastructure conglomerate in India with interests in Civil Engineering and Construction, Cement, Power, Real Estate & Expressways, Hospitality, Fertilizer, Health Care, Sports, and Education (not-for-profit). As a Group, able to manage multiple aspects of power projects, from front-end engineering design to completion, operation, and maintenance.
          </p>

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                To be the most efficient Power company of the country with optimum utilization of resources, to provide power to all, while bringing reward to all its stakeholders continuously.
              </p>
              <br></br>

              <div className="flex items-center mt-6">
                <img className="object-cover rounded-full w-14 h-14" src="https://www.eqimg.com/images/2023/11062023-image4-thumb-equitymaster.jpg" alt="" />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">VISION</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300"></span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
              <p className="leading-loose text-gray-500 dark:text-gray-300 text-justify">
                   To develop & operate technically sound projects in cost-effective manner.
                   Expand our installed capacity to develop a superior portfolio of assets.
                   To play a significant role in the growth of the Indian power sector.
                   Maintain a high level of social responsibility in the communities in which we operate.
                
              </p>

              <div className="flex items-center mt-6">
                <img className="object-cover rounded-full w-14 h-14" src="https://www.eqimg.com/images/2023/11062023-image4-thumb-equitymaster.jpg" alt="" />
                <div className="mx-4">
                  <h1 className="font-semibold text-blue-500">MISSION</h1>
                  <span className="text-sm text-gray-500 dark:text-gray-300"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <br></br>
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            <span className="text-blue-500 text-4xl">Group Companies</span>
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
          </div>
        </div>
      </section>

      <div className="carousel carousel-center rounded-box" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="carousel-item">
          <img src={image11} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image14} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image13} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image15} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image16} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image17} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image18} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image19} alt="Pizza" />
        </div>
        <div className="carousel-item">
          <img src={image20} alt="Pizza" />
        </div>
      </div>
    </>
  )
}

export default JpulPage;
