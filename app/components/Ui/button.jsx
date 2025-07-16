import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const buttonStyles = {
    blue: 'flex items-end gap-1 rounded-[10px] bg-purple text-white border border-purple w-fit',
    lightBlue: 'flex items-end gap-1 rounded-[10px] bg-[#13409C] text-white border border-[#13409C] w-fit',
    white: 'flex items-end gap-1 rounded-[10px] border-5 bg-white text-black border border-primary text-[#160959] w-fit',
    transparent: 'flex items-end gap-1 rounded-[10px] border-5 bg-transparent  border border-white  w-fit'
};

export default function Button({ 
    children, 
    className = '', 
    href = '#', 
    hasArrow = true || false, 
    variant = 'blue',
    ...props 
}) {
    return (
        <Link 
            href={href} 
            className={`${buttonStyles[variant]} py-2 px-5 ${className}`} 
            {...props}
        >
            {children}
            {hasArrow && <GoArrowUpRight className="text-[20px]" />}
        </Link>
    );
}