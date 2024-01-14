import { Card ,Badge} from "@/components";
const posts = [
  {
    title: "What is SaaS? Software as a Service Explained",
    details:
      "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people. Artificial Intelligence is reshaping the healthcare industry, enhancing diagnostics, treatment plans, and patient care experiences.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "Sarah Doe",
    tags: ["Development", "Frontend", "Design", "Photography"],
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    details:
      "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    image:
      "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "John Doe",
    tags: ["Development", "Frontend"],
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    details:
      "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "Sarah Doe",
    tags: ["Frontend", "Development"],
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    details:
      "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "John Doe",
    tags: ["Frontend", "Development", "CSS", "JS"],
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    details:
      "The powerful gravity waves resulting from the impact of the planets' moons á€” four in total á€” were finally resolved in 2015 when gravitational.",
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "Sarah Doe",
    tags: ["Backend"],
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    details:
      "The powerful gravity waves resulting from the impact of the planets' moons á€” four in total á€” were finally resolved in 2015 when gravitational.",
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    link: "/blog/test-slug",
    creator: "John Doe",
    tags: ["Backend"],
  },
  {
    title: "The Impact of AI in Healthcare: Revolutionizing Patient Care",
    details:
    "Artificial Intelligence is reshaping the healthcare industry, enhancing diagnostics, treatment plans, and patient care experiences. Artificial Intelligence is reshaping the healthcare industry, enhancing diagnostics, treatment plans, and patient care experiences.",
    image:
      "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 5 2022",
    link: "/blog/test-slug",
    creator: "Emma Smith",
    tags: ["Healthcare", "AI"],
  },
  {
    title: "Mastering Data Science: Essential Tools and Techniques",
    details:
      "Exploring the core tools and techniques needed to excel in the field of data science, including Python, R, machine learning, and more.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 6 2022",
    link: "/blog/test-slug",
    creator: "Michael Johnson",
    tags: ["Data Science", "Machine Learning"],
  },
  {
    title: "The Future of Work: Embracing Remote Collaboration Tools",
    details:
      "As remote work becomes more prevalent, discovering and adopting effective collaboration tools has become essential for businesses worldwide.",
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 7 2022",
    link: "/blog/test-slug",
    creator: "Olivia Garcia",
    tags: ["Collaboration", "Remote Work"],
  },
  {
    title: "Exploring the Blockchain: Technology Beyond Cryptocurrency",
    details:
      "Diving into the world of blockchain technology and its diverse applications, from finance and healthcare to supply chain and beyond.",
    image:
      "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 8 2022",
    link: "/blog/test-slug",
    creator: "Daniel Brown",
    tags: ["Blockchain", "Technology"],
  },
  {
    title: "The Power of UX Design: Creating Seamless User Experiences",
    details:
      "Understanding the importance of UX design in crafting intuitive interfaces and delightful experiences for users across digital platforms.",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 9 2022",
    link: "/blog/test-slug",
    creator: "Sophia Lee",
    tags: ["UX Design", "User Experience"],
  },
  {
    title: "Cybersecurity Essentials: Safeguarding Against Online Threats",
    details:
      "Navigating the crucial elements of cybersecurity and best practices to protect individuals and businesses from cyber threats.",
    image:
      "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 10 2022",
    link: "/blog/test-slug",
    creator: "William Clark",
    tags: ["Cybersecurity", "Threats"],
  },
];
const BlogApp: React.FC = () => {


  return (
    <section className="w-full px-4 py-10 mx-auto max-w-7xl md:w-4/5">
      <h1 className="mb-10 text-green-600 text-3xl font-semibold uppercase text-center">
        Blogs
      </h1>
      <Card 
        {...posts[0]} 
        theme="secondary"
        htmlTag="link" />
      <h2 className="capitalize mb-6 text-2xl font-semibold leading-[1.2] text-dark dark:text-white">
        more blogs
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {posts.slice(1).map((post) => {
          return (
            <Card
              {...post}
              key={post.title}
              htmlTag="link"
              theme="tertiary"
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogApp;
