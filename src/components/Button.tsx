import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button({ children, type = "button", ...props }: ButtonProps) {
    return (
        <button type={type} {...props} className="bg-amber-500 px-10 py-2 rounded-full shadow shadow-slate-500 text-white hover:bg-amber-400 transition-colors cursor-pointer">
            {children}
        </button>
    )
}

export default Button