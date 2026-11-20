"use client";
import {motion,useReducedMotion,type Variants} from "framer-motion";import type {ReactNode} from "react";
type Direction="left"|"right"|"up";
export function Reveal({children,className="",delay=0,direction="up"}:{children:ReactNode;className?:string;delay?:number;direction?:Direction}){
const reduce=useReducedMotion();const start=direction==="left"?{x:-65,y:0}:direction==="right"?{x:65,y:0}:{x:0,y:38};
const variants:Variants={hidden:{opacity:0,...start,filter:"blur(5px)"},visible:{opacity:1,x:0,y:0,filter:"blur(0px)",transition:{duration:.72,delay,ease:[.22,1,.36,1]}}};
return <motion.div className={className} variants={variants} initial={reduce?false:"hidden"} whileInView="visible" viewport={{once:false,amount:.18,margin:"0px 0px -7% 0px"}}>{children}</motion.div>;
}
