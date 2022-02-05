import clsx from "clsx";

export const Input = ({ onChange, placeholder, classname }) => {
  return (
    <input
      className={clsx("flex fdc aic jcc", classname)}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
