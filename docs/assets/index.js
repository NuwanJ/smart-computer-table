$(document).ready(() => {
  mqttConnect();

  $("#brightness-multi")
    .change(() => {
      const brightness = $("#brightness-multi").val();

      $("#brightness-txt").val(brightness);
      console.log("Brightness: ", brightness);
    })
    .trigger("change");

  $("#speed-multi")
    .change(() => {
      const speed = $("#speed-multi").val();

      $("#speed-txt").val(speed);

      sendCommand(`s ${speed}`);
      console.log("Speed: ", speed);
    })
    .trigger("change");

  const picker = new CP(
    document.getElementById("color-picker"),
    (state = { color: "HEX" })
  );

  picker.on("change", function (r, g, b, a) {
    $("#color-box").val(CP.HEX([r, g, b]));
    $("#color-box").css("backgroundColor", CP.HEX([r, g, b]));

    const color = CP.HEX([r, g, b]).toString().replace("#", "");
    sendCommand(`c 0x${color}`);
  });
});
