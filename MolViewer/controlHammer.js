AFRAME.registerComponent("manip",{
    init:function() {
        var element = document.querySelector('body');
        var markername = document.getElementById('markerInput').value;
        this.marker = document.getElementById(markername);
        var modelname = document.getElementById('modelInput').value;
        var model = document.getElementById(markername + modelname);
        this.markerVisible = false
        var hammertime = new Hammer(element);
        var pinch = new Hammer.Pinch();
        hammertime.add(pinch); // add it to the Manager instance
      
        hammertime.on('pan', (ev) => {
            markername = document.getElementById('markerInput').value;
            if (!this.markerVisible) { return; }
            var i;

            var currentInstances = document.getElementById(markername).getElementsByTagName('a-entity').length
            if (!document.getElementById('sync').checked) {
                currentInstances = 1;
                modelname = document.getElementById('modelInput').value;
                model = document.getElementById(markername + modelname);
                if (!model) { return;}
            }
            for (i = 0; i < currentInstances; i++) {
                if (document.getElementById('sync').checked) {
                    var identity = document.getElementById(markername).getElementsByTagName('a-entity')[i].id;
                    var model = document.getElementById(identity);
                }
                let rotation = model.getAttribute("rotation")
                switch (ev.direction) {
                    case 2:
                        rotation.y = rotation.y + 4
                        break;
                    case 4:
                        rotation.y = rotation.y - 4
                        break;
                    case 8:
                        rotation.x = rotation.x + 4
                        break;
                    case 16:
                        rotation.x = rotation.x - 4
                        break;
                    default:
                        break;
                }
                model.setAttribute("rotation", rotation);
            }
        }); 
      
        hammertime.on("pinch", (ev) => {
            markername = document.getElementById('markerInput').value;
            if (!this.markerVisible) { return; }
            var i;

            var currentInstances = document.getElementById(markername).getElementsByTagName('a-entity').length
            if (!document.getElementById('sync').checked) {
                currentInstances = 1;
                modelname = document.getElementById('modelInput').value;
                model = document.getElementById(markername + modelname);
                if (!model) { return;}
            }
            for (i = 0; i < currentInstances; i++) {
                if (document.getElementById('sync').checked) {
                    var identity = document.getElementById(markername).getElementsByTagName('a-entity')[i].id;
                    var model = document.getElementById(identity);
                }
                //this bases the new position off the current
                var limit = 1;
                var factor = 0.2
                let originalScale = model.getAttribute('scale');
                if ((ev.scale - limit) * factor + originalScale.x <= 0) {
                    ev.scale = limit;
                }
                if ((ev.scale - limit) * factor + originalScale.x >= 10) {
                    ev.scale = limit;
                }
                let scale = { x: (ev.scale - limit) * factor + originalScale.x, y: (ev.scale - limit) * factor + originalScale.y, z: (ev.scale - limit) * factor + originalScale.z };
                model.setAttribute("scale", scale);
                //alternatively, this scales absolutely
                /*
                let scale = { x: ev.scale, y: ev.scale, z: ev.scale }
                model.setAttribute("scale", scale); 
                */
            }
        });

    },
    tick: function () {
        markername = document.getElementById('markerInput').value;
        this.marker = document.getElementById(markername);
        if (this.marker && this.marker.object3D.visible == true && !document.getElementById('lock').checked) {
            this.markerVisible = true
        } else {
            this.markerVisible = false
        }
    }
});
