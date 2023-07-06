import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Table = forwardRef(function Table({ className, ...props }, ref) {
  return (
    <div className="w-full overflow-x-auto">
      <table ref={ref} className={`${className} w-full min-w-[1100px] caption-bottom text-sm`} {...props} />
    </div>
  );
});

const TableHeader = forwardRef(function TableHeader({ className, ...props }, ref) {
  return <thead ref={ref} className={`${className} [&_tr]:border-b`} {...props} />
});

const TableBody = forwardRef(function TableBody({ className, ...props }, ref) {
  return <tbody ref={ref} className={`${className} [&_tr:last-child]:border-0 `} {...props} />
});

const TableRow = forwardRef(function TableRow({ className, ...props }, ref) {
  return <tr ref={ref} className={`${className} border-b transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50 w-full`} {...props} />
});

const TableHead = forwardRef(function TableHead({ className, ...props }, ref) {
  return <th ref={ref} className={`${className} h-12 px-4 text-left align-middle font-medium dark:text-white text-slate-800`} {...props} />
});

const TableCell = forwardRef(function TableCell({ className, ...props }, ref) {
  return <td ref={ref} className={`${className} p-4 align-middle [&:has([role=checkbox])]:pr-0 dark:text-white text-slate-800`} {...props} />
});

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
