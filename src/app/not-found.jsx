import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  text-black px-4">
      <div className="text-center space-y-6">
        <h1 className="text-[120px] font-extrabold text-cyan-500 leading-none">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Back To Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;