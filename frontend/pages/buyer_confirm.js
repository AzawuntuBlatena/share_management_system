
import Heator from '@/components/Landing_page/Heator';
import Head from 'next/head';


const ConfirmationPage = () => {
  return (
    <Heator>
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Confirmation Page</title>
      </Head>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 14l3-3 6 6M4 14h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Congratulations,!
            </h2>
            <p className="mt-2 text-gray-600">
            Your purchase was successful! Thank you for your business. We have received your payment and your order is being processed. You will receive a confirmation email shortly after that you can login in to your account. If you have any questions or concerns, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Heator>
  );
};

export default ConfirmationPage;