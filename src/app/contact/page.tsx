import { Contact } from "@/sections"
import { Metadata } from "next";
import {contentMetaData} from '@/lib/constants'

export const metadata: Metadata =contentMetaData.contact

const BlogApp:React.FC = () => {
    return (
       <>
       <Contact/>
       </>
    )
}

export default BlogApp