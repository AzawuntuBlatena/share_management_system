import Head from 'next/head';

import Layout from '../shareholder'

const ConfirmationPage = () => {
  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Confirmation Page</title>
      </Head>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Order Confirmed!
            </h2>
            <p className="mt-2 text-gray-600">
            You have successfully increased your shares! We appreciate your continued investment in our company. As a shareholder, you are an important part of our success. Thank you for your support and trust in our company.
            </p>
            <link href="/shareholder/buy" className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Continue Increasing
            </link>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ConfirmationPage;

