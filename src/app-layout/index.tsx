import { useRef, useEffect } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "./layout.module.css";
import Background from "./background";
import { Flex } from "../components/functional";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

function AppLayout({ children, className, ...props }: AppLayoutProps) {
  const layoutRef = useRef<HTMLDivElement>(null);

  // Ensure the layout container doesn't block clicks
  useEffect(() => {
    if (layoutRef.current) {
      layoutRef.current.style.pointerEvents = "none";
    }
  }, []);

  return (
    <Background className={styles.layoutContainer} {...props}>
      <Header className={styles.stickyHeader} />
      <div className={styles.mainContent}>{children}</div>
      <Footer className={styles.stickyFooter} />
    </Background>
  );
}

export default AppLayout;
