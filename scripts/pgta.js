function accionParaCuandoEllaDigaQueSi() {
            alert('soy el hombre mas feliz del mundo <3');
        }

        function mueveElBoton() {
            width = window.innerWidth;
            height = window.innerHeight;

            newWidth = (Math.random() * width);
            newHeight = (Math.random() * height);

            document.getElementById('btnNo').style.position = "absolute";
            document.getElementById('btnNo').style.left = newWidth + "px";
            document.getElementById('btnNo').style.top = newHeight + "px";
        }