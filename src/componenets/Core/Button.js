import clsx from "clsx";

export const Button = ({ children, onClick, classname }) => {
  return (
    <button className={clsx("flex fdc aic jcc", classname)} onClick={onClick}>
      {children}
    </button>
  );
};
