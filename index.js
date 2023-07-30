function currentTime(){
    let date= new Date(); /*extrae el tiempo actual*/
    let hh= date.getHours();
    let mm= date.getMinutes();
    let ss= date.getSeconds();


    hh =(hh<10)? "0" +hh:hh;   /* () es la condicion, ? es un "if" y el : es "else"*/
    mm =(mm<10)? "0" +mm:mm;   /* () es la condicion, ? es un "if" y el : es "else"*/
    ss =(ss<10)? "0" +ss:ss;   /* () es la condicion, ? es un "if" y el : es "else"*/

    let time= hh+":"+mm + ":"+ ss ;
    let watch= document.querySelector('#watch')
  
    watch.innerHTML = time;
    watch1.innerHTML=time;
    
}
setInterval(currentTime, 1000);
