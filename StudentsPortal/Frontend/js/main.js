let navBtn = document.getElementById('navbtn');
let navBtnX = document.getElementById('navclose');
let navTab = document.querySelector('.navigation');
let academisSessionInpt = document.getElementById('academicSession');
let levelInpt = document.getElementById('level');
let userAcadsessionSelect = document.querySelector('#userSelect');
let userLevelSelect = document.querySelector('#userSelect2');
let userAcadsessionValue = document.querySelectorAll('#userSelect p');
let userLevelValue = document.querySelectorAll('#userSelect2 p');


navBtn.addEventListener('click', ()=>{
    navTab.style.display = 'flex';
    navBtn.style.display = 'none'
    navBtnX.style.display = 'block'
})
navBtnX.addEventListener('click', ()=>{
    navTab.style.display = 'none';
    navBtn.style.display = 'block'
    navBtnX.style.display = 'none'
})


academisSessionInpt.addEventListener('click', ()=>{
        userAcadsessionSelect.style.display = 'block';
})

userAcadsessionValue.forEach((userClick)=>{
    userClick.onclick = () => {
        let acadsess = userClick.innerHTML;
        academisSessionInpt.value = acadsess;
        userAcadsessionSelect.style.display = 'none';
    }
})
levelInpt.addEventListener('click', ()=>{
        userLevelSelect.style.display = 'block';
})

userLevelValue.forEach((userClick2)=>{
    userClick2.onclick = () => {
        let userlevel = userClick2.innerHTML;
        levelInpt.value = userlevel;
        userLevelSelect.style.display = 'none';
    }
})