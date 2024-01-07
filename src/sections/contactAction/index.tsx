import Link from 'next/link'
import {ButtonInput} from "@/components"


const ContactActionApp:React.FC = () => {
    return(
        
<div className="bg-white dark:bg-gray-800 lg:mx-5 rounded-2xl">
    <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                Ready to dive in?
            </span>
            <span className="block text-indigo-500">
                Get in touch
            </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className=" inline-flex rounded-md shadow">
                <ButtonInput link='/contact'  htmlTag='link'  theme='primary' rounded='lg'>
                    Contact Us
                </ButtonInput>
            </div>
        </div>
    </div>
</div>

    )
}


export default ContactActionApp