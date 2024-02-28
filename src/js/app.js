import Glide from '@glidejs/glide'

const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    // autoplay: 2000,
    hoverpause: true
}

new Glide('.glide', config).mount()

