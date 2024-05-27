'use client';
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TransitionLink = ({ href, children, className, onClick }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
};

export default TransitionLink;
