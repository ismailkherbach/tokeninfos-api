import clsx from "clsx";

export const Error = ({ children, classname }) => {
  return (
    <div className={clsx("error flex fdc aic jcc", classname)}>
      <p>{children}</p>
    </div>
  );
};
