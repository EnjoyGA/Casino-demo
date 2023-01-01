let item1 = document.querySelector('.main__item-1');
let item2 = document.querySelector('.main__item-2');
let item3 = document.querySelector('.main__item-3');
// let item4 = document.querySelector('.main__item-4');
// let item5 = document.querySelector('.main__item-5');
// let item6 = document.querySelector('.main__item-6');
// let item7 = document.querySelector('.main__item-7');
// let item8 = document.querySelector('.main__item-8');
// let item9 = document.querySelector('.main__item-9'); 

let item10 = document.querySelector('.main__item-10');
let item11 = document.querySelector('.main__item-11');
let item12 = document.querySelector('.main__item-12');
// let item13 = document.querySelector('.main__item-13');
// let item14 = document.querySelector('.main__item-14');
// let item15 = document.querySelector('.main__item-15');
// let item16 = document.querySelector('.main__item-16');
// let item17 = document.querySelector('.main__item-17');
// let item18 = document.querySelector('.main__item-18'); 

let item19 = document.querySelector('.main__item-19');
let item20 = document.querySelector('.main__item-20');
let item21 = document.querySelector('.main__item-21');
// let item22 = document.querySelector('.main__item-22');
// let item23 = document.querySelector('.main__item-23');
// let item24 = document.querySelector('.main__item-24');
// let item25 = document.querySelector('.main__item-25');
// let item26 = document.querySelector('.main__item-26');
// let item27 = document.querySelector('.main__item-27'); 

let item1Start = item1.style.top;
let bottom= getComputedStyle(document.querySelector('.main__inner')).height;
// Times the columns will spin
let col1times = 20; //20
let col2times = 35; //35
let col3times = 55; //55
let col1MaxTimes = 0;
let col2MaxTimes = 0;
let col3MaxTimes = 0;
// Sum of all max times
let sumMaxTimes = 0;
let roundSumMaxTimes = 0;
// Times each item passed per column
let column1Passed = 0;
let column2Passed = 0;
let column3Passed = 0;
// Intervals
let column1Interval;
let column2Interval;
let column3Interval;
// Current item
let currentCol1;
let currentCol2;
let currentCol3;
// Score
let score = 0;

function start() {
    document.querySelector('.bottom__start-spin').style.display = 'none';
    // document.getElementById('win').style.display = 'none';
    // Number of extra spins
    add = Math.floor((Math.random() * 10) + 1); // any number 1 - 10
    col1MaxTimes = col1times + add;
    column1Interval = setInterval(function() {
        scrollCol1();
    }, 15);
    add = Math.floor((Math.random() * 10) + 1); // any number 1 - 10
    col2MaxTimes = col2times + add;
    column2Interval = setInterval(function() {
        scrollCol2();
    }, 15);
    add = Math.floor((Math.random() * 10) + 1); // any number 1 - 10
    col3MaxTimes = col3times + add;
    column3Interval = setInterval(function() {
        scrollCol3();
    }, 15);
    sumMaxTimes = col1MaxTimes + col2MaxTimes + col3MaxTimes;
}

function scrollCol1() {
    let i1 = parseInt((item1.style.top).replace('px', ''));
    let i2 = parseInt((item2.style.top).replace('px', ''));
    let i3 = parseInt((item3.style.top).replace('px', ''));
    // let i4 = parseInt((item4.style.top).replace('px', ''));
    // let i5 = parseInt((item5.style.top).replace('px', ''));
    // let i6 = parseInt((item6.style.top).replace('px', ''));
    // let i7 = parseInt((item7.style.top).replace('px', ''));
    // let i8 = parseInt((item8.style.top).replace('px', ''));
    // let i9 = parseInt((item9.style.top).replace('px', ''));

    item1.style.top = (i1 + 15) + 'px';            
    item2.style.top = (i2 + 15) + 'px';
    item3.style.top = (i3 + 15) + 'px';
    // item4.style.top = (i4 + 15) + 'px';            
    // item5.style.top = (i5 + 15) + 'px';
    // item6.style.top = (i6 + 15) + 'px';
    // item7.style.top = (i7 + 15) + 'px';            
    // item8.style.top = (i8 + 15) + 'px';
    // item9.style.top = (i9 + 15) + 'px';

    let offset = 12;
    if(parseInt(item1.style.top) > parseInt(bottom)) {
       item1.style.top = item1Start;
       column1Passed++;
       roundSumMaxTimes++;
       currentCol1 = "2";
    }
    if(parseInt(item2.style.top) > parseInt(bottom)) {
       item2.style.top = item1Start;
       column1Passed++;
       roundSumMaxTimes++;
       currentCol1 = "3";
    }
    if(parseInt(item3.style.top) > parseInt(bottom)) {
       item3.style.top = item1Start;
       column1Passed++;
       roundSumMaxTimes++;
       currentCol1 = "1";
    }
    // if(parseInt(item4.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "5";
    //  }
    //  if(parseInt(item5.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "6";
    //  }
    //  if(parseInt(item6.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "7";
    //  }
    //  if(parseInt(item7.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "8";
    //  }
    //  if(parseInt(item8.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "9";
    //  }
    //  if(parseInt(item9.style.top) > parseInt(bottom)) {
    //     item3.style.top = item1Start;
    //     column1Passed++;
    //     roundSumMaxTimes++;
    //     currentCol1 = "10";
    //  }
    if(column1Passed == col1MaxTimes) {
        clearInterval(column1Interval);
    }
    checkResult();
}

function scrollCol2() {
    let i10 = parseInt((item10.style.top).replace('px', ''));
    let i11 = parseInt((item11.style.top).replace('px', ''));
    let i12 = parseInt((item12.style.top).replace('px', ''));
    // let i13 = parseInt((item13.style.top).replace('px', ''));
    // let i14 = parseInt((item14.style.top).replace('px', ''));
    // let i15 = parseInt((item15.style.top).replace('px', ''));
    // let i16 = parseInt((item16.style.top).replace('px', ''));
    // let i17 = parseInt((item17.style.top).replace('px', ''));
    // let i18 = parseInt((item18.style.top).replace('px', ''));

    item10.style.top = (i10 + 15) + 'px';            
    item11.style.top = (i11 + 15) + 'px';
    item12.style.top = (i12 + 15) + 'px';
    // item13.style.top = (i13 + 15) + 'px';            
    // item14.style.top = (i14 + 15) + 'px';
    // item15.style.top = (i15 + 15) + 'px';
    // item16.style.top = (i16 + 15) + 'px';            
    // item17.style.top = (i17 + 15) + 'px';
    // item18.style.top = (i18 + 15) + 'px';

    let offset = 12;
    if(parseInt(item10.style.top) > parseInt(bottom)) {
       item10.style.top = item1Start;
       column2Passed++;
       roundSumMaxTimes++;
       currentCol2 = "2";
    }
    if(parseInt(item11.style.top) > parseInt(bottom)) {
       item11.style.top = item1Start;
       column2Passed++;
       roundSumMaxTimes++;
       currentCol2 = "3";
    }
    if(parseInt(item12.style.top) > parseInt(bottom)) {
       item12.style.top = item1Start;
       column2Passed++;
       roundSumMaxTimes++;
       currentCol2 = "1";
    }
    // }
    // if(parseInt(item13.style.top) > parseInt(bottom)) {
    //     item4.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "14";
    //  }
    //  if(parseInt(item14.style.top) > parseInt(bottom)) {
    //     item5.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "15";
    //  }
    //  if(parseInt(item15.style.top) > parseInt(bottom)) {
    //     item6.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "16";
    //  }
    //  if(parseInt(item16.style.top) > parseInt(bottom)) {
    //     item4.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "17";
    //  }
    //  if(parseInt(item17.style.top) > parseInt(bottom)) {
    //     item5.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "18";
    //  }
    //  if(parseInt(item18.style.top) > parseInt(bottom)) {
    //     item6.style.top = item1Start;
    //     column2Passed++;
    //     roundSumMaxTimes++;
    //     currentCol2 = "19";
    //  }

    if(column2Passed == col2MaxTimes) {
        clearInterval(column2Interval);
    }
    checkResult();
}

function scrollCol3() {
    let i19 = parseInt((item19.style.top).replace('px', ''));
    let i20 = parseInt((item20.style.top).replace('px', ''));
    let i21 = parseInt((item21.style.top).replace('px', ''));
    // let i22 = parseInt((item22.style.top).replace('px', ''));
    // let i23 = parseInt((item23.style.top).replace('px', ''));
    // let i24 = parseInt((item24.style.top).replace('px', ''));
    // let i25 = parseInt((item25.style.top).replace('px', ''));
    // let i26 = parseInt((item26.style.top).replace('px', ''));
    // let i27 = parseInt((item27.style.top).replace('px', ''));

    item19.style.top = (i19 + 15) + 'px';            
    item20.style.top = (i20 + 15) + 'px';
    item21.style.top = (i21 + 15) + 'px';
    // item22.style.top = (i22 + 15) + 'px';            
    // item23.style.top = (i23 + 15) + 'px';
    // item24.style.top = (i24 + 15) + 'px';
    // item25.style.top = (i25 + 15) + 'px';            
    // item26.style.top = (i26 + 15) + 'px';
    // item27.style.top = (i27 + 15) + 'px';


    let offset = 12;
    if(parseInt(item19.style.top) > parseInt(bottom)) {
       item19.style.top = item1Start;
       column3Passed++;
       roundSumMaxTimes++;
       currentCol3 = "2";
    }
    if(parseInt(item20.style.top) > parseInt(bottom)) {
       item20.style.top = item1Start;
       column3Passed++;
       roundSumMaxTimes++;
       currentCol3 = "3";
    }
    if(parseInt(item21.style.top) > parseInt(bottom)) {
       item21.style.top = item1Start;
       column3Passed++;
       roundSumMaxTimes++;
       currentCol3 = "1";
    }
    // if(parseInt(item22.style.top) > parseInt(bottom)) {
    //     item7.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "23";
    //  }
    //  if(parseInt(item23.style.top) > parseInt(bottom)) {
    //     item8.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "24";
    //  }
    //  if(parseInt(item24.style.top) > parseInt(bottom)) {
    //     item9.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "25";
    //  }
    //  if(parseInt(item25.style.top) > parseInt(bottom)) {
    //     item7.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "26";
    //  }
    //  if(parseInt(item26.style.top) > parseInt(bottom)) {
    //     item8.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "27";
    //  }
    //  if(parseInt(item27.style.top) > parseInt(bottom)) {
    //     item9.style.top = item1Start;
    //     column3Passed++;
    //     roundSumMaxTimes++;
    //     currentCol3 = "1";
    //  }
    if(column3Passed == col3MaxTimes) {
        clearInterval(column3Interval);
    }
    checkResult();
}

function checkResult() {
    if(sumMaxTimes == roundSumMaxTimes) {
        // Stopped spinning
        document.querySelector('.bottom__start-spin').style.display = 'block';
        col1MaxTimes = 0;
        col2MaxTimes = 0;
        col3MaxTimes = 0;
        sumMaxTimes = 0;
        roundSumMaxTimes = 0;                
        column1Passed = 0;
        column2Passed = 0;
        column3Passed = 0;
        // Check for combinations
        // if(currentCol1 == currentCol2 && currentCol2 == currentCol3) {
        //     score += 100;
        //     // document.getElementById('win').style.display = 'block';
        // }
        // else {                    
        //     if(score > 0) {
        //         score -= 100;
        //     }
        // }
        // document.getElementById('score').innerHTML = "SCORE: " + (score > 0 ? score : '000') ;
    }
}
