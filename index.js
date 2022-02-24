let currentstep=1;
document.getElementById('step-1').classList.add('activestep');
document.getElementById('page-1').style.display='flex'
const bar = document.getElementsByClassName('statusbar')

function submit1(){
    let pass1 = document.getElementById('pass1').value;
    let pass2 = document.getElementById('pass2').value;
    if(pass1!==pass2){
    alert("Confirm password correctly")
    return
    }
    document.getElementById('bar1').classList.add('activestep');
    document.getElementById('step-2').classList.add('activestep');
    document.getElementById('page-1').style.display='none'
    document.getElementById('page-2').style.display='flex'

}
function submit2(){
    document.getElementById('bar2').classList.add('activestep');
    document.getElementById('step-3').classList.add('activestep');
    document.getElementById('page-2').style.display='none';
    document.getElementById('page-3').style.display='flex';

}

function prev1(e){
  
    document.getElementById('bar1').classList.remove('activestep');
    document.getElementById('step-2').classList.remove('activestep');
    document.getElementById('page-2').style.display='none';
    document.getElementById('page-1').style.display='flex';
}
function prev2(){
    document.getElementById('bar2').classList.remove('activestep');
    document.getElementById('step-3').classList.remove('activestep');
    document.getElementById('page-3').style.display='none';
    document.getElementById('page-2').style.display='flex';
}

function submit3(){
    bar[0].style.display='none';
    document.getElementById('page-3').style.display='none'
    document.getElementById('page-4').style.display='flex'
}
