"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
const variants: Variants = { hidden:{opacity:0,y:22}, visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}} };
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
 const reduce=useReducedMotion();
 return <motion.div className={className} variants={variants} initial={reduce?false:"hidden"} whileInView="visible" viewport={{once:true,amount:.12}} transition={{delay}}>{children}</motion.div>;
}
