const clock = document.querySelector('.clock');


const tick = () => {

    const now = new Date();

    const h = now.getHours();

    const m = now.getMinutes();

    const s = now.getSeconds();

      //console.log(h, m, s);
      //lets live in console and display our clock in browser

    const html = 
    `
    <span>${h}</span>  : 
    <span>${m}</span>  : 
    <span>${s}</span>
       
    `

    clock.innerHTML = html;
  
};

setInterval(tick, 1000);



//lets create a function that will be updating 
//a clock in Seconds