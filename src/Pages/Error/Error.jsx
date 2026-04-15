import React from 'react';
import { useNavigate } from 'react-router'; 

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
     
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary opacity-20 select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-base-content">
            Oops!
          </p>
        </div>

       
        <div className="mt-8">
          <h2 className="text-2xl font-semibold md:text-3xl mb-4">
            Ei page-ti khuje paowa jayni
          </h2>
          <p className="text-base-content/70 mb-8">
            Apni hoyto vul kono link e click korechen othoba page-ti remove kora hoyeche. 
            Nicher button-e click kore abar thik rasta khuje nin!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/')} 
              className="btn btn-primary px-8"
            >
              Back to Home
            </button>
            
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-outline btn-secondary"
            >
              Try Again
            </button>
          </div>
        </div>

        <div className="mt-12 opacity-50">
          <div className="badge badge-ghost gap-2 italic">
            Error Code: PAGE_NOT_FOUND
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;