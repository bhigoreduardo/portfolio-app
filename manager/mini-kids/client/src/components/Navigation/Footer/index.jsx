const Footer = () => {
  return (
    <footer className="w-full max-w-full px-6 mt-10 mx-auto flex items-center justify-center flex-wrap text-sm leading-normal text-center text-slate-500 lg:text-left">
      Copyright © {new Date().getFullYear() + ","} feito com&nbsp;<i className="fa fa-heart text-red-500"></i>&nbsp;por&nbsp;
      <a href="/" className="font-semibold text-slate-700 dark:text-white dark:border-white border-b border-zinc-600 pb-1" target="_blank">Dudu</a>
    </footer>
  );
};

export default Footer;
