import React from "react";
import { IconEmail, IconPhone, IconPosition } from "@/assets/icons";
import { TextInput,Textarea,ButtonInput } from "@/components";

const contactInfo = [
  {
    id: 1,
    icon: <IconPhone />,
    title: "Phone",
    details: "+212706272879",
  },
  {
    id: 1,
    icon: <IconEmail />,
    title: "Email",
    details: "bahaj.abderrazak@gmail.com",
  },
  {
    id: 1,
    icon: <IconPosition />,
    title: "Address",
    details: "Maroc , Tinghir , 45800",
  },
];

const ContactApp = () => {

const renderContactInfo = contactInfo.map( item => <ContactInfo key={item.id} {...item} />)

  return (
    <div className="container mx-auto my-10">
          <h1 className="mb-10 md:text-start">
            <span className="text-green-600 font-semibold  text-2xl">CONTACT</span>
            <p className="text-5xl font-bold font-heebo text-gray-900 dark:text-white mt-3">
              {"Les't talk about your project"}
            </p>
          </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <form action="#">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <TextInput 
                  type="text"
                  name="subject"
                  theme="primary"
                  placeholder="enter subject" />
              </div>
              <div>
              <TextInput
                  type="email"
                  name="email"
                  theme="primary"
                  placeholder="ex: example@email.com"
                />
              </div>
              <div className="col-span-2">
                <Textarea
                  theme="primary"
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="enter message"/>
                <ButtonInput className="rounded-[18px] mt-3" theme="success">Send Request</ButtonInput>

              </div>
            </div>
          </form>
        <div className="flex  flex-col gap-8">
            {renderContactInfo}
        </div>
      </div>
    </div>
  );
};

export default ContactApp;

interface ContactInfoProps {
  icon: any;
  title: string;
  details: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ details, icon, title }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="w-14 h-14 bg-green-600 text-white flex items-center rounded-full justify-center">
        {icon}
      </span>
      <div className="ltr:pl-6 rtl:pr-6">
        <h3 className="text-xl font-heebo font-bold dark:text-white">
          {title}
        </h3>
        <span className=" dark:text-slate-300 text-lg mt-5">
          {details}
        </span>
      </div>
    </div>
  );
};
