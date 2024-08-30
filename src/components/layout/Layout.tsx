import { PropsWithChildren } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

import styles from "./Layout.module.scss";
import { Helmet } from "react-helmet-async";
import { SITE_DESCRIPTION, SITE_NAME } from "../../constants/seo.constant";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
