import Image from 'next/image'
import { ContactAction, Hero, Services,LatestBlog,LatestProject,Feedbacks} from '@/sections'

export default function Home() {
  return (
    <main >
      <Hero/>
      <Services/>
      <Feedbacks/>
      <ContactAction/>
      <LatestBlog/>
      <LatestProject/>
    </main>
  )
}
