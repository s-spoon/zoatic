import { Col, Divider, Row, Space } from 'antd';
import React, { useState } from 'react';
import { CaretUpOutlined } from '@ant-design/icons';
import { CaretDownOutlined } from '@ant-design/icons/lib/icons';
export default function Footer() {
  const [accordion, setAccordion] = useState({ about: true });
  const Horoscopes = () => {
    return (
      <Space size={6} direction='vertical' className='mt-2'>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Horoscopesss</p>
      </Space>
    );
  };
  const Gemstones = () => {
    return (
      <Space size={6} direction='vertical' className='mt-2'>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Gemstones</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Gemstones</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Gemstones</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Gemstones</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Gemstones</p>
      </Space>
    );
  };
  const ContactUs = () => {
    return (
      <Space size={6} direction='vertical' className='mt-2'>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>433 Broadway</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>
          New York, NY, US 10013
        </p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>
          mdiwfinfmdtefil@gmail.com
        </p>
      </Space>
    );
  };
  return (
    <div className='px-4 md:px-8 lg:px-32 xl:px-container mt-10'>
      <Row gutter={[16, 16]} justify={'space-between'} align='top'>
        <Col xs={24} sm={24} md={6} lg={6} className='text-center md:text-left'>
          <Space size={6} direction='vertical'>
            <p className='hidden md:block'>
              © Forte AI Inc 2023 all rights reserved
            </p>
          </Space>
        </Col>
        <div className='hidden sm:contents'>
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className='text-strok-divider pb-3 text-white'>Horoscopes</h4>
              <Horoscopes />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className='text-strok-divider pb-3 text-white'>Gemstones</h4>
              <Gemstones />
            </div>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <div>
              <h4 className='text-strok-divider pb-3 text-white'>Numerology</h4>
              <ContactUs />
            </div>
          </Col>
        </div>
        {/* Start Accordion */}
        <div className='contents sm:hidden'>
          <Col xs={24} className=''>
            <div
              onClick={() =>
                setAccordion((old) => ({
                  about: !(old?.about ?? false),
                }))
              }
              className='flex justify-between items-center'
            >
              <h4 className='text-strok-divider text-white'>About</h4>
              {accordion?.about ? (
                <CaretUpOutlined className='text-strok-divider text-xl' />
              ) : (
                <CaretDownOutlined className='text-strok-divider text-xl' />
              )}
            </div>
            {accordion?.about && <Horoscopes />}
          </Col>
          <Col xs={24}>
            <div
              onClick={() =>
                setAccordion((old) => ({
                  feature: !(old?.feature ?? false),
                }))
              }
              className='flex justify-between items-center'
            >
              <h4 className='text-strok-divider text-white'>Gemstones</h4>
              {accordion?.feature ? (
                <CaretUpOutlined className='text-strok-divider text-xl' />
              ) : (
                <CaretDownOutlined className='text-strok-divider text-xl' />
              )}
            </div>
            {accordion?.feature && <Gemstones />}
          </Col>
          <Col xs={24}>
            <div
              onClick={() =>
                setAccordion((old) => ({
                  contactUs: !(old?.contactUs ?? false),
                }))
              }
              className='flex justify-between items-center'
            >
              <h4 className='text-strok-divider text-white'>Numerology</h4>
              {accordion?.contactUs ? (
                <CaretUpOutlined className='text-strok-divider text-xl' />
              ) : (
                <CaretDownOutlined className='text-strok-divider text-xl' />
              )}
            </div>
            {accordion?.contactUs && <ContactUs />}
          </Col>
        </div>
      </Row>
      <Divider plain />
      <Space direction='horizontal' size={48} className='pb-12'>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Terms of use</p>
        <p className='hover:text-yellow-300 cursor-pointer text-gray-500'>Privacy policy</p>
      </Space>
    </div>
  );
}
