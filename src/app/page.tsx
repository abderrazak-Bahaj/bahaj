import Image from 'next/image'
import { ContactAction, Hero, Services,LatestBlog,LatestProject,Feedbacks} from '@/sections'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Feedbacks/>
      <Services/>
      <ContactAction/>
      <LatestBlog/>
      <LatestProject/>
    </main>
  )
}
