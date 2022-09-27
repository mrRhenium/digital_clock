const svg = document.querySelectorAll("svg");
let time_color = ["#ff2972", "#04fc43", "#fee800"];

setInterval(() => {
  //

  //
  const date = new Date();
  let hr = date.getHours();
  let mn = date.getMinutes();
  let sc = date.getSeconds();

  let time_array = [
    hr <= 12 ? "AM" : "PM",
    sc < 10 ? "0" + sc : sc,
    mn < 10 ? "0" + mn : mn,
    hr <= 12
      ? hr < 10
        ? "0" + hr
        : hr
      : hr - 12 < 10
      ? "0" + (hr - 12)
      : hr - 12,
  ];

  svg.forEach((item, index) => {
    let radius = Math.min(item.clientWidth, item.clientHeight) / 2 - 15;

    let stroke_width = 5;
    let circumference = 2 * Math.PI * radius;

    let type = parseInt(item.children[0].dataset.type);

    let stroke_dasharray = circumference;
    let stroke_dashoffset =
      circumference - (circumference / type) * time_array[index + 1];

    item.children[0].setAttribute("r", radius);

    item.children[0].setAttribute("stroke", time_color[index]);
    item.children[0].setAttribute("stroke-width", stroke_width);

    item.children[0].setAttribute("stroke-dasharray", stroke_dasharray);
    item.children[0].setAttribute("stroke-dashoffset", stroke_dashoffset);

    // console.log({ radius, circumference, stroke_dasharray, stroke_dashoffset });
  });

  const hour_circle = document.querySelector(".hour_box svg circle");
  const time_display = document.querySelector(".time_display_box");

  time_display.style.height = hour_circle.getAttribute("r") * 2 - 50 + "px";

  const time_chunk = document.querySelectorAll(".time_display_box span");

  time_chunk.forEach((item, index) => {
    item.style.color = time_color[time_color.length - 1 - index];
    item.innerHTML = time_array[time_array.length - 1 - index];
  });

  //

  //
});
