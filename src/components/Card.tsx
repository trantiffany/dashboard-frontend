import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type CardTitleType = "Confluence" | "Github" | "Jira" | "Datadog";

const logos: Record<CardTitleType, string> = {
  Confluence: "/confluence.svg",
  Github: "/github.svg",
  Jira: "/jira.svg",
  Datadog: "/datadog.svg",
};

const CardContainer = ({
  title,
  description,
  children,
  action,
  footer,
  className,
}: {
  title: CardTitleType;
  description: string;
  children: React.ReactNode;
  action?: string;
  footer?: React.ReactNode;
  className?: string;
}) => {
  const src = logos[title];

  return (
    <Card className={`${className} m-4 h-full w-full gap-1`}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {src && <img src={src} alt={`${title} logo`} className="h-6 w-6" />}
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default CardContainer;
