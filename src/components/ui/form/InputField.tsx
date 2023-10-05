import React, {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import cn from "clsx";
import { FieldValues, RegisterOptions } from "react-hook-form";
import FieldControl from "@/components/ui/form/FieldControl.tsx";
import { InputType } from "@/components/ui/form/types.ts";
import FieldHelperText from "@/components/ui/form/FieldHelperText.tsx";
import { ReactComponent as EyeOpen } from "@/assets/icons/EyeOpen.svg";
import { ReactComponent as EyeClose } from "@/assets/icons/EyeClosed.svg";

type FocusHandler = FocusEventHandler<HTMLInputElement>;
type ChangeHandler = ChangeEventHandler<HTMLInputElement>;
export interface InputFieldProps {
  id?: string;
  value?: string;
  type?: InputType;
  label?: string;
  autoComplete?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  error?: boolean;
  iconRight?: boolean;
  helperText?: string;
  errorText?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusHandler;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onFocus?: FocusHandler;
  fullWidth?: boolean;
  bottomOffset?: string;
  name: string;
  options?: RegisterOptions<FieldValues, string>;
}

const InputField: FC<InputFieldProps> = React.forwardRef<
  HTMLInputElement,
  InputFieldProps
>(
  (
    {
      autoComplete,
      className,
      defaultValue,
      disabled = false,
      id,
      placeholder,
      iconRight,
      required = false,
      value,
      label,
      type = "text",
      error,
      helperText,
      readOnly,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      fullWidth,
      bottomOffset,
      errorText,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setFocused] = useState(false);
    const [isActive, setActive] = useState(
      Boolean(!readOnly && (defaultValue || value || isFocused))
    );
    const [showPassword, setShowPassword] = useState(false);

    const icon = useMemo(
      () => (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {iconRight && showPassword ? (
            <EyeOpen onClick={() => setShowPassword(false)} />
          ) : (
            <EyeClose onClick={() => setShowPassword(true)} />
          )}
        </div>
      ),
      [iconRight, showPassword]
    );

    const handleFocus: FocusHandler = useCallback(
      e => {
        setFocused(true);
        setActive(true);

        if (onFocus) {
          onFocus(e);
        }

        return e;
      },
      [onFocus]
    );

    const handleBlur: FocusHandler = useCallback(
      e => {
        setFocused(false);
        if (value?.length || defaultValue?.length) {
          setActive(true);
        } else {
          setActive(false);
        }

        if (onBlur) {
          onBlur(e);
        }

        return e;
      },
      [onBlur, value]
    );

    const handleChange: ChangeHandler = useCallback(
      e => {
        if (onChange) {
          onChange(e);
        }

        return e;
      },
      [onChange]
    );

    return (
      <FieldControl
        id={id}
        label={label}
        isActive={isActive}
        className={bottomOffset}
      >
        <div>
          <div className="relative">
            <input
              ref={ref}
              autoComplete={autoComplete}
              className={cn(
                "h-[56px] rounded-t border-0 bg-gray-400 pr-11 pt-[26px] text-sm tracking-small outline-none focus:border-b-gray-700 focus:ring-0",
                className,
                fullWidth && "w-full",
                !disabled && "border-b border-gray-700"
              )}
              defaultValue={defaultValue}
              disabled={disabled}
              id={id}
              placeholder={placeholder}
              readOnly={readOnly}
              required={required}
              type={showPassword ? "text" : type}
              value={value}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={onKeyDown}
              {...rest}
            />
            {iconRight && icon}
          </div>
          <FieldHelperText
            error={error}
            title={helperText}
            errorText={errorText}
          />
        </div>
      </FieldControl>
    );
  }
);

export default InputField;
