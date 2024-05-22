"use client";

import { useOverlapping } from "@/utils/useOverlapping";
import { useRef, ReactNode } from "react";

interface OverlapClientProps {
  children: ReactNode;
}

const OverlapClient = ({ children }: OverlapClientProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOverlapping(wrapperRef);

  return (
    <div ref={wrapperRef} className="overlap-client">
      {children}
    </div>
  );
};

export default OverlapClient;
