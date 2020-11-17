var current_layout = 2;
var zxVM = null;
var demoModeTimeout = 60;
demoscene_playlist = [
    emage_trashe,
    emage_condommed,
    rush_mental_masturbations,
    codebusters_eyeache,
];
var playlist_cursor = -1;


$(document).ready(function() {
    // no sound due to chrome audiocontext policy
    bootSpectrum();
    setLayout(current_layout);
    startDemoModeTimeoutTimer();
    initEventHandlers();
});


// callback used by jVGS
function jxAction(action, data, cb) {}

function loadRemoteUrl(url) {
    JSZipUtils.getBinaryContent(url, function(error, arrayBuffer) {
        if (error) {
            alert("error", error);
        } else {
            loadFromArrayBuffer(arrayBuffer, url);
        }
    });
}

function loadFromArrayBuffer(arrayBuffer, filename) {
    var k = current_layout;
    if (k === 1000) {
        k = 3;
    }
    setLayout(current_layout);

    // Scroll window to center
    var wh = $(window).height();
    var gh = 224 * k + 28;

    if (zxVM) {
        zxVM.focus();
    }

    // machine_type_id
    // 3 128 basic
    // 6 trdos
    var e = zxVM;
    var b = 1;
    var c = false;
    var d = false;

    e.loaded_binary = {
        machine_type_id: 6,
        binary: filename,
    };
    e.setup_machine();

    var g = arrayBuffer;
    var h = filename.split(".").pop().toLowerCase();
    console.log("ext:", h);
    AA = arrayBuffer;
    if ("zip" === h) {
        try {
            var k = new JSZip(g),
                l = "",
                m = 0,
                n;
            for (n in k.files) {
                var t = 0,
                    q = n.toLowerCase(),
                    h = n.split(".").pop().toLowerCase();
                switch (h) {
                    case "scl":
                    case "fdi":
                    case "trd":
                        t = 100;
                        break;
                    case "tap":
                        t = 50;
                        break;
                    case "tzx":
                    case "z80":
                        t = 25;
                        break;
                    case "rom":
                        t = 12;
                        break;
                    default:
                        t = 0;
                }
                0 < t &&
                    t >= m &&
                    (t === m ? q < l && ((l = n), (m = t)) : ((l = n), (m = t)));
            }
            if (m > 0) {
                var r = k.file(l).asUint8Array();
                e.loadBinaryData(r, l.split(".").pop().toLowerCase(), b);
            } else alert("No supported images found in ZIP file");
        } catch (z) {
            alert("Broken ZIP file");
        }
    } else {
        e.loadBinaryData(new Uint8Array(g), h, b);
        e.exec("loadcontinue");
    }
}

function setLayout(z) {
    console.log("setLayout", z);
    if (z === 1000) {
        current_layout = z;
    } else {
        current_layout = Math.max(1, Math.min(3, z));
    }
    updateLayout();
}

function updateLayout() {
    $("#speccy_container").css("float", "none");
    z = current_layout;
    if (z === 1000) {
        setAppletFullSize(1, z);
    } else {
        setAppletFullSize(0, z);
    }
}

/**
 * Sets up size of applet
 *
 * @param {int} sz 0 = not full-size, 1 = full-size
 * @param {int} cl Size of layout: 0 = auto, 1,2,3 = 1x,2x,3x respectively
 */
function setAppletFullSize(sz, cl) {
    var dx, dy, k;
    var toset = false;
    if (sz == 1) {
        // Make best fit size for fullscreen display
        toset = 1;
        k = Math.min(
            Math.floor($(window).width() / 288),
            Math.floor(($(window).height() - 28) / 224)
        );
        $("#fscontainer").addClass("fsmax");
    } else {
        if (sz == 0) {
            // Detect max available size
            toset = 1;

            k = Math.min(cl, Math.floor(($("#content_wrapper").width() - 140) / 288));
            if (k < 1) {
                k = 1; // Show anyway on small screens
            }

            $("#fscontainer").removeClass("fsmax");
        }
    }
    if (toset) {
        dx = k * 288;
        dy = k * 224 + 28;

        if (zxVM) {
            zxVM.setsize(k);
        }

        //$('#fscontainer').css('width', dx + 'px').css('height', dy + 'px');
        $("#speccy_container")
            .css("width", dx + "px")
            .css("height", dy + "px");
    }
}

function initEventHandlers() {
    $(".its_showtime").bind("click", function() {
        bootDemomodeWithSound();
        shuffle_demoscene_playlist();
    });

    $(".demoscene_player_fullscreen").bind("click", function() {
        setAppletFullSize(1, 1);
    });

    $("#fscontainer").bind("click", function() {
        bootDemomodeWithSound();

        if ($("#fscontainer").hasClass("fsmax")) {
            setAppletFullSize(0, current_layout);
        }
    });

    $(window).resize(function() {
        if ($("#fscontainer").hasClass("fsmax")) {
            setAppletFullSize(1, current_layout);
        } else {
            setAppletFullSize(0, current_layout);
        }
    });
}

function bootSpectrum() {
    if (!window.zxVM) {
        zxVM = new Spectrum();
    }
    zxVM.init(2, "#speccy_container", current_layout);
    zxVM.run();
    zxVM.loaded_binary = { machine_type_id: 6 };
    zxVM.setup_machine();
    zxVM.focus();
}

function bootDemomodeWithSound() {
    // The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
    if (!window.demomodeWithSound) {
        window.demomode = false;
        window.demomodeWithSound = true;
        bootSpectrum();
        demoMode();
    }
}

function startDemoModeTimeoutTimer() {
    var secondsLeft = demoModeTimeout;

    function setAutoplayTimerProgress(percentage) {
        $(".progress-bar")
            .css("width", percentage + "%")
            .attr("aria-valuenow", percentage);
    }

    $(".cancel_autoplay").bind("click", function() {
        setAutoplayTimerProgress(0);
        clearTimeout(window.demoModeTimeoutTimer);
    });

    checkDemoModeTimeout();

    function checkDemoModeTimeout() {
        if (secondsLeft < 0) {
            demoMode();
        } else {
            secondsLeft = secondsLeft - 1;
            setAutoplayTimerProgress(parseInt((100 * secondsLeft) / demoModeTimeout));
            window.demoModeTimeoutTimer = setTimeout(checkDemoModeTimeout, 1000);
        }
    }
}

function emage_trashe() {
    loadRemoteUrl("/zxspectrum/demoscene_player/trashe.zip");
}

function emage_condommed_dump() {
    $.getScript("/zxspectrum/demoscene_player/condommed.js")
        .done(function(script_text, status) {
            zxVM.setState(JSON.parse(condommed_demo_jvgs_state_json));
        });
}

function emage_condommed() {
    loadRemoteUrl("/zxspectrum/demoscene_player/condommed.trd");
}

function rush_mental_masturbations() {
    loadRemoteUrl("/zxspectrum/demoscene_player/mental_masturbations.trd");
}

function codebusters_eyeache() {
    loadRemoteUrl("/zxspectrum/demoscene_player/eyeache.trd");
}

function shuffle_demoscene_playlist() {
    var next_item = playlist_cursor;
    while (next_item === playlist_cursor) {
        next_item = Math.round(Math.random() * 100) % demoscene_playlist.length;
    }
    playlist_cursor = next_item;

    demoscene_playlist[playlist_cursor]();

    setTimeout(function() {
        shuffle_demoscene_playlist();
    }, 10 * 60 * 1000);
}

function demoMode() {
    if (window.demomode) {
        return;
    }
    window.demomode = true;

    shuffle_demoscene_playlist();
}