const setBanner = () => {
    const bannerImg = document.getElementById("banner-img")

    document.getElementById("banner").style.height = `${window.innerHeight}px`

    //if (window.innerWidth < 550 && window.innerHeight > 825) {
        //document.getElementById("banner-img").src = "./walkway-1050x1575.png";
    //} else if (window.innerWidth < 550) {
        //document.getElementById("banner-img").src = "./walkway-550x825.png";
    //} else if (window.innerWidth >= 550 && window.innerWidth <= 1050) {
        //document.getElementById("banner-img").src = "./walkway-1050x1575.png";
    //} else if (window.innerHeight > 900) {
        //document.getElementById("banner-img").src = "./walkway-1950x1097-v4.png";
    //} 

    //if (window.innerHeight <= 800) {
        //bannerImg.src = "./images/lake-1422x800.png";
    //} else if (window.innerHeight <= 900) {
        //bannerImg.src = "./images/lake-1600x900.png";
    //} else if (window.innerHeight <= 1080) {
        //bannerImg.src = "./images/lake-1920x1080.png";
    //} else if (window.innerHeight <= 1440) {
        //bannerImg.src = "./images/lake-2560x1440.png";
    //} else if (window.innerHeight <= 

    if (window.innerWidth <= 420 && window.innerHeight <= 825) {
        bannerImg.src = "./images/lake-464x825.png";
    } else if (window.innerHeight <= 1080) {
        bannerImg.src = "./images/lake-1920x1080.png";
    } else if (window.innerHeight <= 1440) {
        bannerImg.src = "./images/lake-2560x1440.png";
    } else if (window.innerHeight <= 2160) {
        bannerImg.src = "./images/lake-3841x2160.png";
    }
        
}

const setNavbar = () => {
    if (window.innerWidth < 720) {
        document.getElementById("navbar").className = "hidden";
        document.getElementById("navbar-mobile").className = "";
    } else {
        document.getElementById("navbar").className = "";
        document.getElementById("navbar-mobile").className = "hidden";
    }
        
}

const toggleDropdownMenu = () => {
    const dropdownMenu = document.getElementById("dropdown-menu") 
    if (dropdownMenu.className === "hidden") dropdownMenu.className = "";
    else dropdownMenu.className = "hidden";
}

const toggleDropdownOnMenuClick = () => {
    document.getElementById("navbar-mobile__menu").addEventListener("click", toggleDropdownMenu);
}

const closeDropdownMenu = () => {
    const dropdownMenu = document.getElementById("dropdown-menu") 
    if (dropdownMenu.className === "") dropdownMenu.className = "hidden";
}

const closeDropdownOnWindowResize = () => {
    // Dropdown menu should not display if the normal navbar is being displayed
    if (window.innerWidth >= 620) closeDropdownMenu();
}

const closeDropdownOnClick = () => {
    document.body.addEventListener("click", e => {
        if (!document.getElementById("navbar-mobile__menu").contains(e.target)) {
            closeDropdownMenu();
        }
    })
}

setBanner();
setNavbar();
toggleDropdownOnMenuClick();
closeDropdownOnClick();

window.onresize = () => {
    setBanner();
    setNavbar();
    closeDropdownOnWindowResize();
}
