import ApiService from "@/app/services/api";
import NewsCard from "@/app/components/Newsroom/news-card";
import BreadCrumb from "../components/Ui/bread-crumb"


export default async function Newsroom() {
    // Fetch posts data
    const posts = await ApiService.getPosts();
    
    return (
        <>

            <BreadCrumb 
                pageTitle= "Newsroom"
                breadCrumbBg= "/images/newsroom/Newsroombanner.webp"
            />

            <div className="container mx-auto py-20">
                {/* News Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {posts && posts.map((post) => (
                        <NewsCard key={post.id} post={post} />
                    ))}
                    
                    {(!posts || posts.length === 0) && (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500">No blog posts available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
