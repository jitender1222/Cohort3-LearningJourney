
// clock using set Interval


// const updateClock = () => {
//     const now = new Date();

//     const hour24= now.getHours();
//     const minute24=now.getMinutes();
//     const seconds24=now.getSeconds();

//     const hour12= ((now.getHours() + 11 ) % 12 ) +1 
//     const ampm= now.getHours() >=12 ? "pm" : "am" 

//     console.log(`24Hours Format : ${hour24}:${minute24}:${seconds24}${ampm}`)
//     console.log(`12Hours Format : ${hour12}:${minute24}:${seconds24}${ampm}`)
// };

// setInterval(updateClock,1000)


// clock using setTimeout

const updateClock = () => {
    const now = new Date();

    const hour24= now.getHours();
    const minute24=now.getMinutes();
    const seconds24=now.getSeconds();

    const hour12= ((now.getHours() + 11 ) % 12 ) +1 
    const ampm= now.getHours() >=12 ? "pm" : "am" 

    console.log(`24Hours Format : ${hour24}:${minute24}:${seconds24}${ampm}`)
    console.log(`12Hours Format : ${hour12}:${minute24}:${seconds24}${ampm}`)

    setTimeout(updateClock,1000);
};

updateClock();

