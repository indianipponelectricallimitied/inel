import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const buttonStyles = {
    blue: 'flex items-end gap-1 rounded-[10px] bg-primary text-white border border-primary w-fit',
    white: 'flex items-end gap-1 rounded-[10px] border-5 bg-white text-primary border border-primary text-[#160959] w-fit',
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