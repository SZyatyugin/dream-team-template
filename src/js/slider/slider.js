import $ from "jquery";

const slider = () => {
    $(function () {
        $(".articles-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1080,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });
};
slider();
export default slider;
