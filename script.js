{//masala-01  forda
    const array = [2, 6, 3, 7]
    const arr = []
    for (let i = 0; i < array.length; i++) {
        arr[i] = array[i] ** 2
    }
    console.log(arr);
}
{//masala-01 do whileda
    const array = [2, 6, 3, 7]
    const arr = []
    let i = 0
    while (i < array.length) {
        arr[i] = array[i] ** 2
        i++
    }
    console.log(arr);
}
{//masala-01 do whileda
    const array = [2, 6, 3, 7]
    const arr = []
    let i = 0
    do {
        arr[i] = array[i] ** 2
        i++
    } while (i < array.length)

    console.log(arr);
}

{//masala-02 forda
    const arr = [5, -3, 4, - 6]
    const array = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
    }
    console.log(array);

}
{//masala-02 do while 
    const arr = [5, -3, 4, -6]
    const array = []
    let i = 0
    while (i < arr.length) {
        if (arr[i] < 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
        i++
    }
    console.log(array);

}
{//masala-02 do while 
    const arr = [5, -3, 4, -6]
    const array = []
    let i = 0
    do {
        if (arr[i] < 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
        i++
    } while (i < arr.length)
    console.log(array);

}

{//masala-03  forda 
    const ism = ["madina", "sevara", "gozal"]
    const yangi = []
    for (i = 0; i < ism.length; i++) {
        yangi[i] = ism[i] + "shox"
    }
    console.log(yangi);

}
{//masala-03 do while
    const ism = ["avaz", "sherzot", "laylo"]
    const yangi = []
    let i = 0
    while (i < ism.length) {
        yangi[i] = ism[i] + "shox"
        i++
    }
    console.log(yangi);
}


{ //masala-04 for
    const shart = [true, false, true]
    const NEWshart = []
    for (i = 0; i < shart.length; i++) {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
    }
    console.log(NEWshart);

}
{ //masala 04 while
    const shart = [true, false, true]
    const NEWshart = []
    let i = 0;
    while (i < shart.length) {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
        i++
    }
    console.log(NEWshart);

}
{ //masala 04 do while 
    const shart = [true, false, true]
    const NEWshart = []
    let i = 0;
    do {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
        i++
    } while (i < shart.length)
    console.log(NEWshart);

}
















//sinifda bajarilganlar

// let k = 7;
// let som =0;
// for (let i =1; i <= k; i += 2){
//     sum +=i
// }

// console.log(sum);

// const data = [
//     {
//         name: "John",
//         age: 32,
//         isMarried: true,
//         country: "USA",
//         gender: "male",
//         salary: 4_500
//     },
//     {
//         name: "Ivan",
//         age: 17,
//         isMarried: false,
//         country: "RUSSIA",
//         gender: "male",
//         salary: 1_500
//     },
//     {
//         name: "Laylo",
//         age: 19,
//         isMarried: false,
//         country: "UZBEKISTAN",
//         gender: "female",
//         salary: 1_000
//     },
//     {
//         name: "Selena",
//         age: 29,
//         isMarried: false,
//         country: "USA",
//         gender: "female",
//         salary: 10_000
//     },
//     {
//         name: "Diana",
//         age: 22,
//         isMarried: true,
//         country: "RUSSIA",
//         gender: "female",
//         salary: 2_500
//     },
//     {
//         name: "Teshaboy",
//         age: 26,
//         isMarried: true,
//         country: "UZBEKISTAN",
//         gender: "male",
//         salary: 500
//     },
// ]
// for(let i = 0; i < data.length; i++){
//     // if(data[i].isMarried === false && data[i].gender === "female"){
//     //     console.log(data[i].name);
//     // }
//     if(data[i].country === "UZBEKISTAN" && data[i].salary + data[i.country === "UZBEKISTAN"]){
//         console.log(data[i].salary);
//     }
// }


// const STORE = [
//     {
//         title: "0lma",
//         stock: "5",
//         price: "5_000",
//     },
//     {
//         title: "banan",
//         stock: "2",
//         price: "20_000",
//     },
//     {
//         title: "mandarin",
//         stock: "3",
//         price: "30_000",
//     },

// ]

// let total = 0
// for(let i = 0; i < STORE.length; i++){
//     if(STORE[i].price)
//         total += STORE[i].price
// }
// console.log(total);
