/* eslint-disable react/prop-types */
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { forwardRef } from "react";

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = ({ className, children, ...props }) => (
  <DialogPrimitive.Portal className={className} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);

const DialogOverlay = forwardRef(function DialogOverlay({ className, ...props }, ref) {
  return (
    <DialogPrimitive.Overlay ref={ref} className={`${className} fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100`} {...props} />
  )
});


const DialogContent = forwardRef(function DialogContent({ className, children, ...props }, ref) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} className={`${className} fixed top-1/2 -translate-y-1/2 backdrop-blur-md bg-white z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in sm:max-w-lg sm:rounded-lg sm:zoom-in-90`} {...props} >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <i className="fas fa-times h-4 w-4"></i>
          <span className="sr-only">Fechar</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
});

const DialogHeader = ({ className, ...props }) => (
  <div className={`${className} flex flex-col space-y-1.5 text-center sm:text-left`} {...props} />
);

const DialogFooter = ({ className, ...props }) => (
  <div className={`${className} flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2`} {...props} />
);

const DialogTitle = forwardRef(function DialogTitle({ className, ...props }, ref) {
  return <DialogPrimitive.Title ref={ref} className={`${className} text-lg font-semibold leading-none tracking-tight text-slate-900`} {...props} />
});

const DialogDescription = forwardRef(function DialogDescription({ className, ...props }, ref) {
  return <DialogPrimitive.Description ref={ref} className={`${className} text-sm text-slate-900`} {...props} />
});

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
