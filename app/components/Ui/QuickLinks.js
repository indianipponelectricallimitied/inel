import { GoArrowUpRight } from "react-icons/go";

export default function QuickLinks({quickLinks}) {
    return (
        <>
            <ul className="space-y-5 md:w-8/12 pt-10">
                {quickLinks.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-thin flex justify-between border-b border-black pb-2">
                        {link.title}
                        <GoArrowUpRight className="text-[20px]" />
                    </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
