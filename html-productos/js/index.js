        const menuBtn = document.querySelector('.menu-btn');
        const menuItems = document.querySelector('.menu-items');
        const moveScroll = document.getElementById("content_main")

        /* moveScroll.addEventListener("wheel", (e) => {
            e.defaultPrevented();
        moveScroll.scrollLeft += e.deltaY;
        }) */

        menuItems.style.display = "none"

        menuBtn.addEventListener('click', () => {
            menuItems.style.display = (menuItems.style.display === 'flex') ? 'none' : 'flex';
        });

        const menuBtnX = document.querySelector('.menu-btn-2')

        menuBtnX.addEventListener('click', () => {
            menuItems.style.display = "none"
        })