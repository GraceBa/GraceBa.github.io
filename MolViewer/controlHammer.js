AFRAME.registerComponent("foo",{
    init:function() {
        var element = document.querySelector('body');
        var newmarker = document.getElementById('markerInput').value;
        this.marker = document.getElementById(newmarker);
        var newmodel = document.getElementById('modelInput').value;
        var model = document.getElementById(newmarker + newmodel);
        this.markerVisible = false
        var hammertime = new Hammer(element);
        var pinch = new Hammer.Pinch();
        hammertime.add(pinch); // add it to the Manager instance
      
        hammertime.on('pan', (ev) => {
          /*  console.log(ev.scale);
            var newScale = model.getAttribute("scale");
            console.log(newScale);
            document.getElementById('info').innerHTML = ev.scale;*/

            newmarker = document.getElementById('markerInput').value;
            this.marker = document.getElementById(newmarker);
            newmodel = document.getElementById('modelInput').value;
            model = document.getElementById(newmarker + newmodel);
            if (!model) { return;}
            if (!this.markerVisible) { return;}
            let rotation = model.getAttribute("rotation")
            switch(ev.direction) {
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
        }); 
      
        hammertime.on("pinch", (ev) => {
            //document.getElementById('info').innerHTML = ev.scale;
            newmarker = document.getElementById('markerInput').value;
            this.marker = document.getElementById(newmarker);
            newmodel = document.getElementById('modelInput').value;
            model = document.getElementById(newmarker + newmodel);
            if (!model) { return; }
            if (!this.markerVisible) { return; }
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
        });

    },
    tick:function() {
        if (this.marker && this.marker.object3D.visible == true) {
        this.markerVisible = true
        //  console.log(this.markerVisible)
        } else {
        this.markerVisible = false
        }
    }
});
