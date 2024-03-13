import {
  Checkbox as MaterialCheckbox,
  ThemeProvider,
} from "@material-tailwind/react";
import { customCheckboxTheme } from "../themes/checkboxTheme";

interface CheckboxProps {
  label?: string;
  labelClassName?: string;
  className?: string;
  [key: string]: any; // Allow any other props
}
const Checkbox = ({ label, labelClassName, className, ...props}: CheckboxProps) => {
  return (
    <ThemeProvider value={customCheckboxTheme}>
      <MaterialCheckbox
        crossOrigin={""}
        label={
          <p className={labelClassName}>
            {label}
          </p>
        }
        className={className}
        {...props}
      />
    </ThemeProvider>
  );
};

export default Checkbox;
