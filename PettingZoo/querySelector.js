window.addEventListener('DOMContentLoaded', (e) => {

    console.log('result of querySelector(".foo")')
    console.log(document.querySelector('.foo'))
    
    console.log('result of querySelectorAll(".foo")')
    document.querySelectorAll('.foo').forEach(e => console.log(e));
    
    console.log('result of querySelector(".bar")')
    console.log(document.querySelector('.bar'))
    
    console.log('result of querySelectorAll(".bar")')
    document.querySelectorAll('.bar').forEach(e => console.log(e));
    
    
    });