const customCheckboxTheme = {
  checkbox: {
    defaultProps: {
      color: "primary",
      label: undefined,
      icon: undefined,
      ripple: false,
      className: "",
      disabled: false,
      containerProps: undefined,
      labelProps: undefined,
      iconProps: undefined,
    },
    valid: {
      colors: [
        "primary"
      ],
    },
    styles: {
      base: {
        root: {
          display: "inline-flex",
          alignItems: "items-center",
          gap: "gap-2",
        },
        container: {
          position: "relative",
          display: "flex",
          alignItems: "items-center",
          cursor: "cursor-pointer",
          p: "p-0",
          borderRadius: "rounded-sm",
        },
        input: {
          peer: "peer",
          position: "relative",
          appearance: "appearance-none",
          width: "w-4",
          height: "h-4",
          borderWidth: "border",
          borderRadius: "rounded-md",
          borderColor: "border-blue-gray-200",
          cursor: "cursor-pointer",
          transition: "transition-none",
          focus: "focus:ring-0"
        },
        label: {
          color: "text-gray-700",
          fontWeight: "font-light",
          userSelect: "select-none",
          cursor: "cursor-pointer",
          mt: "mt-px",
        },
        icon: {
          color: "text-white",
          position: "absolute",
          top: "top-2/4",
          left: "left-2/4",
          translate: "-translate-y-2/4 -translate-x-2/4",
          pointerEvents: "pointer-events-none",
          opacity: "opacity-0 peer-checked:opacity-100",
          transition: "transition-opacity",
        },
        disabled: {
          opacity: "opacity-50",
          pointerEvents: "pointer-events-none",
        },
      },
      colors: {
        primary: {
          background: "checked:bg-primary",
          border: "checked:border-red-500",
        }
      }
    }
  }
} 

export { customCheckboxTheme }

