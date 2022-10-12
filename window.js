
// let index=0;
// const color=["teal","skyblue","violet","orange"];
// const colorbox=document.querySelector(".color-box");

// setInterval(()=>{
//     if(index=== color.length){
//         index=0;
//     }
//     colorbox.style.backgroundColor=color[index];
//     console.log(index,color[index]);
//     index++;
// },1000*3);
//colorbox.style.backgroundColor=color[index];

//colorbox.setAttribute("style",`background-color:${color[index]}`);

//Dry -- Don't Repeat yourself
// -- try to elliminate the repeatation

//     let index=0;
//     const color=["teal","skyblue","violet","orange"];
//     const colorbox=document.querySelector(".color-box");
//     let colorInterval;
//     function start(){
//         console.log("Started...");
//         colorInterval=setInterval(()=>{
//             colorbox.style.backgroundColor=color[index % color.length];
//             index++;
//         },1000*2);
// };

// function stop(){
//     console.log("Stopping.....",colorInterval);
//     clearInterval(colorInterval);
// };


// setTimeout(()=>{
//     console.log("Hello world");
//     setTimeout(()=>{
//         console.log("Awesome...");
//     },1000*2)
// },1000*document.querySelector(".time").value);


//after 4s -- Hello world print 
//after 2s -- Awesome print

let countdown = 11;
document.querySelector(".msg").innerText = --countdown;
setTimeout(() => {
    document.querySelector(".msg").innerText = --countdown;
    setTimeout(() => {
        document.querySelector(".msg").innerText = --countdown;
        setTimeout(() => {
            document.querySelector(".msg").innerText = --countdown;
            setTimeout(() => {
                document.querySelector(".msg").innerText = --countdown;
                setTimeout(() => {
                    document.querySelector(".msg").innerText = --countdown;
                    setTimeout(() => {
                        document.querySelector(".msg").innerText = --countdown;
                        setTimeout(() => {
                            document.querySelector(".msg").innerText = --countdown;
                            setTimeout(() => {
                                document.querySelector(".msg").innerText = --countdown;

                                setTimeout(() => {
                                    document.querySelector(".msg").innerText = --countdown;
                                    setTimeout(() => {
                                        document.querySelector(".msg").innerText = --countdown;
                                        setTimeout(() => {
                                            document.querySelector(".msg").innerText = "Happy New Year!!!";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);