import React from 'react';
import Layout from '../Layout';
import { Carousel } from 'antd';

import HomeHandImg from '../../assets/imgs/hand.png';
import HomeHandBackImg from '../../assets/imgs/hand_bg.png';
import About1Img from '../../assets/imgs/about1.jpg';
import './home.css';

function Home() {
  return (
    <>
      <Layout>
        <section className='main px-4 md:px-8 lg:px-32 h-full md:h-screen pt-32 lg:pt-48'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
            <div className='md:col-span-3'>
              <Carousel>
                <div className='h-96 py-8'>
                  <h5
                    data-aos='fade-right'
                    className='text-xl md:text-2xl lg:text-3xl text-yellow-300'
                  >
                    Trust our experience
                  </h5>
                  <h1
                    data-aos='fade-left'
                    className='text-6xl leading-tight font-bold'
                  >
                    Start control of your <br /> professional destiny
                  </h1>
                  <p
                    data-aos='zoom-in'
                    className='pb-10 pt-4 leading-6 text-base'
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.
                  </p>
                  <a
                    href='#'
                    className='mt-10 px-6 py-4 rounded-3xl bg-yellow-300 hover:bg-yellow-400 cursor-pointer'
                  >
                    Appointment
                  </a>
                </div>
                <div className='h-96 py-8'>
                  <h5 className='text-xl md:text-2xl lg:text-3xl text-yellow-300'>
                    What is your sign?
                  </h5>
                  <h1 className='text-6xl leading-tight font-bold'>
                    Read your daily <br /> Horoscope Today
                  </h1>
                  <p className='pb-10 pt-4 leading-6 text-base'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.
                  </p>
                  <a
                    href='#'
                    className='mt-10 px-6 py-4 rounded-3xl bg-yellow-300 hover:bg-yellow-400 cursor-pointer'
                  >
                    Appointment
                  </a>
                </div>
              </Carousel>
            </div>
            <div
              className='md:col-span-2'
              data-aos='zoom-in'
              data-aos-duration='2000'
            >
              <div className='relative w-10/12'>
                <img
                  className='rotate m-auto w-5/6'
                  src={HomeHandBackImg}
                  alt='hand-bg'
                />
                <img
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12'
                  src={HomeHandImg}
                  alt='hand'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='px-4 md:px-8  lg:px-32 h-full md:h-screen py-14'>
          <div className='grid grid-cols-1 md:grid-cols-8 gap-4'>
            <div className='col-span-2'>
              <div
                data-aos='fade-right'
                className='flex items-center justify-start pt-1'
              >
                <div className='bg-yellow-300 h-1 w-10 rounded-xl'></div>
                <p className='text-2xl text-white pl-6'>About Astrology</p>
              </div>
            </div>
            <div className='col-span-6'>
              <h2
                data-aos='fade-left'
                className='text-3xl text-white leading-tight font-semibold'
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </h2>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-8 gap-4 pt-8'>
            <div
              className='col-span-4 pt-8'
              data-aos='flip-left'
              data-aos-easing='ease-out-cubic'
              data-aos-duration='2000'
            >
              <img
                src={About1Img}
                alt='about1'
                className='m-auto md:ml-0 w-5/6 md:w-4/6 rounded-2xl'
              />
            </div>
            <div className='col-span-4'>
              <h2
                data-aos='fade-left'
                className='text-4xl text-white leading-tight font-semibold pt-6 lg:pt-28'
              >
                What do we do?
              </h2>
              <p
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration='3000'
                className='text-lg text-white mt-8 leading-8 border-l-2 border-yellow-300 pl-6 mb-12'
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium.
              </p>
              <a
                href='#'
                className='px-6 py-4 rounded-3xl bg-yellow-300 hover:bg-yellow-400 cursor-pointer'
              >
                Read More
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
