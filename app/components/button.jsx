import { GoArrowUpRight } from "react-icons/go";

export default function Button({ children, className, href, showIcon = true, variant = 'blue', ...props }) {
    const buttonStyles = {
        blue: 'flex items-end gap-1 bg-primary text-white ',
        white: 'flex items-end gap-1 bg-white text-blue-500 border border-primary  text-[#160959]'
    };

    const ButtonContent = () => (
        <>
            {children}
            {showIcon && <GoArrowUpRight className="text-[20px]"/>}
        </>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                <button className={`${buttonStyles[variant]} py-2 px-5 ${className}`} {...props}>
                    <ButtonContent />
                </button>
            </a>
        );
    }

    return (
        <button className={`${buttonStyles[variant]} py-2 px-5 ${className}`} {...props}>
            <ButtonContent />
        </button>
    );
}