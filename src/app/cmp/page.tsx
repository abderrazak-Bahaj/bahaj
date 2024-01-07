import Image from 'next/image'
import { Alert,Blockquote,Breadcrumb,ButtonInput,Card,Checkbox,TextInput,Link,Radio,Select,Textarea,Timeline} from '@/components'
import { Banner, ContactAction, Gallery } from '@/sections'

export default function Cmp() {
  return (
    <div >
      <ButtonInput/>
      <Breadcrumb/>
      <Card/>
      <Checkbox/>
      <TextInput/>
      <Link/>
      <Radio/>
      <Select/>
      <Textarea/>
      <ContactAction/>
      <Alert/>
      <Banner/>
      <Blockquote/>
      <Gallery/>

    </div>
  )
}
