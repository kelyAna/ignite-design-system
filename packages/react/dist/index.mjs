var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Box.tsx
import { styled } from "@stitches/react";
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $grat600"
});
Box.displayName = "Box";

// src/components/Text.tsx
import { styled as styled2 } from "@stitches/react";
var Text = styled2("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontFamily: "$xxs" },
      xs: { fontFamily: "$xs" },
      sm: { fontFamily: "$sm" },
      md: { fontFamily: "$md" },
      lg: { fontFamily: "$lg" },
      xl: { fontFamily: "$xl" },
      "2xl": { fontFamily: "$2xl" },
      "4xl": { fontFamily: "$4xl" },
      "5xl": { fontFamily: "5xl" },
      "6xl": { fontFamily: "$6xl" },
      "7xl": { fontFamily: "$7xl" },
      "8xl": { fontFamily: "$8xl" },
      "9xl": { fontFamily: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
import { styled as styled3 } from "@stitches/react";
var Heading = styled3("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/index.tsx
import React from "react";
import { User } from "phosphor-react";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
import { styled as styled4 } from "@stitches/react";
var AvatarConatiner = styled4(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled4(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled4(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
var Avatar2 = (props) => {
  return /* @__PURE__ */ React.createElement(AvatarConatiner, null, /* @__PURE__ */ React.createElement(AvatarImage, __spreadValues({}, props)), /* @__PURE__ */ React.createElement(AvatarFallback, { delayMs: 600 }, /* @__PURE__ */ React.createElement(User, null)));
};
Avatar2.displayName = "Avatar";

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled: styled5,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    radii,
    space,
    lineHeights
  }
});

// src/components/Button.tsx
var Button = styled5("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
import React2, { forwardRef } from "react";

// src/components/TextInput/styles.ts
var TextInputContainer = styled5("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled5("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});
var Input = styled5("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
var TextInput = forwardRef(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
    return /* @__PURE__ */ React2.createElement(TextInputContainer, null, !!prefix && /* @__PURE__ */ React2.createElement(Prefix, null, prefix), /* @__PURE__ */ React2.createElement(Input, __spreadValues({ ref }, props)));
  }
);
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled5("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";
import React3 from "react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled5(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled5(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
function Checkbox2(props) {
  return /* @__PURE__ */ React3.createElement(CheckboxContainer, __spreadValues({}, props), /* @__PURE__ */ React3.createElement(CheckboxIndicator, { asChild: true }, /* @__PURE__ */ React3.createElement(Check, { weight: "bold" })));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/index.tsx
import React4 from "react";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled5("div", {});
var Label = styled5(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled5("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled5("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ React4.createElement(MultiStepContainer, null, /* @__PURE__ */ React4.createElement(Label, null, "Passo ", currentStep, " de ", size), /* @__PURE__ */ React4.createElement(Steps, { css: { "--steps-size": size } }, Array.from({ length: size }, (_, i) => i + 1).map((step) => {
    return /* @__PURE__ */ React4.createElement(Step, { key: step, active: currentStep >= step });
  })));
}
MultiStep.displayName = "MultiStep";

// src/components/Toast/index.tsx
import * as React5 from "react";
import * as Toast2 from "@radix-ui/react-toast";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var ToastContainer = styled5(Toast.Provider, {});
var ToastContent = styled5(Toast.Root, {
  alignItems: "flex-start",
  padding: "12px 20px",
  gap: "$2",
  position: "absolute",
  width: "360px",
  height: "82px",
  right: "32px",
  bottom: "32px",
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "6px"
});
var ToastButton = styled5("button", {
  border: 0,
  borderRadius: "20px",
  width: "$40",
  height: "$10",
  backgroundColor: "$ignite500",
  color: "$white",
  fontSize: "$md"
});
var ToastTitle = styled5(Toast.Title, {
  color: "$white",
  fontFamily: "Roboto",
  fontSize: "$lg"
});
var ToastDescription = styled5(Toast.Description, {
  color: "$gray200",
  fontFamily: "Roboto",
  fontSize: "$sm"
});
var ToastCloseButton = styled5("button", {
  background: "transparent",
  border: 0,
  color: "$gray200",
  cursor: "pointer"
});
var ToastHeader = styled5("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "$3"
});

// src/components/Toast/index.tsx
import { X } from "phosphor-react";

// src/components/Toast/utils/onWeekDay.ts
function oneWeekAway(date) {
  const newDate = new Date(date);
  const inOneWeek = newDate.setDate(newDate.getDate() + 7);
  return new Date(inOneWeek);
}

// src/components/Toast/utils/prettyDate.ts
var prettyDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short"
  }).format(date);
};

// src/components/Toast/index.tsx
var ToastComponent = ({ title, date }) => {
  const [open, setOpen] = React5.useState(false);
  const eventDateRef = React5.useRef(/* @__PURE__ */ new Date());
  const timerRef = React5.useRef(0);
  React5.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  return /* @__PURE__ */ React5.createElement(ToastContainer, { swipeDirection: "right" }, /* @__PURE__ */ React5.createElement(
    ToastButton,
    {
      onClick: () => {
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          eventDateRef.current = oneWeekAway(date);
          setOpen(true);
        }, 100);
      }
    },
    "Toast Component"
  ), /* @__PURE__ */ React5.createElement(ToastContent, { open, onOpenChange: setOpen }, /* @__PURE__ */ React5.createElement(ToastHeader, null, /* @__PURE__ */ React5.createElement(ToastTitle, null, title), /* @__PURE__ */ React5.createElement(Toast2.Action, { asChild: true, altText: "Goto schedule to undo" }, /* @__PURE__ */ React5.createElement(ToastCloseButton, null, /* @__PURE__ */ React5.createElement(X, { size: 24 })))), /* @__PURE__ */ React5.createElement(ToastDescription, { asChild: true }, /* @__PURE__ */ React5.createElement("time", { dateTime: eventDateRef.current.toISOString() }, prettyDate(eventDateRef.current)))), /* @__PURE__ */ React5.createElement(Toast2.Viewport, { className: "ToastViewport" }));
};
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  ToastComponent,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled5 as styled,
  theme
};
