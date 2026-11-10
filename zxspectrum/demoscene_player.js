var zxVM = null
var current_layout = 2

const demoModeTimeoutSeconds = 30
const shuffleSemoscenePlaylistIntervalSeconds = 20 * 60

demoscene_playlist = [
    emage_trashe,
    emage_condommed,
    rush_mental_masturbations,
    codebusters_eyeache,
];
var playlist_cursor = -1;


// document.addEventListener('DOMContentLoaded', start())
function startDemoscenePlayer() {
    // no sound due to chrome audiocontext policy
    bootSpectrum();
    setLayout(current_layout);
    startDemoModeTimeoutTimer();
    initEventHandlers();
}


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
    var wh = window.innerHeight;
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
    var speccyContainer = document.getElementById("speccy_container");
    if (speccyContainer) {
        speccyContainer.style.float = "none";
    }
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
            Math.floor(window.innerWidth / 288),
            Math.floor((window.innerHeight - 28) / 224)
        );
        var fsContainer = document.getElementById("fscontainer");
        if (fsContainer) {
            fsContainer.classList.add("fsmax");
        }
    } else {
        if (sz == 0) {
            // Detect max available size. Stacked layouts (phone, iPad portrait)
            // size from the player column; side-by-side desktop keeps the
            // previous allowance for the text column.
            toset = 1;
            var contentWrapper = document.getElementById("content_wrapper");
            var fsContainer = document.getElementById("fscontainer");
            var wrapperWidth = contentWrapper ? contentWrapper.clientWidth : window.innerWidth;
            var columnWidth = fsContainer && fsContainer.parentElement ? fsContainer.parentElement.clientWidth : wrapperWidth;
            var viewport = document.documentElement.clientWidth || window.innerWidth;
            var stacked = columnWidth > wrapperWidth * 0.8;
            var room = Math.max(288, viewport - 32);
            if (!stacked && fsContainer && fsContainer.parentElement) {
                var columnLeft = fsContainer.parentElement.getBoundingClientRect().left;
                room = Math.min(room, viewport - Math.max(columnLeft, 0) - 16);
            }
            var available = stacked ? Math.min(room, columnWidth) : Math.min(room, wrapperWidth - 140);
            k = Math.min(cl, Math.floor(available / 288));
            if (k < 1) {
                k = 1; // Show anyway on small screens
            }
            if (fsContainer) {
                fsContainer.classList.remove("fsmax");
            }
        }
    }
    if (toset) {
        dx = k * 288;
        dy = k * 224 + 28;

        if (zxVM) {
            zxVM.setsize(k);
        }

        //$('#fscontainer').css('width', dx + 'px').css('height', dy + 'px');
        var speccyContainer = document.getElementById("speccy_container");
        if (speccyContainer) {
            speccyContainer.style.width = dx + "px";
            speccyContainer.style.height = dy + "px";
        }
    }
}

function initEventHandlers() {
    var itsShowtimeElements = document.querySelectorAll(".its_showtime");
    itsShowtimeElements.forEach(function(element) {
        element.addEventListener("click", function() {
            bootDemomodeWithSound();
            shuffle_demoscene_playlist();
        });
    });

    var fullscreenElements = document.querySelectorAll(".demoscene_player_fullscreen");
    fullscreenElements.forEach(function(element) {
        element.addEventListener("click", function() {
            setAppletFullSize(1, 1);
        });
    });

    var fsContainer = document.getElementById("fscontainer");
    if (fsContainer) {
        fsContainer.addEventListener("click", function() {
            bootDemomodeWithSound();

            if (fsContainer.classList.contains("fsmax")) {
                setAppletFullSize(0, current_layout);
            }
        });
    }

    window.addEventListener("resize", function() {
        var fsContainer = document.getElementById("fscontainer");
        if (fsContainer) {
            if (fsContainer.classList.contains("fsmax")) {
                setAppletFullSize(1, current_layout);
            } else {
                setAppletFullSize(0, current_layout);
            }
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
    var secondsLeft = demoModeTimeoutSeconds;

    function setAutoplayTimerProgress(percentage) {
        var progressBars = document.querySelectorAll(".progress-bar");
        progressBars.forEach(function(bar) {
            bar.style.width = percentage + "%";
            bar.setAttribute("aria-valuenow", percentage);
        });
    }

    var cancelAutoplayElements = document.querySelectorAll(".cancel_autoplay");
    cancelAutoplayElements.forEach(function(element) {
        element.addEventListener("click", function() {
            setAutoplayTimerProgress(0);
            clearTimeout(window.demoModeTimeoutTimer);
            var autoplayTimerBars = document.querySelectorAll(".autoplay-timer-bar");
            autoplayTimerBars.forEach(function(bar) {
                bar.style.display = "none";
            });
        });
    });

    checkDemoModeTimeout();

    function checkDemoModeTimeout() {
        if (secondsLeft < 0) {
            demoMode();
        } else {
            secondsLeft = secondsLeft - 1;
            setAutoplayTimerProgress(parseInt((100 * secondsLeft) / demoModeTimeoutSeconds));
            window.demoModeTimeoutTimer = setTimeout(checkDemoModeTimeout, 1000);
        }
    }
}

function emage_trashe() {
    loadRemoteUrl("/zxspectrum/demoscene_player/trashe.zip");
}

function emage_condommed_dump() {
    var script = document.createElement("script");
    script.src = "/zxspectrum/demoscene_player/condommed.js";
    script.onload = function() {
        zxVM.setState(JSON.parse(condommed_demo_jvgs_state_json));
    };
    document.head.appendChild(script);
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

    var autoplayTimerBars = document.querySelectorAll(".autoplay-timer-bar");
    autoplayTimerBars.forEach(function(bar) {
        bar.style.display = "none";
    });

    var next_item = playlist_cursor;
    while (next_item === playlist_cursor) {
        next_item = Math.round(Math.random() * 100) % demoscene_playlist.length;
    }
    playlist_cursor = next_item;

    demoscene_playlist[playlist_cursor]();

    setTimeout(shuffle_demoscene_playlist, shuffleSemoscenePlaylistIntervalSeconds * 1000);
}

function demoMode() {
    if (window.demomode) {
        return;
    }
    window.demomode = true;

    shuffle_demoscene_playlist();
}