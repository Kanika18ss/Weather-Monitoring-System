import React from 'react';
import mana1 from '../assets/images/mana1.jpeg';
import mana2 from '../assets/images/mana2.jpeg';
import mana3 from '../assets/images/mana3.jpeg';
import mana4 from '../assets/images/mana4.jpeg';
import mana5 from '../assets/images/mana5.jpeg';

const ImageGrid = () => {
  return (
    <div>
      <div className="container my-12 mx-auto px-4 md:px-12 ">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden  bg-blue rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={mana1} style={{ height: "50vh" }} />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                  MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>

              </footer> */}

            </article>

          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={mana4} style={{ height: "50vh" }}/>
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
              
              </footer> */}

            </article>

          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={mana3} style={{ height: "50vh" }}/>
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                  MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                
              </footer> */}

            </article>

          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

            <a href="#">
               <img alt="Placeholder" className="block h-auto w-full" src={mana2} style={{ height: "50vh" }} />
            </a>


              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                  MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                
              </footer> */}

            </article>

          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src={mana5} style={{ height: "50vh" }}/>
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                  MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                
              </footer> */}

            </article>

          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="https://1.bp.blogspot.com/-OU_6dcqVMLk/VqDnXZN9sjI/AAAAAAAAM6o/HjhWoMrmTdc/s1600/Mana_VyasGufa.JPG" style={{ height: "50vh" }}/>
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                  MANA VIEW
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              {/* <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                
              </footer> */}

            </article>

          </div>
          {/* Other columns and articles go here */}

        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
