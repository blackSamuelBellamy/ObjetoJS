const header = document.querySelector('header');
const formulario = document.querySelector('.formulario');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const allForm = document.querySelector('.allForm');
const button = document.querySelector('.button');
const resena = document.querySelector('.resena');
const comenzar = document.querySelector('.comenzar');
const blackLayer = document.querySelector('.blackLayer');
const ani = document.querySelector('.ani');
const habitaciones = document.getElementById('habitaciones');
const buscar = document.getElementById('buscar');
const gallery = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();
const swiperWrapper = document.querySelector('.swiper-wrapper');
const comeBack = document.querySelector('.comeBack');
const cantidad = document.querySelector('h4');


let contador = 0;
let valorInput1 = '';
let valorInput2 = '';
let habitacion = '';




//------------------------ Objectos -------

const casas = [
    {
        id: 'casa1',
        piezas: 2,
        metros: 100,
        ubicacion: 'Santiago',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://c4.wallpaperflare.com/wallpaper/327/12/971/arquitectura-casa-moderna-wallpaper-preview.jpg"
    },
    {
        id: 'casa2',
        piezas: 3,
        metros: 100,
        ubicacion: 'Copenhagen',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://images7.alphacoders.com/341/thumb-350-341475.jpg"
    },

    {
        id: 'casa3',
        piezas: 1,
        metros: 100,
        ubicacion: 'Rancagua',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://p4.wallpaperbetter.com/wallpaper/181/147/627/house-4k-images-download-wallpaper-preview.jpg"
    },

    {
        id: 'casa4',
        piezas: 4,
        metros: 100,
        ubicacion: 'roma',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://s1.best-wallpaper.net/wallpaper/m/1706/Germany-houses-villa-trees-sunshine_m.jpg"
    },

    {
        id: 'casa5',
        piezas: 5,
        metros: 100,
        ubicacion: 'viena',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://p4.wallpaperbetter.com/wallpaper/749/437/273/beach-house-4k-8k-sea-wallpaper-preview.jpg"
    },

    {
        id: 'casa6',
        piezas: 6,
        metros: 100,
        ubicacion: 'lima',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://www.gratistodo.com/wp-content/uploads/2017/02/fachadas-de-casas-modernas-16.jpg"
    },

    {
        id: 'casa7',
        piezas: 7,
        metros: 100,
        ubicacion: 'madrid',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://inarquia.es/wp-content/uploads/elementor/thumbs/43bd1426b89afed2c0c586c97dc6a8e3-min-ouit2o3c18j64xq6uye7ew5okk3on09gyoa133z1ko.jpg"
    },

    {
        id: 'casa8',
        piezas: 8,
        metros: 400,
        ubicacion: 'nassau',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://www.republicainmobiliaria.com/wp-content/uploads/2021/02/1x-1-1-1.jpg"
    },

    {
        id: 'casa9',
        piezas: 9,
        metros: 500,
        ubicacion: 'helsinki',
        descripcion: 'Cómoda casa ideal para parejas',
        src: "https://w0.peakpx.com/wallpaper/360/489/HD-wallpaper-pretty-house-architecture-landscapes-houses-flowers-gardens-beautiful-houses.jpg"
    }

]

// funciones

setTimeout(() => {

    header.style.display = 'none';
    resena.style.display = 'flex';


}, 7000)



comenzar.addEventListener('click', () => {

    blackLayer.style.animation = 'leftToRight 1s linear forwards';
    ani.style.animation = 'comingDown .5s linear 1s forwards';
    input1.value = '';
    input2.value = '';
    habitaciones.value = '';
    setTimeout(()=> {
        resena.style.display = 'none';
    },2000)
})



const vanishContent = () => {

    allForm.style.opacity = '0';

    setTimeout(() => {
        allForm.style.display = 'none';
    }, 1000)
}

const noAddString = () => {
    let noString = ` No debes ingresar letras, ni ningún otro valor no numérico`;
    formulario.setAttribute('data-content', noString);
}

const maximoPiezas = () => {
    let topPiezas = ` Tu busqueda excede el número máximo de piezas en este momento`;
    formulario.setAttribute('data-content', topPiezas);
}

const appearContent = () => {

    allForm.style.display = 'flex';

    setTimeout(() => {

        allForm.style.opacity = '1';
    }, 1000)

}


const vanishMessage = () => {
    setTimeout(() => {
        formulario.setAttribute('data-content', '')
    }, 3500);
}

const allInputsFull = () => {
    if (input1.value == '' || input2.value == '' || habitaciones.value == '') {
        let llenarCampos = ` Todos los campos deben estar completados`;
        formulario.setAttribute('data-content', llenarCampos);
        vanishContent();
        setTimeout(appearContent, 4000);
        vanishMessage();
    }
}

const rooms = () => {
    habitaciones.addEventListener('input', () => {
        if (!isNaN(habitaciones.value) && habitaciones.value < 10) {
            habitacion = Math.ceil(habitaciones.value);
            habitaciones.value = habitacion;


            if (habitaciones.value == 0 || habitaciones.value == '') {
                habitacion = '';
                habitaciones.value = habitacion;
            }

        } else if (isNaN(habitaciones.value)) {
            habitaciones.value = habitacion;

            vanishContent();
            noAddString();
            vanishMessage();
            setTimeout(appearContent, 4000);
        }

        else if (habitaciones.value > 9) {
            habitaciones.value = habitacion;

            vanishContent();
            maximoPiezas();
            vanishMessage();
            setTimeout(appearContent, 4000);
        }
    })


}

const validationInput = (input, valorInput) => {

    input.addEventListener('input', () => {


        if (!isNaN(input.value) && input.value <= 500) {

            valorInput = Math.ceil(input.value);
            input.value = valorInput;


            if (input.value == 0 || input.value == '') {
                valorInput = '';
                input.value = valorInput;
            }
        }



        else if (isNaN(input.value)) {
            noAddString();
            vanishContent();
            vanishMessage();
            setTimeout(appearContent, 4000);
            input.value = valorInput;
        }

        else if (input.value > 500) {
            let maximoMetros = ` La cantidad de metros cuadrados solicitada excede nuestra oferta`;
            formulario.setAttribute('data-content', maximoMetros);
            vanishContent();
            vanishMessage();
            setTimeout(appearContent, 4000);
            input.value = valorInput;
        }


    })



}

const filtrado = (obj, room, min, max) => {
    obj.filter(casa => {
        if (casa.piezas >= room) {
            
            if (casa.metros >= min && casa.metros <= max) {

                contador ++;
                let swiperSlide = document.createElement('div');
                swiperSlide.classList.add('swiper-slide');
                swiperSlide.setAttribute('data-name', casa.ubicacion);
                swiperSlide.setAttribute('data-room', `${casa.piezas} Habitaciones`);
                let img = document.createElement('img');
                img.setAttribute('src', casa.src);
                swiperSlide.appendChild(img);
                fragment.appendChild(swiperSlide);
            }
        }

    })
    contador == 1 ? cantidad.textContent = `Tu busqueda arrojó ${contador} Casa`:
                    cantidad.textContent = `Tu busqueda arrojó ${contador} Casas`;
                    
    swiperWrapper.appendChild(fragment);

    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 360,
          stretch: 50,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        },
        loop: true
    });
} 


const submit = () => {

    buscar.addEventListener('click', () => {

        if ((input1.value !== '') && (input2.value !== '') && (habitaciones.value !== '')) {

            if (Number(input1.value) <= Number(input2.value)) {
                gallery.style.animation = 'final .5s linear forwards';
                blackLayer.style.opacity = '0';
                filtrado(casas, habitaciones.value, input1.value, input2.value);
            }
        }

        allInputsFull();

        if (Number(input1.value) > Number(input2.value)) {
            vanishContent();
            let menorEsMayor = ` El mínimo de metros cuadrados no puede ser 
                                superior al máximo de metros cuadrados`;

            formulario.setAttribute('data-content', menorEsMayor)
            vanishMessage();
            setTimeout(appearContent, 4000);
            input1.value = '';
            input2.value = '';
        }


        valorInput1 = input1.value;
        valorInput2 = input2.value;


        input1.value = '';
        input2.value = '';
        habitaciones.value = '';

    })
}


    comeBack.addEventListener('click', ()=>{
        gallery.style.animation = 'none'
        blackLayer.style.opacity = '1';
    })



validationInput(input1, valorInput1);
validationInput(input2, valorInput2);
rooms();
submit();




