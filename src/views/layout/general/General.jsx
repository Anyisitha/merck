import { Fragment } from "react";
import useComponents from "../../components";
import { StyledLogo } from "./General.styles";

export default function GeneralLayout({ children }) {
  /** Components */
  const { Footer } = useComponents();
  return (
    <Fragment>
      <a href="/">
        <StyledLogo
          src="/images/home/logo-1-min.png"
          alt="logo"
        />
      </a>
      {children}
      <Footer />
    </Fragment>
  );
}
