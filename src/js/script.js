let navElem = document.querySelector('nav');

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? navElem.classList.add('fix') : navElem.classList.remove('fix');
});

let tabChangeClass = (items) => {
    items.forEach((elem => {
        elem.addEventListener('click', () => {
            items.forEach(elem => elem.classList.remove('active'))
            elem.classList.add('active')
            document.querySelector('aside')?.classList.remove('custom-visible')
            showAside.classList.remove('hidden')
        })
    }))
}

window.onload = ()=>{
    let navItemsELem = document.querySelectorAll('nav ul a')
    navItemsELem && tabChangeClass(navItemsELem);
    let asideItemsElem = document.querySelectorAll('aside ul a')
    asideItemsElem && tabChangeClass(asideItemsElem)
    window.innerWidth < 993 && headerElem.classList.add('custom-bg')
}

let showAside = document.getElementById('show-aside')
let asideElem = document.querySelector('aside')
showAside.addEventListener('click',()=>{
    asideElem.classList.remove('opacity-0')
    asideElem.classList.add('custom-visible')
    showAside.classList.add('hidden')
})

let closeAside = document.querySelector('aside ul #close-aside')
closeAside && closeAside.addEventListener('click',()=>{
    asideElem.classList.remove('custom-visible')
    showAside.classList.remove('hidden')
})

let headerElem = document.querySelector('#about-me')
window.addEventListener('resize',()=>{
    window.innerWidth < 993 ? headerElem.classList.add('custom-bg') : headerElem.classList.remove('custom-bg')
})

