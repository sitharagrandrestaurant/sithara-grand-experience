import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function SectionHeading({eyebrow,title,copy,align="left"}:{eyebrow:string;title:ReactNode;copy?:string;align?:"left"|"center"}){return <div className={cn("section-heading",align==="center"&&"mx-auto text-center")}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
