import { Card, Badge } from "@/components";
import {posts,contentMetaData} from '@/lib/constants'
import { Metadata } from "next";

export const metadata: Metadata = contentMetaData.blogs
const BlogApp: React.FC = () => {
  return (
    <section className="w-full  mx-auto max-w-7xl md:w-4/5">
      <h1 className="text-center text-xl pt-10 pb-5">
        <span className="text-green-600 text-3xl font-semibold uppercase block">
          Blogs
        </span>
        Explore the latest and greatest
      </h1>
      <Card {...posts[0]} theme="secondary" htmlTag="link" />
      <h2 className="capitalize mb-6 text-2xl font-semibold leading-[1.2] text-dark dark:text-white">
        more blogs
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts.slice(1).map((post) => <Card {...post} key={post.title} htmlTag="link" theme="tertiary" />)}
      </div>
    </section>
  );
};

export default BlogApp;
