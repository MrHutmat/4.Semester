

const formatNumber = (number) => {
    let num = String(Math.floor(number));
    let len = num.toString().length;
    // let result = '';
    // let count = 1;

    // for (let i = len -1; i >= 0; i--) {
    //     if (count % 3 === 0 && count !== 0 && i !== 0) {
    //         result = ',' + result;
    //     } 
    //     count++;
    // }


    for (let i = len - 3; i > 0; i -= 3) {
        num = num.slice(0, i) + ',' + num.slice(i);



    return num;
    
    }
}




export { formatNumber };