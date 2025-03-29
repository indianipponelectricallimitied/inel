import FeaturedArticles from "./Featured-Articles";
import BlogSlide from "./blog-slide";

export default function Newsroom(){
    return(
        <>
            <div className="container mx-auto py-20 px-5">
                <h5>Newsroom</h5>
                <h1>Innovation in Motion</h1>
                <p className="py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                <div className="flex gap-12 flex-col md:flex-row">
                    <div className="w-full md:w-[55%]">
                    <BlogSlide />
                    </div>
                    <div className="w-full md:w-[45%]">
                        <FeaturedArticles />
                    </div>
                </div>
            </div>
        </>
    )
}
