import clsx from "clsx";

export const Title = ({ children, classname }) => {
  return <h2 className={clsx(classname)}>{children}</h2>;
};
export const Subtitle = ({ children, classname }) => {
  return <h4 className={clsx(classname)}>{children}</h4>;
};

export const Description = ({ children, classname }) => {
  return <h5 className={clsx(classname)}>{children}</h5>;
};
