import Image from 'next/image'
import { ContactAction, ExperienceAndEducation, Hero, Services,LatestBlog,LatestProject,Feedbacks} from '@/sections'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Services/>
      <Feedbacks/>
      <ContactAction/>
      <ExperienceAndEducation/>
      <LatestBlog/>
      <LatestProject/>
    </main>
  )
}
