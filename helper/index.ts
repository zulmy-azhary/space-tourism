// Filter Image URL
export const filterImage = (url: string): string => [...url].slice(1).join("");

// Items
export const dataSection: Readonly<Record<string, string>[]> = [
  {
    index: "00",
    name: "Home",
    url: "/",
  },
  {
    index: "01",
    name: "Destination",
    url: "/destination",
  },
  {
    index: "02",
    name: "Crew",
    url: "/crew",
  },
  {
    index: "03",
    name: "Technology",
    url: "/technology",
  },
];

// Size for different dimensions of the screen
export const size: Readonly<Record<string, string>> = {
  desktop: "1440px",
  tablet: "768px",
  mobile: "375px",
};

// Media Queries
export const device: Readonly<Record<string, { name: string, mediaQuery: string}>> = {
  desktop: {
    name: "desktop",
    mediaQuery: `(max-width: ${size.desktop})`,
  },
  tablet: {
    name: "tablet",
     mediaQuery: `(max-width: ${size.tablet})`,
  },
  mobile: {
    name: "mobile",
     mediaQuery: `(max-width: ${size.mobile})`,
  },
};
