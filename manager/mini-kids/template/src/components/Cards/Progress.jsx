const Progress = () => {
  return (
    <>
      <div className="w-full mb-5">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress blue</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-blue-500 to-violet-500 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full mb-5">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress slate</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-slate-600 to-slate-300 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full mb-5">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress cyan</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-blue-700 to-cyan-500 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full mb-5">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress emerald</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-emerald-500 to-teal-400 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full mb-5">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress red</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-red-600 to-orange-600 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <div className="flex mb-2">
          <span className="mr-2 font-semibold leading-normal capitalize text-sm">progress orange</span>
          <span className="ml-auto font-semibold leading-normal text-sm">80%</span>
        </div>
        <div>
          <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
            <div className="bg-gradient-to-tl from-orange-500 to-yellow-500 w-4/5 transition-width duration-600 ease rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
