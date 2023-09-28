const burger = document.querySelector("#burger");
const menu = document.querySelector("#small_menu");
const wrapper = document.querySelector("#main_wrapper");

burger.addEventListener("click", () => {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        wrapper.classList.remove("pt-18");
        wrapper.classList.add("pt-80");

    } else {
        menu.classList.add("hidden");
        wrapper.classList.add("pt-18");
        wrapper.classList.remove("pt-80");
    }
});