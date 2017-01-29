$(document).ready(function() {
    var a = $.scrollorama({
        blocks: ".scrollblock"
    });
    a.onBlockChange(function() {
        var b = a.blockIndex;
        $("#console").css("display", "block").text("onBlockChange | blockIndex:" + b + " | current block: " + a.settings.blocks.eq(b).attr("id"))
    });
    a.animate("#reality .bg", {
        delay: 300,
        duration: 35E3,
        property: "left",
        start: 100,
        end: 1100
    });
    a.animate("#reality .bg", {
        delay: 300,
        duration: 35E3,
        property: "top",
        start: 120,
        end: 340
    });
    a.animate("#level1 .bg", {
        delay: 2500,
        duration: 32E3,
        property: "left",
        start: 100,
        end: 1100
    });
    a.animate("#level2 .bg", {
        delay: 7300,
        duration: 27E3,
        property: "left",
        start: 0,
        end: -1E3
    });
    a.animate("#level3 .bg1", {
        delay: 10600,
        duration: 23E3,
        property: "left",
        start: 30,
        end: -250
    });
    a.animate("#level3 .bg2", {
        delay: 10600,
        duration: 23E3,
        property: "left",
        start: 10,
        end: -150
    });
    a.animate("#level3 .bg3", {
        delay: 10600,
        duration: 23E3,
        property: "left",
        start: -10,
        end: -60
    });
    a.animate("#limbo .bg1", {
        delay: 15800,
        duration: 17E3,
        property: "left",
        start: 0,
        end: -40
    });
    a.animate("#limbo .bg2", {
        delay: 15800,
        duration: 19E3,
        property: "left",
        start: 0,
        end: -150
    });
    a.animate("#limbo .bg2", {
        delay: 15800,
        duration: 19E3,
        property: "top",
        start: 350,
        end: 330
    });
    a.animate("#limbo .bg3", {
        delay: 15800,
        duration: 19E3,
        property: "left",
        start: 0,
        end: -220
    });
    a.animate("#limbo .bg3", {
        delay: 15800,
        duration: 19E3,
        property: "top",
        start: 350,
        end: 315
    });
    a.animate(".logo", {
        delay: 0,
        duration: 400,
        property: "width",
        end: 275
    });
    a.animate(".logo-container", {
        delay: 0,
        duration: 400,
        property: "top",
        start: 150,
        end: 55
    });
    a.animate(".logo-container", {
        delay: 0,
        duration: 400,
        property: "opacity",
        end: 0.6
    });
    a.animate("h3.intro", {
        delay: 0,
        duration: 800,
        property: "top",
        start: 300,
        end: 200
    });
    a.animate("h3.intro", {
        delay: 0,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate(".down-arrow", {
        delay: 0,
        duration: 800,
        property: "top",
        start: 500,
        end: 470
    });
    a.animate(".down-arrow", {
        delay: 0,
        duration: 400,
        property: "opacity",
        start: 0.5,
        end: 0
    });
    a.animate("#reality .level-name .name", {
        delay: 300 ,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    a.animate("#reality .reality-clock", {
        delay: 300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.2
    });
    a.animate("#reality .bgouter", {
        delay: 300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .character-container", {
        delay: 300,
        duration: 500,
        property: "top",
        start: 700,
        end: 460
    });
    a.animate("#reality .character-container", {
        delay: 300,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h41", {
        delay: 800,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#reality .h41 span", {
        delay: 800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h41 span", {
        delay: 1100,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#reality .h41", {
        delay: 1100,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#reality .character-container.fischer .character", {
        delay: 950,
        duration: 200,
        property: "margin-top",
        end: -40
    });
    a.animate("#reality .character-container.fischer .character", {
        delay: 1250,
        duration: 200,
        property: "top",
        end: 40
    });
    a.animate("#reality .h42", {
        delay: 1500,
        duration: 300,
        property: "top",
        start: 220,
        end: 170
    });
    a.animate("#reality .h42 span", {
        delay: 1500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .overseer-container", {
        delay: 1600,
        duration: 300,
        property: "top",
        start: 340,
        end: 300
    });
    a.animate("#reality .overseer-container", {
        delay: 1600,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .wires-container .wires", {
        delay: 1900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.5
    });
    a.animate("#reality .character-container.yusuf .character", {
        delay: 2E3,
        duration: 200,
        property: "margin-top",
        end: -120
    });
    a.animate("#reality .h42 span", {
        delay: 2200,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#reality .h42", {
        delay: 2200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#reality .character-container .character .zzz-container", {
        delay: 2100,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.92
    });
    a.animate(".adjuster1", {
        delay: 2500,
        duration: 300,
        property: "height",
        end: 0
    });
    a.animate("#level1 .level-name", {
        delay: 2500,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    a.animate("#level1 .level1-clock", {
        delay: 2500,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.2
    });
    a.animate("#level1 .bgouter", {
        delay: 2500,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .character-container", {
        delay: 2800,
        duration: 500,
        property: "top",
        start: 200,
        end: 460
    });
    a.animate("#level1 .character-container", {
        delay: 2800,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .overseer-container", {
        delay: 2800,
        duration: 500,
        property: "top",
        start: 40,
        end: 300
    });
    a.animate("#level1 .overseer-container", {
        delay: 2800,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h41", {
        delay: 3200,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#level1 .h41 span", {
        delay: 3200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h41 span", {
        delay: 3500,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level1 .h41", {
        delay: 3500,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level1 .character-container.ariadne .character", {
    //     delay: 3300,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level1 .character-container.ariadne .character", {
    //     delay: 3500,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    a.animate("#level1 .h42", {
        delay: 4E3,
        duration: 300,
        property: "top",
        start: 200,
        end: 150
    });
    a.animate("#level1 .h42 span", {
        delay: 4E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h42 span", {
        delay: 4300,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level1 .h42", {
        delay: 4300,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level1 .character-container.fischer .character", {
    //     delay: 4100,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level1 .character-container.fischer .character", {
    //     delay: 4300,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    a.animate("#level1 .h43", {
        delay: 4800,
        duration: 300,
        property: "top",
        start: 200,
        end: 150
    });
    a.animate("#level1 .h43 span", {
        delay: 4800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h43 span", {
        delay: 5200,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level1 .h43", {
        delay: 5200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level1 .character-container.eames .character", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "height",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "width",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "top",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "left",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 4900,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 0,
    //     end: 60
    // });
    // a.animate("#level1 .character-container.eames .character .browning span", {
    //     delay: 5100,
    //     duration: 100,
    //     property: "opacity",
    //     start: 0,
    //     end: 0.8
    // });
    // a.animate("#level1 .character-container.eames .character", {
    //     delay: 5300,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    // a.animate("#level1 .character-container.eames .character .browning", {
    //     delay: 5300,
    //     duration: 200,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    a.animate("#level1 .h44", {
        delay: 5600,
        duration: 300,
        property: "top",
        start: 170,
        end: 130
    });
    a.animate("#level1 .h44 span", {
        delay: 5600,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h44 span", {
        delay: 5900,
        duration: 300,
        property: "margin-top",
        end: -30
    });
    a.animate("#level1 .h44", {
        delay: 5900,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level1 .character-container.saito .character", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level1 .character-container.saito .character .shot", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "height",
    //     start: 0,
    //     end: 50
    // });
    // a.animate("#level1 .character-container.saito .character .shot", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "width",
    //     start: 0,
    //     end: 50
    // });
    // a.animate("#level1 .character-container.saito .character .shot", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "top",
    //     start: 60,
    //     end: 35
    // });
    // a.animate("#level1 .character-container.saito .character .shot", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "left",
    //     start: 60,
    //     end: 35
    // });
    // a.animate("#level1 .character-container.saito .character .shot", {
    //     delay: 5700,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 0,
    //     end: 25
    // });
    // a.animate("#level1 .character-container.saito .character", {
    //     delay: 6100,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    a.animate("#level1 .h45", {
       delay: 6400,
      duration: 300,
         property: "top",
        start: 220,
         end: 170
     });
    a.animate("#level1 .h45 span", {
        delay: 6400,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    // a.animate("#level1 .wires-container .wires", {
    //     delay: 6700,
    //     duration: 300,
    //     property: "opacity",
    //     start: 0,
    //     end: 0.5
    // });
    // a.animate("#level1 .character-container.arthur .character", {
    //     delay: 6800,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -120
    // });
    a.animate("#level1 .h45 span", {
        delay: 7E3,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level1 .h45", {
        delay: 7E3,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level1 .character-container .character .zzz-container", {
        delay: 6900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.92
    });
    a.animate(".adjuster2", {
        delay: 7300,
        duration: 300,
        property: "height",
        end: 0
    });
    a.animate("#level2 .level-name", {
        delay: 7300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    a.animate("#level2 .level2-clock", {
        delay: 7300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.2
    });
    a.animate("#level2 .bgouter", {
        delay: 7300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .character-container", {
        delay: 7400,
        duration: 500,
        property: "top",
        start: 200,
        end: 460
    });
    a.animate("#level2 .character-container", {
        delay: 7400,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .overseer-container", {
        delay: 7400,
        duration: 500,
        property: "top",
        start: 40,
        end: 300
    });
    a.animate("#level2 .overseer-container", {
        delay: 7400,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .h41", {
        delay: 7900,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#level2 .h41 span", {
        delay: 7900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .h41 span", {
        delay: 8200,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level2 .h41", {
        delay: 8200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level2 .character-container.cobb .character", {
    //     delay: 8E3,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level2 .character-container.cobb .character", {
    //     delay: 8200,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    a.animate("#level2 .h42", {
        delay: 8500,
        duration: 300,
        property: "top",
        start: 160,
        end: 135
    });
    a.animate("#level2 .h42 span", {
        delay: 8500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .h42 span", {
        delay: 8800,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level2 .h42", {
        delay: 8800,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level2 .character-container.fischer .character", {
    //     delay: 8600,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -40
    // });
    // a.animate("#level2 .character-container.fischer .character", {
    //     delay: 8900,
    //     duration: 200,
    //     property: "top",
    //     end: 40
    // });
    a.animate("#level2 .browning-container .character", {
        delay: 8600,
        duration: 200,
        property: "opacity",
        end: 1
    });
    a.animate("#level2 .browning-container", {
        delay: 8900,
        duration: 200,
        property: "opacity",
        end: 0
    });
    a.animate("#level2 .h43", {
        delay: 9100,
        duration: 300,
        property: "top",
        start: 170,
        end: 150
    });
    a.animate("#level2 .h43 span", {
        delay: 9100,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .h43 span", {
        delay: 9400,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level2 .h43", {
        delay: 9400,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level2 .h44", {
        delay: 9800,
        duration: 300,
        property: "top",
        start: 200,
        end: 160
    });
    a.animate("#level2 .h44 span", {
        delay: 9800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .wires-container .wires", {
        delay: 1E4,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.5
    });
    // a.animate("#level2 .character-container.eames .character", {
    //     delay: 1E4,
    //     duration: 200,
    //     property: "margin-top",
    //     end: -120
    // });
    a.animate("#level2 .h44 span", {
        delay: 10200,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level2 .h44", {
        delay: 10200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level2 .character-container .character .zzz-container", {
        delay: 10200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.92
    });
    a.animate(".adjuster3", {
        delay: 10600,
        duration: 300,
        property: "height",
        end: 0
    });
    a.animate("#level3 .level-name", {
        delay: 10600,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    a.animate("#level3 .level3-clock", {
        delay: 10600,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.2
    });
    a.animate("#level3 .bgouter", {
        delay: 10600,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .character-container", {
        delay: 10700,
        duration: 500,
        property: "top",
        start: 200,
        end: 460
    });
    a.animate("#level3 .character-container", {
        delay: 10700,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .overseer-container", {
        delay: 10700,
        duration: 500,
        property: "top",
        start: 40,
        end: 300
    });
    a.animate("#level3 .overseer-container", {
        delay: 10700,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h41", {
        delay: 11200,
        duration: 300,
        property: "top",
        start: 200,
        end: 160
    });
    a.animate("#level3 .h41 span", {
        delay: 11200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h41 span", {
        delay: 11500,
        duration: 300,
        property: "margin-top",
        end: -40
    });
    a.animate("#level3 .h41", {
        delay: 11500,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level3 .h42", {
        delay: 11900,
        duration: 300,
        property: "top",
        start: 200,
        end: 150
    });
    a.animate("#level3 .h42 span", {
        delay: 11900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h42 span", {
        delay: 12500,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level3 .h42", {
        delay: 12500,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level3 .character-container.saito .character .shot", {
    //     delay: 12200,
    //     duration: 200,
    //     property: "height",
    //     start: 50,
    //     end: 120
    // });
    // a.animate("#level3 .character-container.saito .character .shot", {
    //     delay: 12200,
    //     duration: 200,
    //     property: "width",
    //     start: 50,
    //     end: 120
    // });
    // a.animate("#level3 .character-container.saito .character .shot", {
    //     delay: 12200,
    //     duration: 200,
    //     property: "top",
    //     start: 35,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.saito .character .shot", {
    //     delay: 12200,
    //     duration: 200,
    //     property: "left",
    //     start: 35,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.saito .character .shot", {
    //     delay: 12200,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 25,
    //     end: 60
    // });
    // a.animate(".character-container.saito .character .skull", {
    //     delay: 12400,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    a.animate("#level3 .h43", {
        delay: 12900,
        duration: 300,
        property: "top",
        start: 180,
        end: 140
    });
    a.animate("#level3 .h43 span", {
        delay: 12900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h43 span", {
        delay: 13600,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level3 .h43", {
        delay: 13600,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level3 .character-container.mal", {
        delay: 13100,
        duration: 200,
        property: "opacity",
        start: 0,
        end: 1
    });
    // a.animate("#level3 .character-container.mal .character", {
    //     delay: 13400,
    //     duration: 200,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 13200,
    //     duration: 200,
    //     property: "height",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 13200,
    //     duration: 200,
    //     property: "width",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 13200,
    //     duration: 200,
    //     property: "top",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 13200,
    //     duration: 200,
    //     property: "left",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 13200,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 0,
    //     end: 60
    // });
    // a.animate("#level3 .character-container.fischer .character .skull", {
    //     delay: 13400,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    a.animate("#level3 .h44", {
        delay: 13900,
        duration: 300,
        property: "top",
        start: 180,
        end: 140
    });
    a.animate("#level3 .h44 span", {
        delay: 13900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .wires-container .wires", {
        delay: 14E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.5
    });
    a.animate("#level3 .h44 span", {
        delay: 14200,
        duration: 300,
        property: "margin-top",
        end: -40
    });
    a.animate("#level3 .h44", {
        delay: 14200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level3 .character-container.cobb .character .zzz-container, #level3 .character-container.ariadne .character .zzz-container", {
    //     delay: 14200,
    //     duration: 300,
    //     property: "opacity",
    //     start: 0,
    //     end: 0.92
    // });
    // a.animate("#level3 .h45", {
    //     delay: 14600,
    //     duration: 300,
    //     property: "top",
    //     start: 160,
    //     end: 130
    // });
    // a.animate("#level3 .h45 span", {
    //     delay: 14600,
    //     duration: 300,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    // a.animate("#level3 .h45 span", {
    //     delay: 14900,
    //     duration: 300,
    //     property: "margin-top",
    //     end: -30
    // });
    // a.animate("#level3 .h45", {
    //     delay: 14900,
    //     duration: 300,
    //     property: "opacity",
    //     end: 0
    // });
    a.animate(".adjuster4", {
        delay: 15300,
        duration: 300,
        property: "height",
        end: 0
    });
    a.animate("#limbo .level-name", {
        delay: 15300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    a.animate("#limbo .limbo-clock", {
        delay: 15300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 0.2
    });
    a.animate("#limbo .bgouter", {
        delay: 15300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .character-container.ariadne .character, #limbo .character-container.cobb .character #limbo .character-container.mal .character, #limbo .character-container.fischer .character", {
        delay: 15300,
        duration: 400,
        property: "opacity",
        start: 0,
        end: 1
    });
    // a.animate("#limbo .character-container.cobb, #limbo .character-container.ariadne", {
    //     delay: 15400,
    //     duration: 500,
    //     property: "top",
    //     start: 200,
    //     end: 460
    // });
    a.animate("#limbo .character-container.cobb, #limbo .character-container.ariadne", {
        delay: 15400,
        duration: 500,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h41", {
        delay: 16E3,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h41 span", {
        delay: 16E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    
    a.animate("#limbo .level-name #glow", {
        delay: 16E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.6
    });
    

    a.animate("#limbo .h41 span", {
        delay: 16300,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h41", {
        delay: 16300,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.mal .character, #limbo .character-container.fischer .character", {
    //     delay: 16200,
    //     duration: 500,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    a.animate("#limbo .h42", {
        delay: 16800,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h42 span", {
        delay: 16800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h42 span", {
        delay: 17100,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h42", {
        delay: 17100,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#limbo .h43", {
        delay: 17500,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
     a.animate("#limbo .h43 span", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
      a.animate("#limbo .level-name #oneone ", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });
      a.animate("#limbo .level-name #glow ", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 0.6,
        end: 0
    });
      a.animate("#limbo .level-name #twotwo ", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });

      a.animate("#limbo .level-name #pose", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.6
    });


    a.animate("#limbo .h43 span", {
        delay: 17500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });

    a.animate("#limbo .h43 span", {
        delay: 17800,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h43", {
        delay: 17800,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#limbo .h44", {
        delay: 18200,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h44 span", {
        delay: 18200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h44 span", {
        delay: 18500,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h44", {
        delay: 18500,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 18300,
    //     duration: 200,
    //     property: "height",
    //     start: 0,
    //     end: 50
    // });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 18300,
    //     duration: 200,
    //     property: "width",
    //     start: 0,
    //     end: 50
    // });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 18300,
    //     duration: 200,
    //     property: "top",
    //     start: 60,
    //     end: 35
    // });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 18300,
    //     duration: 200,
    //     property: "left",
    //     start: 60,
    //     end: 35
    // });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 18300,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 0,
    //     end: 25
    // });
    a.animate("#limbo .h45", {
        delay: 18900,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h45 span", {
        delay: 18900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });


    a.animate("#limbo .level-name .name", {
        delay: 18900,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });

    a.animate("#limbo .level-name #name1", {
        delay: 18900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });

     a.animate("#limbo .level-name #work", {
        delay: 18900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 0.6
    });
 
    a.animate("#limbo .h45 span", {
        delay: 19400,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h45", {
        delay: 19400,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.mal .character .shot", {
    //     delay: 19E3,
    //     duration: 200,
    //     property: "height",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#limbo .character-container.mal .character .shot", {
    //     delay: 19E3,
    //     duration: 200,
    //     property: "width",
    //     start: 0,
    //     end: 120
    // });
    // a.animate("#limbo .character-container.mal .character .shot", {
    //     delay: 19E3,
    //     duration: 200,
    //     property: "top",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.mal .character .shot", {
    //     delay: 19E3,
    //     duration: 200,
    //     property: "left",
    //     start: 60,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.mal .character .shot", {
    //     delay: 19E3,
    //     duration: 200,
    //     property: "border-radius",
    //     start: 0,
    //     end: 60
    // });
    // a.animate("#limbo .character-container.mal .character .skull", {
    //     delay: 19250,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    // a.animate("#limbo .character-container.mal", {
    //     delay: 19400,
    //     duration: 300,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.mal", {
    //     delay: 19400,
    //     duration: 600,
    //     property: "top",
    //     start: 460,
    //     end: 700
    // });
    a.animate("#limbo .h46", {
        delay: 19800,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h46 span", {
        delay: 19800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });

     a.animate("#limbo .h46 span", {
        delay: 20100,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h46", {
        delay: 20100,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.cobb .character .shot", {
    //     delay: 2E4,
    //     duration: 200,
    //     property: "opacity",
    //     end: 0
    // });
    a.animate("#limbo .h47", {
        delay: 20500,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h47 span", {
        delay: 20500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h47 span", {
        delay: 20900,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h47", {
        delay: 20900,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.fischer .character .skull", {
    //     delay: 20600,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    // a.animate("#limbo .character-container.fischer", {
    //     delay: 20800,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.fischer", {
    //     delay: 20800,
    //     duration: 500,
    //     property: "top",
    //     start: 460,
    //     end: 0
    // });
    a.animate(".adjuster5", {
        delay: 17400,
        duration: 30,
        property: "padding-top",
        end: 700
    });
    // a.animate("#level3 .character-container.fischer .character .skull-container", {
    //     delay: 21700,
    //     duration: 200,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#level3 .character-container.fischer .character .shot", {
    //     delay: 21400,
    //     duration: 10,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    a.animate("#level3 .h46", {
        delay: 20E3,
        duration: 300,
        property: "top",
        start: 180,
        end: 140
    });
    a.animate("#level3 .h46 span", {
        delay: 20E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h46 span", {
        delay: 20300,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level3 .h46", {
        delay: 20300,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#level3 .h47", {
        delay: 20700,
        duration: 300,
        property: "top",
        start: 180,
        end: 140
    });
    a.animate("#level3 .h47 span", {
        delay: 20700,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level3 .h47 span", {
        delay: 23E3,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level3 .h47", {
        delay: 23E3,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate(".adjuster5", {
        delay: 23400,
        duration: 300,
        property: "height",
        end: 0
    });
    a.animate("#limbo .h48", {
        delay: 23800,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#limbo .h48 span", {
        delay: 23800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h48 span", {
        delay: 24200,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h48", {
        delay: 24200,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#limbo .character-container.ariadne .character .skull", {
        delay: 23900,
        duration: 200,
        property: "opacity",
        start: 0,
        end: 1
    });
    // a.animate("#limbo .character-container.ariadne", {
    //     delay: 24100,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.ariadne", {
    //     delay: 24100,
    //     duration: 500,
    //     property: "top",
    //     start: 460,
    //     end: 0
    // });
    a.animate(".adjuster1", {
        delay: 24700,
        duration: 300,
        property: "padding-top",
        end: 700
    });
    // a.animate("#level3 .character-container.ariadne .character .zzz-container-container", {
    //     delay: 25400,
    //     duration: 200,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    a.animate("#level3 .h48", {
        delay: 25600,
        duration: 100,
        property: "top",
        start: 180,
        end: 140
    });


    a.animate("#level3 .h48 span", {
        delay: 25600,
        duration: 100,
        property: "opacity",
        start: 0,
        end: 1
    });

 //    a.animate("#level3 .level-name #contact2", {
 //        delay: 25600,
 //        duration: 300,
 //        property: "opacity",
 //        start: 0,
 //        end: 1
 //    });

     
 a.animate("#level3 .character-container", {
        delay: 24700,
        duration: 100,
        property: "top",
        start: 460,
        end: -30000
    });

 a.animate("#level3 .level-name .name", {
        delay: 24700,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });


 a.animate("#level3 .level-name span", {
        delay: 24700,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });

 a.animate("#level3 .level-name .nam", {
        delay: 24700,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });


    a.animate("#level3 .h48 span", {
        delay: 25900,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level3 .h48", {
        delay: 25900,
        duration: 900,
        property: "opacity",
        end: 0
    });
    // a.animate("#level3 .character-container.ariadne .character, #level3 .character-container.fischer .character, #level3 .overseer-container.eames .character", {
    //     delay: 25950,
    //     duration: 500,
    //     property: "margin-top",
    //     end: -600
    // });
    // a.animate("#level3 .character-container.ariadne .character, #level3 .character-container.fischer .character, #level3 .overseer-container.eames .character", {
    //     delay: 25950,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    a.animate("#level3 .wires-container", {
        delay: 26E3,
        duration: 400,
        property: "opacity",
        start: 1,
        end: 0
    });

    a.animate("#level2 .level-name .name", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });


 a.animate("#level2 .level-name span", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });

 a.animate("#level2 .level-name .nam", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });

    a.animate(".adjuster2", {
        delay: 26400,
        duration: 300,
        property: "padding-top",
        end: 700
    });

    a.animate("#level2 .character-container", {
        delay: 24700,
        duration: 100,
        property: "top",
        start: 460,
        end: -30000
    });
    a.animate("#level2 .character-container.saito .character .zzz-container .zzz", {
        delay: 26400,
        duration: 10,
        property: "top",
        start: 0,
        end: -1E3
    });
    a.animate("#level2 .character-container.ariadne .character .zzz-container-container, #level2 .character-container.eames .character .zzz-container-container, #level2 .character-container.fischer .character .zzz-container-container", {
        delay: 26700,
        duration: 200,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate("#level2 .h45", {
        delay: 26900,
        duration: 300,
        property: "top",
        start: 180,
        end: 140
    });
    a.animate("#level2 .h45 span", {
        delay: 26900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level2 .h45 span", {
        delay: 27300,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#level2 .h45", {
        delay: 27300,
        duration: 300,
        property: "opacity",
        end: 0
    });
    // a.animate("#level2 .character-container.ariadne", {
    //     delay: 27100,
    //     duration: 500,
    //     property: "margin-top",
    //     end: -600
    // });
    // a.animate("#level2 .character-container.fischer", {
    //     delay: 27100,
    //     duration: 500,
    //     property: "margin-top",
    //     end: -600
    // });
    // a.animate("#level2 .character-container.eames", {
    //     delay: 27100,
    //     duration: 500,
    //     property: "margin-top",
    //     end: -600
    // });
    // a.animate("#level2 .overseer-container.arthur", {
    //     delay: 27100,
    //     duration: 500,
    //     property: "margin-top",
    //     end: -600
    // });
    // a.animate("#level2 .character-container.ariadne .character, #level2 .character-container.fischer .character, #level2 .character-container.eames .character, #level2 .overseer-container.arthur .character", {
    //     delay: 27100,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#level2 .wires-container", {
    //     delay: 27150,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    a.animate(".adjuster3", {
        delay: 27600,
        duration: 300,
        property: "padding-top",
        end: 700
    });
a.animate("#level1 .character-container", {
        delay: 24700,
        duration: 100,
        property: "top",
        start: 460,
        end: -30000
    });
        a.animate("#level1 .level-name .name", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });


 a.animate("#level1 .level-name span", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });

 a.animate("#level1 .level-name .nam", {
        delay: 26200,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });


    a.animate("#level1 .character-container.saito .character .zzz-container .zzz", {
        delay: 26400,
        duration: 10,
        property: "top",
        start: 0,
        end: -1E3
    });
    a.animate("#level1 .character-container.ariadne .character .zzz-container-container, #level1 .character-container.eames .character .zzz-container-container, #level1 .character-container.fischer .character .zzz-container-container, #level1 .character-container.arthur .character .zzz-container-container", {
        delay: 27900,
        duration: 200,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate("#level1 .h46", {
        delay: 28000,
        duration: 600,
        property: "top",
        start: 200,
        end: 160
    });
    a.animate("#level1 .h46 span", {
        delay: 28000,
        duration: 100,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#level1 .h46 span", {
        delay: 28400,
        duration: 600,
        property: "margin-top",
        end: -50
    });
    a.animate("#level1 .h46", {
        delay: 28800,
        duration: 600,
        property: "opacity",
        end: 0
    });
    a.animate("#level1 .wires-container", {
        delay: 28400,
        duration: 400,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate(".adjuster4", {
        delay: 28800,
        duration: 600,
        property: "margin-top",
        end: -2100
    });
    a.animate("#limbo .h49", {
        delay: 29500,
        duration: 300,
        property: "top",
        start: 200,
        end: 160
    
    });

    a.animate("#limbo .character-container", {
        delay: 29200,
        duration: 100,
        property: "top",
        start: 460,
        end: -30000
    });
    
    a.animate("#limbo .level-name ", {
        delay: 29000,
        duration: 300,
        property: "opacity",
        start: 0.92,
        end: 0
    });


    a.animate("#limbo .h49 span", {
        delay: 29500,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#limbo .h49 span", {
        delay: 29900,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#limbo .h49", {
        delay: 29900,
        duration: 900,
        property: "opacity",
        end: 0
    });
    // a.animate("#limbo .character-container.saito .character", {
    //     delay: 29700,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    // a.animate("#limbo .character-container.saito .character .skull, #limbo .character-container.cobb .character .skull", {
    //     delay: 30200,
    //     duration: 200,
    //     property: "opacity",
    //     start: 0,
    //     end: 1
    // });
    // a.animate("#limbo .character-container.saito, #limbo .character-container.cobb", {
    //     delay: 30400,
    //     duration: 400,
    //     property: "opacity",
    //     start: 1,
    //     end: 0
    // });
    // a.animate("#limbo .character-container.saito, #limbo .character-container.cobb", {
    //     delay: 30400,
    //     duration: 500,
    //     property: "top",
    //     start: 460,
    //     end: 0
    // });
    a.animate(".adjuster2", {
        delay: 30800,
        duration: 1200,
        property: "margin-top",
        end: 2800
    });
    a.animate("#reality .level-name", {
        delay: 30000,
        duration: 20,
        property: "opacity",
        start: 0.6,
        end: 0
    });

    a.animate("#reality .character-container", {
        delay: 30000,
        duration: 20,
        property: "top",
        end: -1500
    });


    a.animate("#reality .air-hostess .character", {
        delay: 30200,
        duration: 20,
        property: "left",
        end: 1500
    });
    // a.animate("#level3 .character-container .character, #level2 .character-container .character, #level1 .character-container .character, #level1 .overseer-container .character", {
    //     delay: 30800,
    //     duration: 20,
    //     property: "left",
    //     end: 1580
    // });
    a.animate("#reality .h33", {
        delay: 32E3,
        duration: 300,
        property: "top",
        start: 200,
        end: 150
    });
    a.animate("#reality .h33 span", {
        delay: 32E3,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h33 span", {
        delay: 32500,
        duration: 300,
        property: "margin-top",
        end: -50
    });
    a.animate("#reality .h33", {
        delay: 32500,
        duration: 300,
        property: "opacity",
        end: 0
    });
    a.animate("#reality .character-container .character .zzz-container-container", {
        delay: 32100,
        duration: 200,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate("#reality .wires-container", {
        delay: 32200,
        duration: 200,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate("#reality .character-container.yusuf .character", {
        delay: 32400,
        duration: 200,
        property: "top",
        start: 0,
        end: 120
    });
    a.animate("#reality .h34", {
        delay: 32800,
        duration: 300,
        property: "top",
        start: 300,
        end: 150
    });
    a.animate("#reality .h34 span", {
        delay: 32800,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h34 span", {
        delay: 33300,
        duration: 300,
        property: "margin-top",
        end: -150
    });
    a.animate("#reality .h34", {
        delay: 33300,
        duration: 500,
        property: "opacity",
        end: 0
    });
    a.animate("#reality .character-container, #reality .level-name .name, #reality .bg, .reality-clock-wrapper, #level1, #level2", {
        delay: 32800,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    });
    a.animate("#reality .h35", {
        delay: 33600,
        duration: 300,
        property: "top",
        start: 250,
        end: 200
    });
    a.animate("#reality .h35 span", {
        delay: 33600,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h37", {
        delay: 33900,
        duration: 300,
        property: "top",
        start: 400,
        end: 350
    });
    a.animate("#reality .h37 span", {
        delay: 33900,
        duration: 300,
        property: "opacity",
        start: 0,
        end: 1
    });
    a.animate("#reality .h37 .share-arrow", {
        delay: 34300,
        duration: 400,
        property: "top",
        start: 60,
        end: 260
    });
    a.animate("#reality .h37 .share-arrow", {
        delay: 34300,
        duration: 300,
        property: "opacity",
        start: 1,
        end: 0
    })
});