export function openNav() {
    if(window.innerWidth > 500){
        document.getElementById("mySidenav").style.width = "250px";;
        document.getElementById("burger").style.display = "none";
    }
    if(window.innerWidth <= 500){
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("burger").style.display = "none";
    }
}

export function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("burger").style.display = "flex";
}

