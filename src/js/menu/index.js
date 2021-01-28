const showMenu = () => {
    const get = (id) => {
        return document.querySelector(id);
    };

    function activeMenu(e) {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
        } else {
            e.target.classList.add("active");
        }
    }
    get(".menu__btn").addEventListener("click", activeMenu);
};
showMenu();
export default showMenu;
