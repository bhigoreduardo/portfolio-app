import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

/* eslint-disable react/prop-types */
const Button = forwardRef(function Button({ type, children, className, asChild = false, ...props }, ref) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp ref={ref} type={type} {...props} className={`px-8 py-2 inline-flex items-center justify-center font-bold leading-normal text-xs border-2 border-transparent rounded-md shadow-md transition-all ease-in cursor-pointer hover:shadow-lg disabled:opacity-40 active:opacity-85 ${className}`}>
      {children}
    </Comp>
  )
})

export default Button