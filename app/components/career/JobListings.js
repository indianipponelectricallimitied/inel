import Button from "../Ui/button";



export default function JobListings({jobListings}) {
    return (
        <section className="diamond-gradient clip-path btmright relative ">
            <div className="container mx-auto space-y-5 py-20 ">
                <h5 className="text-center">Job Listings</h5>
                <h1 className="text-white text-center">Explore Exciting Career Opportunities</h1>
                <div className="grid grid-cols-1  gap-6 py-10">
                    {jobListings.map((item, index)=>(
                        <div className="bg-white flex flex-col gap-3 md:flex-row  justify-between md:items-center p-5 rounded-[15px] " key={index}>
                            <p className="text-black font-medium text-xl md:w-5/12">{item.Role}</p>
                            <p className="md:w-3/12">{item.Place}</p>
                            <div className="flex items-center gap-3 md:w-2/6 justify-end">
                            <p className="w-2/5 border border-[#D4D4D4] rounded-[10px] px-2 py-2 text-center">{item.level}</p>
                            <Button variant="blue" href="/#" className="ms-auto md:ms-0">Apply Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <Button variant="white" href="/#" className="mx-auto border-0" hasArrow={false} >View More</Button>
            </div>
        </section>
    )
}
