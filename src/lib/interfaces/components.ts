
export interface TimelineProps {
    icon?: any;
    items?: {
      title: string;
      date: string;
      description: string;
    }[];}
  
export interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    icon?: any;
}

export interface ContainerCardProps {
    
    theme?: "primary" | "secondary" ;
    /**
     * The HTML tag to use for the card.
     *
     * @example "link"|"div"
     * @default "div"
     */
    htmlTag?: "link" | "div";
    className?: string;
    link?: string;
    onclick?: React.MouseEventHandler<HTMLDivElement>;
}


export interface CardProps  extends ContainerCardProps {
    image?: string;
    title?: string;
    details?: string;
    linkText?: string;
    date?: string,
    creator?: string,
    tags?: string[],
    tagTheme?: "default" | "primary" | "success" | "danger" | "warning" | "info";

}

export interface PropsIcon {
    className?: string
}

export interface BadgeHtmlTagProps {
    text?: string;
    htmlTag?: "link" | "span";
    className?: string;
    link?: string;
}

export interface BadgeProps extends BadgeHtmlTagProps {
    theme?: "default" | "primary" | "success" | "danger" | "warning" | "info";
  }

export interface TextInputProps  extends React.InputHTMLAttributes<HTMLInputElement> {
    theme?: "default" | "primary"
}

export interface TextAreaProps  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    theme?: "default" | "primary"
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "default" | "primary" | "success" | "danger" | "warning" | "info";
    rounded?:"none"|"sm" | "md" | "lg";
    htmlTag?:"link" | "button"
    link?:string
}
