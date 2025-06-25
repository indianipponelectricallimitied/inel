import FeaturedArticles from "./Featured-Articles";
import BlogSlide from "./blog-slide";

export default function Newsroom(){
    return(
        <>
            <div className="container mx-auto py-20 ">
                <h5>Newsroom</h5>
                <h1>Innovation in Motion</h1>
                <p className="py-5">INEL has been featured in leading media for its trusted legacy, innovation, and quality.</p>

                <div className="flex gap-12 flex-col lg:flex-row">
                    <div className="w-full lg:w-[55%]">
                        <BlogSlide sildeperview={2} />
                    </div>
                    <div className="w-full lg:w-[45%]">
                        <FeaturedArticles />
                    </div>
                </div>
            </div>
        </>
    )
}
