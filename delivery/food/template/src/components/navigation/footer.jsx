const Footer = () => {
  return (
    <footer className="w-full max-w-full px-6 mt-10 mx-auto flex items-center justify-center flex-wrap text-sm leading-normal text-center text-slate-500 lg:text-left border-t border-zinc-200 dark:border-slate-800">
      <div className="mx-auto py-10">
        &copy; {new Date().getFullYear() + ","} Loja. Todos os direitos resevados. Feito com&nbsp;<i className="fa fa-heart text-red-500"></i>&nbsp;por&nbsp;
        <a href="/" className="font-semibold text-slate-700 dark:text-white dark:border-white border-b border-zinc-600 pb-1" target="_blank">Dudu</a>
      </div>
    </footer>
  )
};

export default Footer;
