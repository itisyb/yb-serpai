const generateSpacing = (spacer = 8) => {
  const GENERATE_UPTO = 20;
  const values = {};

  for (let i = 0; i <= GENERATE_UPTO; ) {
    values[i] = `${spacer * i}px`;

    if (i < 3) i += 0.25;
    else if (i < 5) i += 0.5;
    else i += 1;
  }

  return values;
};

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      // xs: "0px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    spacing: {
      px: "1px",
      ...generateSpacing(),
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animate")],
};
