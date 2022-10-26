$(document).ready(() => {
  mqttConnect();

  // Start button
  $("#btnStart").click(() => {
    sendCommand("start");
  });

  // Stop button
  $("#btnStop").click(() => {
    sendCommand("stop");
  });

  // Brightness
  $("#brightness-multi")
    .change(() => {
      const brightness = $("#brightness-multi").val();

      $("#brightness-txt").val(brightness);
      console.log("Brightness: ", brightness);
      sendCommand(`b ${brightness}`);
    })
    .trigger("change");

  // Speed
  $("#speed-multi")
    .change(() => {
      const speed = $("#speed-multi").val();

      $("#speed-txt").val(speed);

      sendCommand(`s ${50 * (100 - speed)}`);
      console.log("Speed: ", speed);
    })
    .trigger("change");

  // Mode
  $("#mode-selector").change(() => {
    const mode = $("#mode-selector").val();
    console.log("Mode: ", mode);
    sendCommand(`m ${mode}`);
  });
  const picker = new CP(
    document.getElementById("color-picker"),
    (state = { color: "HEX" })
  );

  // Color
  picker.on("change", function (r, g, b, a) {
    $("#color-box").val(CP.HEX([r, g, b]));
    $("#color-box").css("backgroundColor", CP.HEX([r, g, b]));

    const color = CP.HEX([r, g, b]).toString().replace("#", "");
    sendCommand(`c 0x${color}`);
  });
});
