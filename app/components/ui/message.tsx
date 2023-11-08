import { cn } from "@/app/lib/utils";

const Message: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn("", className)} {...props} />;
};

const MessageContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn("flex gap-2", className)} {...props} />;
};

const MessageText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return <p className={cn("opacity-80", className)} {...props} />;
};

const MessageAuthor: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return <h3 className={cn(" font-semi-bold", className)} {...props} />;
};

const MessageTimeLine: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return <span className={cn("opacity-50", className)} {...props} />;
};

export { Message, MessageContent, MessageText, MessageTimeLine, MessageAuthor };
