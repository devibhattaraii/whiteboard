import oc from "open-color";

const shades = (index: number) => [
  oc.red[index],
  // oc.pink[index],
  // oc.grape[index],
  // oc.violet[index],
  // oc.indigo[index],
  oc.blue[index],
  // oc.cyan[index],
  // oc.teal[index],
  oc.green[index],
  // oc.lime[index],
  oc.yellow[index],
  // oc.orange[index],
];

const themeShades = (index: number) => [
  oc.blue[index],
  // oc.cyan[index],
  // oc.teal[index],
  // oc.orange[index],
];

export default {
  canvasBackground: [oc.white, oc.gray[1], ...themeShades(0)],
  elementBackground: ["transparent", oc.gray[4], ...shades(6)],
  elementStroke: [oc.black, ...shades(9)],
};

// S4EF1
