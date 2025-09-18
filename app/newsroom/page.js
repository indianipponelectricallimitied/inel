import ApiService from "@/app/services/api";
import NewsCard from "@/app/components/Newsroom/news-card";
import BreadCrumb from "../components/Ui/bread-crumb"

export const metadata = {
    title: "Newsroom - Latest News & Updates | India Nippon Electricals",
    description: "Stay updated with the latest news, announcements, and developments from India Nippon Electricals. Explore our corporate updates, industry insights, and company achievements.",
    keywords: "newsroom, corporate news, company updates, announcements, press releases, industry news, INEL news", // Note: Google ignores keywords meta tag
    openGraph: {
        title: "Newsroom - Latest News & Updates | India Nippon Electricals",
        description: "Stay updated with the latest news, announcements, and developments from India Nippon Electricals. Explore our corporate updates, industry insights, and company achievements.",
        url: "https://indianippon.com/newsroom",
        siteName: "India Nippon Electricals",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Newsroom - Latest News & Updates | India Nippon Electricals",
        description: "Stay updated with the latest news, announcements, and developments from India Nippon Electricals. Explore our corporate updates, industry insights, and company achievements.",
    },
    alternates: {
        canonical: "https://indianippon.com/newsroom",
    },
};


export default async function Newsroom() {
    // Fetch posts data
    const posts = await ApiService.getPosts();
    
    const collectionPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Newsroom",
        "description": "Latest news, announcements, and developments from India Nippon Electricals including corporate updates, industry insights, and company achievements.",
        "url": "https://indianippon.com/newsroom",
        "mainEntity": {
            "@type": "Organization",
            "name": "India Nippon Electricals Limited"
        },
        "hasPart": posts?.map(post => ({
            "@type": "NewsArticle",
            "headline": post.title,
            "description": post.intro || post.title,
            "url": `https://indianippon.com/newsroom/${post.slug}`,
            "datePublished": post.date_added,
            "author": {
                "@type": "Organization",
                "name": "India Nippon Electricals Limited"
            }
        })) || []
    };
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageJsonLd),
                }}
            />

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
