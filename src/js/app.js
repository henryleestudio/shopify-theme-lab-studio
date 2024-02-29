import Glide from '@glidejs/glide'

const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    // gap: 40,
    // autoplay: 2000,
    hoverpause: true,
    breakpoints: {
        1200: {
            focusAt: 'center',
            perView:3
        },
        800: {
            focusAt: 'center',
            perView:2
        }
    }
}

new Glide('.glide', config).mount()



