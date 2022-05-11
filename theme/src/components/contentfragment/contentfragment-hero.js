document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    let heros = document.getElementsByClassName('contentfragment-hero');
    for(let i = 0; i < heros.length; i++) {
        var image = heros[i].getElementsByClassName('cmp-contentfragment__element cmp-contentfragment__element--heroImage');
        for(let x=0; x<image.length; x++) {
            console.log(image[x]);
            let imgs = image[x].getElementsByClassName('cmp-contentfragment__element-value');
            for(let y=0;y<imgs.length;y++){
                var src = imgs[y].innerHTML;
                image[x].innerHTML = `<img class='hero-image' src='${src}' />`;
            }
        }
    }
  })

  