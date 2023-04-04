import { CloseOutlined } from '@ant-design/icons';
export default function FullMenu({ isTrue = false, onIsTrue = () => {} }) {
  return (
    <>
      {isTrue ? (
        <div className='h-full w-full fixed z-30 bg-back p-4'>
          <div className='float-right'>
            <CloseOutlined
              onClick={() => onIsTrue(false)}
              className='text-2xl'
            />
          </div>
          <div className='text-center'>
            <p className='pt-4 pb-4 pl-8 hover:text-yellow-300 cursor-pointer'>
              Features
            </p>
            <p className='pt-4 pb-4 pl-4 hover:text-yellow-300 cursor-pointer'>
              Pricing
            </p>
            <p className='pt-4 pb-4 pl-4 hover:text-yellow-300 cursor-pointer'>
              Case Study
            </p>
            <p className='pt-4 pb-4 pl-4 hover:text-yellow-300 cursor-pointer'>
              About us
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
