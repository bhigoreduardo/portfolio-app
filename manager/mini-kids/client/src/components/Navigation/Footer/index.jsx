const Footer = () => {
  return (
    <footer className="pt-4">
      <div className="w-full px-6 mx-auto">
        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
          <div className="w-full max-w-full px-3 py-6 mt-0 mb-6 shrink-0 lg:mb-0">
            <div className="w-full max-w-full flex items-center justify-center text-sm leading-normal text-center text-slate-500 lg:text-left">
              Copyright © {new Date().getFullYear() + ","} feito com&nbsp;<i className="fa fa-heart text-red-500"></i>&nbsp;por&nbsp;
              <a href="/" className="font-semibold text-slate-700 dark:text-white dark:border-white border-b border-zinc-600 pb-1" target="_blank">Dudu</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
