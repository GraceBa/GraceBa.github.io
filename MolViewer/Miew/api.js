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

/*    document.getElementById('rotation').addEventListener('click', function () {
        viewer.set('autoRotation', 0.2 * !viewer.get('autoRotation'));
    });

    document.getElementById('axes').addEventListener('click', function () {
        viewer.set({
            axes: !viewer.get('axes'),
            fps: !viewer.get('fps'),
        });
    });

    document.getElementById('load-4xn6').addEventListener('click', function () {
        viewer.unload();
        viewer.load('mmtf:4XN6');
    });

    document.getElementById('licorice').addEventListener('click', function () {
        viewer.rep({
            mode: 'LC',
            colorer: 'EL'
        });
    });

    document.getElementById('metallic').addEventListener('click', function () {
        viewer.rep({ material: 'ME' });
    });

    document.getElementById('load-2hhb').addEventListener('click', function () {
        viewer.unload();
        viewer.load('2hhb').then(function () {
            viewer.rep(0, { mode: 'TU', colorer: 'CH' });
            viewer.rep(1, {
                selector: 'chain A', mode: 'CS', colorer: ['UN', { color: 0x00FF00 }], material: 'TR'
            });
            viewer.rep(2, { selector: 'sequence 52:72', mode: ['TU', { radius: 0.8 }], colorer: 'UN' });
            viewer.rep(3, { selector: 'sequence 52:72 and not name C,N,O', mode: 'LC', colorer: 'EL' });
        });
    }); */

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