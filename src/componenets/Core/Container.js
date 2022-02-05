import clsx from "clsx";

export const Container = ({ children, classname }) => {
  return <div className={clsx("flex fdc aic jcc", classname)}>{children}</div>;
};
export const WalletContainer = ({ children, classname }) => {
  return <div className={clsx("flex fdr aic jcc", classname)}>{children}</div>;
};
