import NavBar from '@/components/NavBar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=' bg-green/10'>
        {/* Banner Section */}
        <section className='container mx-auto grid grid-cols-5 items-center py-24'>
          {/* Left Content */}
          <div className='space-y-7 col-span-3 relative'>
            {/* Blur leaf Image */}
            <div className='absolute -top-64 -left-24'>
              <Image
                src='/leaf1.png'
                height={288}
                width={288}
                alt='Leaf image 1'
              />
            </div>

            <h1 className='font-merienda font-bold text-[65px] text-primaryColor leading-[84px]'>
              Order food online from your favourite local restaurants
              <span className='text-secondaryColor'>.</span>
            </h1>
            <p className='text-gray text-2xl font-semibold leading-8'>
              Freshly made food delivered to your door.
            </p>
            <div>
              <form>
                <div className='flex items-center relative'>
                  <input
                    type='text'
                    placeholder='Enter your location'
                    className='py-4 rounded-full border-none outline-none ring-1 ring-primaryColor pl-16 placeholder:text-light2 w-full text-base text-black/50 '
                  />

                  <span className='absolute left-2 h-[48px] w-[48px] bg-secondaryColor rounded-full'></span>

                  <button
                    type='submit'
                    className='btn flex gap-2 absolute right-0  items-center  h-full px-[50px] '
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
          <div className='col-span-2 relative'>
            <Image src='/food.png' width={530} height={530} alt='Food recipe' />

            {/* Total delivery */}
            <div className='gradient absolute top-0 z-10 rounded-lg backdrop-blur-sm'>
              <div className='py-[18px] px-[35px]'>
                <div className='flex gap-3 items-center'>
                  <Image src='/ok.png' height={40} width={40} alt='marker' />
                  <div className='font-bold text-[40px] leading-[52px] text-secondaryColor'>
                    200k+
                  </div>
                </div>
                <span className='font-semibold text-xl text-[#838383] leading-[27px] text-center'>
                  People delivered
                </span>
              </div>
            </div>

            {/* Blur Image */}
            <div className='absolute -top-44 -right-6 -z-10'>
              <Image
                src='/leaf1.png'
                height={288}
                width={288}
                alt='Leaf image 1'
              />
            </div>
          </div>
        </section>

        {/* Explore section */}
        <section className='bg-secondaryColor/5'>
          <div className='container mx-auto grid grid-cols-2 pt-[62px] pb-[37px]'>
            {/* Left content */}
            <div>
              <h3 className='font-bold text-[50px] leading-[65px] text-primaryColor'>
                Explore your favourite city’s food.
              </h3>
              <p className='text-[18px] leading-7 text-gray pt-[10px]'>
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
                tristique. Non ligula tristique ut ut libero sit convallis
                maecenas. At egestas auctor porta mattis.
              </p>
              {/* <div className='mt-[14px] text-white bg-primaryColor block'> */}
              <button className='btn mt-[14px]  py-[15px] px-[60px]  bg-primaryColor flex items-center gap-4'>
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
              <Image src='/bgOne.png' width={750} height={500} alt='Bg' />

              {/* Delivery boy image */}
              {/* <Image
                src='/deliveryBoy.png'
                width={456}
                height={437}
                alt='Delivery Boy'
                className='absolute animate-goToRight duration-1000 infinite ease-linear  top-1/2 mt-5 -translate-y-1/2  left-1/2 -translate-x-1/2'
              /> */}
              <Image
                src='/deliveryBoy.png'
                width={456}
                height={437}
                alt='Delivery Boy'
                className='absolute animate-goToRight duration-1000 infinite ease-linear  top-1/2 mt-5 -translate-y-1/2 -left-36'
              />
              {/* <Image
                src='/deliveryBoy.png'
                width={456}
                height={437}
                alt='Delivery Boy'
                className='absolute animate-goToRight duration-1000 infinite ease-linear left-0  top-1/2 -translate-y-1/2'
              /> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
