const posicaoSuperiorInicial = 70,
      posicaoEsquerdaInicial = 70,
      posicaoSuperFinal = 500,
      posicaoEsquerdaFinal = 500,
      anguloInicial = 0,
      anguloFinal = 500,
      imgAvatar = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputerStyle(imgAvatar),
      txtPixel = document.getElementById("txtPixel");

var posicaoSuperior = 70,
        posicaoEsquerda = 70,
        topAvatar,
        leftAvatar;
        
        imgAvatar.style.position = "absolute";
        imgAvatar.style.top = posicaoSuperior + "px";
        imgAvatar.style.left = posicaoEsquerda + "px";

        function getTopStyle(elementToGet) {
            var styleElement = window.getComputedStyle(elementToGet);
            return parent(styleElement.getPropertyValue('top').replace("px",''));
        }

        function getLeftStyle(elementToGet) {
            var styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('laft').replace("px",''));
        }

        function getLeftStyle(elementToGet) {
            var styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('laft').replace("px",''));
        }

        function moverParaEsquerda() {
            console.clear();
            console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
            leftAvatar = getLeftStyle(imgAvatar);
            if (leftAvatar > posicaoEsquerdaInicial) {
               posicaoEsquerda -= parseInt(txtPixel.value);
               if (posicaoEsquerda < posicaoEsquerdaInicial) { 
                   posicaoEsquerda = posicaoEsquerdaInicial;
                }
                imgAvatar.style.left = posicaoEsquerda + "px"; 
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para esquerda. Tente outro botao");
            }
            console.log("Posicao de avatar a esquerda depois: ", imgAvatar.style.left);
        }

        
        function moverParaDireita() {
            console.clear();
            console.log("Posição do avatar à direita antes: ", imgAvatar.style.left);
            leftAvatar = getLeftStyle(imgAvatar);
            if (leftAvatar < posicaoEsquerdaFinal) {
                posicaoDireita += parseInt(txtPixel.value);
            if (posicaoDireita > posicaoEsquerdaFinal) {
            }
                imgAvatar.style.left = posicaoEsquerda + "px";
            } else {
            console.error("Ops! Chegou ao limite e nao e possivel mais mover para direita. Tente outro botao");
            }
            console.log("Posicao de avatar a direita", imgAvatar.style.left);
        }

        function moverParaCima() {
            console.clear();
            console.log("Posição do avatar antes: ", imgAvatar.style.top);
            topAvatar = getLeftStyle(imgAvatar);
            if (topAvatar > posicaoSuperiorInicial) {
                posicaoSuperior -= parent(txtPixel.value);
            if (posicaoDireita < posicaoEsquerdaFinal) {
                posicaoSuperior = posicaoSuperiorInicial;
            }
                imgAvatar.style.top = posicaoSuperior + "px";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para direita. Tente outro botao");
            }
            console.log("Posicao de avatar a direita", imgAvatar.style.top);
        }

        function moverParaBaixo() {
            console.clear();
            console.log("Posição superior do avatar à antes: ", imgAvatar.style.top);
            topAvatar = getLeftStyle(imgAvatar);
            if (topAvatar < posicaoSuperFinal) {
                posicaoSuperior += parent(txtPixel.value);
            if (posicaoSuperior > posicaoSuperiorFinal) {
                posicaoSuperior = posicaoSuperiorFinal;
            }
                imgAvatar.style.top = posicaoSuperior + "px";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para direita. Tente outro botao");
            }
            console.log("Posicao de avatar a direita", imgAvatar.style.top);
        }

        function girarHorario() {
            console.clear();
            console.log("Angulo do avatar antes: ", AnguloAvatar + "deg");
            if (anguloAvatar < anguloFinal) {
                anguloAvatar += parseInt(txtPixel.value);
                if (anguloAvatar > anguloFinal) {
                    anguloAvatar = anguloFinal;
                }
                imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para esquerda. Tente outro botao");
            }
            console.log("Angulo do avatr depois: ", anguloAvatar + "deg");
        }    

        function slideImagens() {
            var img = document.getElementById("imgAvatar")
            img.style.transition = "margin-left  100ms is ease-in-out"
            img.style.marginLeft = "100px"
        }

        const slides = document.querySelectorAll(".slide");
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
            if (i === index) {
            slide.style.transform = "translateX(0)";
        } else {

            slide.style.transform = "translateX(-100%)";

        } }); }

        function nextSlide() {
           currentSlide = (currentSlide + 1) % slides.length;
           showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
            showSlide(currentSlide);

        function aumentar() {
            var tamanhoAtual = imgAvatar.clientHeight;
            var novoTamanho = tamanhoAtual * 1.2;
            var tamanhoMaximo = 500;
            imgAvatar.style.width = novoTamanho + "px";

            if (novoTamho <= tamanhoMaximo){
                imgAvatar.style.width = novoTamanho + "px";
            } else{
                alert("a imagem atingiu o valor maximo!")
            }
        }   

        function diminuir(){
            var tamanhoAtual = imgAvatar.clientWidth;
            var tamanhoMinimo = 100;
            var novoTamanho = tamanhoAtual * 0.8;
            
            if(novoTamanho >= tamanhoMinimo){
                imgAvatar.style.width = novoTamanho + "px";
            }else {
                alert("a imagem atingiu o valor minimo")
            }
        }