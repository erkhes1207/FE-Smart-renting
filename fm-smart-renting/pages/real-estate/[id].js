import Layout from "../../components/Layout";

const RealEstateDetail = () => {
  return (
    <Layout>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='flex max-w-7xl w-full gap-5'>
          <section className='overflow-hidden text-gray-700 w-full'>
            <div className='mx-auto lg:px-32 w-full'>
              <div className='flex w-full'>
                <div className='flex flex-wrap w-1/2 h-full'>
                  <div className='w-1/2 p-1 md:p-2 h-44'>
                    <img
                      alt='gallery'
                      className='block object-cover object-center rounded-lg w-80 h-40'
                      src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=1200'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2 h-44'>
                    <img
                      alt='gallery'
                      className='block object-cover object-center rounded-lg w-80 h-40'
                      src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=1200'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2 h-44'>
                    <img
                      alt='gallery'
                      className='block object-cover object-center rounded-lg w-80 h-40'
                      src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=1200'
                    />
                  </div>
                  <div className='w-1/2 p-1 md:p-2 h-44'>
                    <img
                      alt='gallery'
                      className='block object-cover object-center rounded-lg w-80 h-40'
                      src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=1200'
                    />
                  </div>
                </div>
                <div className='w-1/2 p-2'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center rounded-lg w-full h-[335px]'
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=1200'
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default RealEstateDetail;
