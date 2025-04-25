import Image from 'next/image';

export default function GridGenerator({grid, image}){
    // Convert specifications object to array of key-value pairs
    const specificationArray = Object.entries(grid).map(([key, value]) => ({
        title: key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        value: value
    }));

    const getResponsiveClass = (index) => {
        // Base classes for all screen sizes
        const baseClasses = 'col-span-1 md:col-span-3'; // Default for mobile and tablet

        // Large screen specific spans
        const lgSpans = {
            0: 'lg:col-span-4',
            1: 'lg:col-span-3',
            2: 'lg:col-span-3',
            3: 'lg:col-span-2',
            4: 'lg:col-span-2',
            5: 'lg:col-span-3',
            6: 'lg:col-span-4',
            7: 'lg:col-span-3',
            8: 'lg:col-span-2',
            9: 'lg:col-span-2',
            10: 'lg:col-span-3',
            default: 'lg:col-span-2'
        };

        const lgClass = lgSpans[index] || lgSpans.default;
        return `${baseClasses} ${lgClass}`;
    };

    return(
        <div className="w-[95%] md:w-[90%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-3 md:gap-4">
                <div className='col-span-2 md:col-span-3 lg:col-span-3 row-span-3 shadow-[-1px_-1px_3px_-1px_#9eb2ff85] bg-[#fbfaff] rounded-[10px]'>
                    <Image src={image} alt="Product Image" width={500} height={500}
                        className='w-full h-full object-contain'
                    />
                </div>
                {specificationArray.map((spec, index) => (
                    <div key={index} className={`bg-[#fbfaff] rounded-[10px] p-3 md:p-4 lg:p-6
                    flex flex-col justify-center
                    shadow-[-1px_-1px_3px_-1px_#9eb2ff85] ${getResponsiveClass(index)}`}>
                        <p className="text-sm md:text-base lg:text-lg text-[#5F5F5F] mb-1">{spec.title}</p>
                        <h2 className="text-sm md:text-base lg:text-lg font-medium">{spec.value}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
