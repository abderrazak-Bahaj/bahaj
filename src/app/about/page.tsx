import { ContactAction, ExperienceAndEducation, AboutMe,Technologies } from "@/sections";
const BlogApp: React.FC = () => {

  return (
    <div className="">
      <h1 className="pt-10 text-center text-xl dark:bg-gray-900">
      <span className="text-green-600 text-3xl font-semibold uppercase block">
      Innovative Full Stack Developer
      </span>
      Bringing Ideas to Life in Pixels and Code
      </h1>
      <AboutMe/>
      <ExperienceAndEducation />
      <ContactAction />
      <Technologies/>
    </div>
  );
};

export default BlogApp;
