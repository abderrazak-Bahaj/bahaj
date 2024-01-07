import React from "react";
import { TimelineProps } from '@/lib/interfaces/components'
import TimelineItem from "./TimelineItem";

const TimelineApp: React.FC<TimelineProps> = ({items,icon}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:bg-gray-900">
      {
        items?.map((item, index) => (
          <TimelineItem
            key={index + item.title}
            title={item.title}
            date={item.date}
            description={item.description}
            icon={icon}
            />
        ))
      }
    </ol>
  );
};


export default TimelineApp;
