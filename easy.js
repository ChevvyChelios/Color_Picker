
// let body = document.getElementById('body');

function changeColor(){
    var c1 = Math.floor(Math.random() * 256);
    var c2 = Math.floor(Math.random() * 256);
    var c3 = Math.floor(Math.random() * 256);
    var c11 = Math.floor(Math.random() * 256);
    var c12 = Math.floor(Math.random() * 256);
    var c13 = Math.floor(Math.random() * 256);
    var de = Math.floor(Math.random() * 361);
    console.log(c1,c2,c3);
    document.body.style.background = 'linear-gradient('+de+'deg, rgb('+c1+',' +c2+', '+c3+'),'+'rgb('+c11+',' +c12+', '+c13+'))';
    // body.style.backgroundColor= 'rgb('+c1+',' +c2+', '+c3+')';
}