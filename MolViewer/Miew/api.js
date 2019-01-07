(function() {
    var viewer = new Miew({
        container: document.getElementsByClassName('miew-container')[0],
        load: '1CRN',
        settings: {
            theme: 'light',
            fps: false,
            axes: false,
            bg: {color: 0xffffff, transparent: true},
        }
    });
    if (viewer.init()) {
        viewer.run();
    }

    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    document.getElementById('fileChange').addEventListener('click', function () {
        var file = document.getElementById("fileSelect").value;
        viewer.unload();
        viewer.load(file);
    });

    var pressEnter = document.getElementById("fileSelect");
    pressEnter.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            document.getElementById("fileChange").click();
        }
    });

})();
