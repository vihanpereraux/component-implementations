function showError(errId, errMsg) {
    // handle critical errors here if needed
}

function patchInitialized(patch) {
    // You can now access the patch object (patch), register variable watchers and so on
}

function patchFinishedLoading(patch) {
    // The patch is ready now, all assets have been loaded
}

document.addEventListener("CABLES.jsLoaded", function (event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        "prefixAssetPath": "",
        "assetPath": "assets/",
        "jsPath": "js/",
        "glCanvasId": "glcanvas",
        "glCanvasResizeToWindow": true,
        "onError": showError,
        "onPatchLoaded": patchInitialized,
        "onFinishedLoading": patchFinishedLoading,
        "canvas": { "alpha": true, "premultipliedAlpha": true } // make canvas transparent
    });
});

// disable rubberband effect on mobile devices
document.getElementById('glcanvas').addEventListener('touchmove', (e) => { e.preventDefault(); }, false);


let openers = document.getElementsByClassName('openers');
let titles = document.getElementsByClassName('title');

for (let i = 0; i < openers.length; i++) {
    openers[i].classList.add("reveal-animation");
}

setTimeout(() => {
    for (let i = 0; i < openers.length; i++) {
        openers[i].style.height = "0%";
        openers[i].classList.remove("reveal-animation");
        // openers[i].style.display = "none";
    }
}, 3000);


titles[0].addEventListener('mouseover', function () {
    // alert('fffff');
})

