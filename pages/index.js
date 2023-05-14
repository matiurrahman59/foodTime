import NavBar from '@/components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=' bg-green/10'>
        {/* Banner Section */}
        <section className='container mx-auto py-6 lg:py-24'>
          <div className='flex flex-col lg:flex-row items-center justify-center'>
            <div className='space-y-7 order-2 lg:order-none relative px-3 lg:px-0'>
              <div className='absolute -top-64 -left-24 hidden lg:block'>
                <Image
                  src='/leaf1.png'
                  height={288}
                  width={288}
                  alt='Leaf image 1'
                />
              </div>

              <h1 className='font-merienda text-center lg:text-start font-bold text-5xl leading-[50px] lg:text-[60px] lg:leading-[74px] 2xl:text-[65px] text-primaryColor 2xl:leading-[84px]'>
                Order food online&nbsp;
                <br className='hidden lg:block' />
                from your favourite
                <br />
                local restaurants
                <span className='text-secondaryColor'>.</span>
              </h1>
              <p className='text-gray text-xl lg:text-xl lg:leading-6 2xl:text-2xl font-semibold 2xl:leading-8'>
                Freshly made food delivered to your door.
              </p>
              <div>
                <form>
                  <div className='flex items-center relative w-full'>
                    <input
                      type='text'
                      placeholder='Enter your location'
                      className='py-2 lg:py-4 rounded-full border-none outline-none ring-1 ring-primaryColor pl-11 lg:pl-16 placeholder:text-light2 w-full text-base text-black/50 '
                    />

                    <span className='absolute left-2 h-8 w-8 lg:h-[48px] lg:w-[48px] bg-secondaryColor rounded-full'></span>

                    <button
                      type='submit'
                      className='btn flex gap-1 lg:gap-2 absolute right-0 text-sm lg:text-base items-center  h-full px-3 lg:px-[50px] '
                    >
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                          />
                        </svg>
                      </span>
                      <span>Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Right content */}
            <div className='relative order-1 grid place-content-center'>
              <Image
                src='/food.png'
                width={530}
                height={530}
                alt='Food recipe'
                className='h-auto w-[300px] lg:w-[480px] 2xl:w-[530px] 2xl:h-[530px]'
              />

              {/* Total delivery */}
              <div className='gradient absolute top-0 z-10 rounded-lg backdrop-blur-sm'>
                <div className='py-2 px-5 lg:py-[18px] lg:px-[35px]'>
                  <div className='flex gap-3 items-center'>
                    <Image src='/ok.png' height={40} width={40} alt='marker' />
                    <div className='font-bold text-2xl lg:text-[40px] lg:leading-[52px] text-secondaryColor'>
                      200k+
                    </div>
                  </div>
                  <span className='font-semibold text-base lg:text-xl text-[#838383] leading-[27px] text-center'>
                    People delivered
                  </span>
                </div>
              </div>

              {/* Blur Image */}
              <div className='absolute -top-32 -right-8 md:-right-16 lg:-top-44 lg:-right-6 -z-10'>
                <Image
                  src='/leaf1.png'
                  height={288}
                  width={288}
                  alt='Leaf image 1'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explore section */}
        <section className='bg-secondaryColor/5 px-3 lg:px-5 2xl:px-0'>
          <div className='container mx-auto space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 pt-[62px] pb-[37px] items-center'>
            {/* Left content */}
            <div>
              <h3 className='font-bold lg:text-[50px] text-4xl leading-[45px]  lg:leading-[65px] text-primaryColor'>
                Explore your
                <br />
                favourite city's food.
              </h3>
              <p className='lg:text-[18px] text-base leading-5 lg:leading-7 text-gray pt-[10px]'>
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                <br />
                nibh tristique. Non ligula tristique ut ut libero sit convallis
                <br />
                maecenas. At egestas auctor porta mattis.
              </p>
              {/* <div className='mt-[14px] text-white bg-primaryColor block'> */}
              <button className='btn mt-[14px] py-3 px-11 lg:py-[15px] lg:px-[60px] text-lg lg:text-[22px] bg-primaryColor flex items-center gap-4'>
                <span>Explore</span>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    />
                  </svg>
                </div>
              </button>
              {/* </div> */}
            </div>
            {/* Right content */}
            <div className='relative'>
              <div className='grid place-content-center'>
                <Image
                  src='/bgOne.png'
                  width={750}
                  height={500}
                  alt='Bg'
                  className='w-[90vw] 2xl:w-[750px]'
                />
              </div>

              {/* Delivery boy image */}
              <Image
                src='/deliveryBoy.png'
                width={456}
                height={437}
                alt='Delivery Boy'
                className='absolute left-1/2 -translate-x-1/2 
                // lg:animate-goToRight duration-1000 infinite ease-linear  
                // lg:-left-36
                top-1/2 mt-5 -translate-y-1/2 
                '
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
