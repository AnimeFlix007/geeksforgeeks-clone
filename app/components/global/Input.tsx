"use client";

type InputProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  onChange: {
    (e: React.ChangeEvent<any>): void;
  };
  onBlur: {
    (e: React.FocusEvent<any, Element>): void;
  };
};

const Input = ({
  id,
  name,
  label,
  type = "text",
  disabled,
  error,
  onChange,
  onBlur,
  touched,
  value,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        name={name}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        type={type}
        value={value}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
          ${
            Boolean(error && touched) ? "border-rose-500" : "border-neutral-300"
          }
          ${
            Boolean(error && touched)
              ? "focus:border-rose-500"
              : "focus:border-neutral-300"
          }
        `}
      />
      <label
        className={`
          absolute 
          text-sm
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          left-4
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${Boolean(error && touched) ? "text-rose-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      {Boolean(error && touched) && (
        <p className="text-rose-500 pl-4 text-sm pt-2">{error}</p>
      )}
    </div>
  );
};

export default Input;
