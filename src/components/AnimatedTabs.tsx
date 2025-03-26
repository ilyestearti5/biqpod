import React from "react";
import { useLocation, Switch } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ReactElement } from "@/types";
import { tw } from "@/utils";
export interface SwitchViewContentProps extends ReactElement {
  children?: React.ReactElement<typeof Switch>;
}
export function SwitchViewContent({ children, className, ...props }: SwitchViewContentProps) {
  const location = useLocation();
  return (
    <div className={tw("relative w-full h-full overflow-hidden", className)} {...props}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ scale: 1, x: 0 }}
          animate={{ scale: 1, x: 0 }}
          exit={{ scale: 0.7, opacity: 0.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${location.pathname}-next`}
          initial={{ scale: 0.7, x: "100%" }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
