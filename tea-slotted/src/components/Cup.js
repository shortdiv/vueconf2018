export default {
  functional: true,
  render(createElement, { data, children }) {
    console.log(data);
    return createElement(
      "div",
      {
        class: ["carafe"],
        style: {
          "min-height": "96px",
          overflow: "hidden",
          "border-radius": "0.05em 0.05em 2.2em 2.2em",
          background: "#fff",
          width: "100%",
          height: "100%"
        }
      },
      children
    );
  }
};
