import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/antd/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
          primary: "#fea928",
          secondary: "#ed8900",
      },
      screens: {
        'xs' : '360px',
        // => @media (min-width: 360px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1680px',
              // => @media (min-width: 1680px) { ... }
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        //custom font size
        h1: [
          "4rem",
          {
            lineHeight: "5rem",
            letterSpacing: "0.0375rem",
            fontWeight: "700", 
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0.035rem",
            fontWeight: "700", 
          },
        ],
        h3: [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "0.05rem",
            fontWeight: "700", 
          },
        ],
        h4: [
          "2rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "0rem",
            fontWeight: "700", 
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "0rem",
            fontWeight: "600", 
          },
        ],
        h6: [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0rem",
            fontWeight: "600", 
          },
        ],
        p: [
          "1.25rem",
          {
            lineHeight: "2rem",
            letterSpacing: "0rem",
            fontWeight: "500", 
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0rem",
            fontWeight: "400", 
          },
        ],
        span: [
          "0.75rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0rem",
            fontWeight: "400", 
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
