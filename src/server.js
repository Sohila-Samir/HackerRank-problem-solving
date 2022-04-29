// function performOperation(secondInteger, secondDecimal, secondString) {
//     // Declare a variable named 'firstInteger' and initialize with integer value 4.
//     const firstInteger = 4;
//     // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
//     const firstDecimal = 4.0;
//     // Declare a variable named 'firstString' and initialize with the string "HackerRank".
//     const firstString = 'HackerRank ';
//
//     if (typeof secondInteger === 'string' && typeof secondDecimal === 'string') {
//         console.log(firstInteger + Number(secondInteger));
//         console.log(firstDecimal + Number(secondDecimal))
//         console.log(firstString + secondString)
//     } else if (typeof secondInteger === 'string') {
//         console.log(firstInteger + Number(secondInteger));
//         console.log(firstDecimal + secondDecimal)
//         console.log(firstString + secondString)
//     } else if (typeof secondDecimal === 'string') {
//         console.log(firstInteger + secondInteger);
//         console.log(firstDecimal + Number(secondDecimal))
//         console.log(firstString + secondString)
//     }
// }
// performOperation('12','4.32','is the best place to learn and practice coding!')



// const regex = (s) => {
//     const re = /^([aeiou]).{2,}\1$/
//     if (re.test(s)) {
//         console.log(`pattern: ${re} match string: ${s}`);
//         return re;
//     }
//     console.log(`pattern: ${re} does not match string: ${s}`);
//     return null
// }
// regex('abcda')



// const fun = (s) => {
//     try {
//         const stringChars = s.split('')
//         stringChars.reverse()
//         const join = stringChars.join('')
//         console.log(stringChars);
//         console.log(join);
//     }catch(err) {
//         console.log(err.message)
//         console.log(s)
//     }
// }
// fun(Number(1234))



// const whoWonGame = (player1Scores: number[], player2Scores: number[]): void => {
//     if (player1Scores.length !== player2Scores.length) {
//         console.log('unfair game, both players must have same number of rounds');
//         return
//     }
//     let player1Points: number = 0
//     let player2Points: number = 0
//     player1Scores.map((score: number) => {
//         if (score > player2Scores[player1Scores.indexOf(score)]) {
//             player1Points += 1
//         } else if (score < player2Scores[player1Scores.indexOf(score)]) {
//             player2Points += 1
//         }
//     })
//     if (player1Points > player2Points) {
//         console.log(`player1 has won with score of ${player1Points} against player2 with a score of: ${player2Points}`);
//     } else if (player1Points < player2Points) {
//         console.log(`player2 has won with score of ${player2Points} against player1 with a score of: ${player1Points}`);
//     } else {
//         console.log('players went draw!');
//     }
// }
// whoWonGame([3,5,9], [8,8,6])




// const sumLong = (bigNumbers: number[]): void => {
//     let sum: number = 0;
//     bigNumbers.map((number) => {
//         sum += number;
//     })
//     console.log(sum);
// }
// sumLong([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])




// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
//
// Rectangle.prototype.area = function() {
//     return (this.w * this.h)
// }
//
// class Square extends Rectangle {
//     constructor(w) {
//         super(w)
//         super.area = function() {
//             return(this.w * 3)
//         }
//     }
// }
//
// const reqt = new Rectangle(3,4)
// console.log(reqt.area());
//
// const squa = new Square(3)
// console.log(squa.area());



// let btn = document.getElementById('btn');
//
// let counter = 0;
// btn.addEventListener('click', (e) => {
//     counter++
//     btn.innerText = counter
// })



// function getGrade(score) {
//     // Write your code here
//     if (score > 25 && score <= 30) {
//         score = 'A'
//     } else if(score > 20 && score <= 25) {
//         score = 'B'
//     } else if(score > 15 && score <= 20) {
//         score = 'C'
//     } else if(score > 10 && score <= 15) {
//         score = 'D'
//     } else if(score > 5 && score <= 10) {
//         score = 'E'
//     } else if(score >= 0 && score <= 5) {
//         score = 'F'
//     }
//     console.log(score);
//     return score;
// }
// getGrade(0)



// function extraLongFactorials(n) {
//     // Write your code here
//     let factorialNumber = 1n;
//     for (let i = 1n; i <= n; i++) {
//         factorialNumber *= i
//     }
//     factorialNumber = factorialNumber.toString()
//     console.log(factorialNumber);
//     return factorialNumber
// }
// extraLongFactorials(25)





// Array.prototype.SortBySwapping = function(counter = 0) {
//     const [...arrayCopy] = this
//     const arrLength = arrayCopy.length - 1;
//     for (i = 0; i < arrLength; i++) {
//         if (arrayCopy[i] > arrayCopy[i + 1]) {
//             // swap the two elements
//             [arrayCopy[i + 1], arrayCopy[i]] = [arrayCopy[i], arrayCopy[i + 1]]
//             const swapInstructionMsg = `swap element ${arrayCopy[i]} at index [${arrayCopy.indexOf(arrayCopy[i + 1]) + 1}] and element ${arrayCopy[i + 1]} at index [${arrayCopy.indexOf(arrayCopy[i + 1])}]`
//             console.log(swapInstructionMsg);
//         }
//     }
//     if (arrayCopy.isSorted()) {
//         counter > 0? console.log(`array can be sorted after ${counter} recursive swap operations!`): console.log(arrayCopy);
//     } else {
//         arrayCopy.SortBySwapping(counter+1)
//     }
// }




// Array.prototype.reverseSub = function() {
//     const [...arrayCopy] = this;
//     let subArray = arrayCopy.slice(1, -1)
//     subArray.reverse()
//     arrayCopy.splice(1, subArray.length , ...subArray)
//     return arrayCopy
// }




// Array.prototype.misMatches = function() {
//     let misMatchesStart = [];
//     let [...arrCopy] = this;
//     arrCopy.sort(function(a,b) {
//         if (a > b) {
//             return 1
//         } else {
//             return -1
//         }
//     })
//     // O(n)
//     for (let i = 0; i <= arrCopy.length - 1; i++) {
//         if (arrCopy[i] !== this[i]) {
//             misMatchesStart.push(this.indexOf(this[i]) + 1)
//         }
//     }
//     return [misMatchesStart, arrCopy]
// }



// function almostSorted(arr) {
//     const mismatchesStartPoints = arr.misMatches()
//     if (mismatchesStartPoints[0].length === 2) {
//         if ((mismatchesStartPoints[0][0] - mismatchesStartPoints[0][1]) === (1 && -1)) {
//             console.log('yes');
//             console.log(`swap ${mismatchesStartPoints[0][0]} ${mismatchesStartPoints[0][1]}`);
//         } else {
//             console.log('yes');
//             console.log(`reverse ${mismatchesStartPoints[0][0]} ${mismatchesStartPoints[0][1]}`);
//         }
//     } else if (mismatchesStartPoints[0].length > 2) {
//         const first = mismatchesStartPoints[0][0]
//         const lastIndex = mismatchesStartPoints[0][mismatchesStartPoints[0].length - 1]
//         const tryReverse = arr.slice(first - 1, lastIndex).reverse()
//         const slicedSortedArrayCopy = mismatchesStartPoints[1].slice(first - 1, lastIndex)
//         if (tryReverse.values === slicedSortedArrayCopy.values) {
//             console.log('yes');
//             console.log(`reverse ${first} ${lastIndex}`);
//         } else {
//             console.log('no');
//         }
//     }
// }
//
// almostSorted([3, 1, 2])
// almostSorted([1, 2, 3, 8, 6])
// almostSorted([1, 2, 3, 5, 4, 6])
// almostSorted([4,2])
// almostSorted([43, 65, 1, 98, 99, 101])
// almostSorted([1,5,4,3,2,6])
// almostSorted([4104, 8529, 49984, 54956, 63034, 82534, 84473, 86411, 92941, 95929, 108831, 894947, 125082, 137123, 137276, 142534, 149840, 154703, 174744, 180537, 207563, 221088, 223069, 231982, 249517, 252211, 255192, 260283, 261543, 262406, 270616, 274600, 274709, 283838, 289532, 295589, 310856, 314991, 322201, 339198, 343271, 383392, 385869, 389367, 403468, 441925, 444543, 454300, 455366, 469896, 478627, 479055, 484516, 499114, 512738, 543943, 552836, 560153, 578730, 579688, 591631, 594436, 606033, 613146, 621500, 627475, 631582, 643754, 658309, 666435, 667186, 671190, 674741, 685292, 702340, 705383, 722375, 722776, 726812, 748441, 790023, 795574, 797416, 813164, 813248, 827778, 839998, 843708, 851728, 857147, 860454, 861956, 864994, 868755, 116375, 911042, 912634, 914500, 920825, 979477])



// function gradingStudents(grades) {
//     // Write your code here
//     let [...gradesCopy] = grades;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= 38) {
//             let nearestMultiOfFive = Math.ceil(gradesCopy[i] / 5) * 5
//             if ((nearestMultiOfFive) - grades[i] < 3) {
//                 grades[i] = nearestMultiOfFive
//             }
//         }
//         console.log(grades[i]);
//     }
//     return grades
// }
// gradingStudents([73,67,38,33,29])




// function getMoneySpent(keyboards, drives, b) {
//     const kbMaximum = Math.max(...keyboards)
//     const drMaximum = Math.max(...drives)
//     const totalMax = Math.abs(kbMaximum + drMaximum)
//     const possibleSolutions = [];
//     let total = 0;
//     if (totalMax <= b) {
//         console.log('from max');
//         console.log(totalMax)
//     }
//     for (let k = 0; k < keyboards.length; k++) {
//         for (let d = 0; d < drives.length; d++) {
//             total = keyboards[k] + drives[d]
//             if (total <= b) {
//                 possibleSolutions.push(total)
//             }
//         }
//     }
//
//     if (!possibleSolutions.length) {
//         console.log(-1);
//         return -1
//     }
//
//     if (possibleSolutions.length) {
//         const maximumPossibleSolution = Math.max(...possibleSolutions)
//         console.log(maximumPossibleSolution);
//         return maximumPossibleSolution
//     }
// }
// getMoneySpent([3, 1], [5, 2, 8], 10)
// getMoneySpent([40,50,60],[5,8,12], 60)



// function simpleArraySum(ar) {
//     // Write your code here
//     const sum = ar.reduce((pre,curr) => {
//         return pre + curr
//     })
//     console.log(sum);
//     return sum
// }
// simpleArraySum([1, 2, 3, 4, 10, 11])




// function divisibleSumPairs(n, k, ar) {
//     let counter = 0
//
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++ ) {
//             let sum = ar[i] + ar[j]
//             if(sum % k === 0) {
//                 counter++
//             }
//         }
//     }
//
//     console.log(counter);
//     return counter;
// }
// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])



// function birthdayCakeCandles(candles) {
//     // Write your code here
//     let maximumNumbers = 0;
//     const tallest = Math.max(...candles)
//     candles.forEach(candle => {
//         if (candle === tallest) maximumNumbers++
//     });
//     console.log(maximumNumbers);
//     return maximumNumbers
// }
// birthdayCakeCandles([3, 2, 1, 3])
// birthdayCakeCandles([4, 4, 4, 3])



// function timeConversion(s) {
//     // Write your code here
//     const timeIn12 = ['12','01','02','03','04','05','06','07','08','09','10','11']
//     const timeIn24 = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
//     const pmOrAm = s.slice(8)
//     let hhmmssIn12 = s.slice(0,8).split(':')
//     timeIn12.forEach((element) => {
//         if (element.toString() === hhmmssIn12[0]) {
//             let timeIn12Index = timeIn12.indexOf(element);
//             if (pmOrAm === 'AM') {
//                 hhmmssIn12[0] = timeIn24[timeIn12Index]
//             } else {
//                 hhmmssIn12[0] = timeIn24[timeIn12Index + 12]
//             }
//         }
//     })
//     const hhmmssIn24 = hhmmssIn12.join(':')
//     console.log(hhmmssIn24)
//     return hhmmssIn24;
// }
// timeConversion('04:59:59PM')


// k >>> threshold
// a >>> array of students timeline
// function angryProfessor(k, a) {
//     // Write your code here
//     let attendedStudents = 0;
//     a.forEach(student => {
//         if (student <= 0) {
//             attendedStudents++
//         }
//     });
//     if (attendedStudents >= k) return ('NO');
//     else return ('YES');
// }
// angryProfessor(3, [-1, -3, 4, 2])
// angryProfessor(2, [0, -1, 2, 1])



// function circularArrayRotation(a, k, queries) {
//     // Write your code here
//     let rotationCounter = 1
//     while (rotationCounter <= k) {
//         let lastElement = a.pop()
//         a.unshift(lastElement)
//         rotationCounter++
//     }
//     let results = []
//     for (let i = 0; i < queries.length; i++) {
//         results.push(a[queries[i]])
//     }
//     console.log(results);
//     return results
// }
// // circularArrayRotation([3,4,5,20,5,21,80,32], 10, [1,2])
// circularArrayRotation([1,2,3],2,[0,1,2])



// function plusMinus(arr) {
//     // Write your code here
//     const arrLen = arr.length
//     let positiveNumbers = 0
//     let negativeNumbers = 0
//     let zeros = 0
//     for (let i = 0; i < arrLen; i++) {
//         if (arr[i] === 0) zeros++
//         if (arr[i] < 0) negativeNumbers++
//         if (arr[i] > 0) positiveNumbers++
//     }
//     const positiveRatios = Math.abs(positiveNumbers / arrLen).toFixed(6)
//     const negativeRatios = Math.abs(negativeNumbers / arrLen).toFixed(6)
//     const zerosRatios = Math.abs(zeros / arrLen).toFixed(6)
//
//     console.log(positiveRatios);
//     console.log(negativeRatios);
//     console.log(zerosRatios);
// }
// plusMinus([-4, 3, -9, 0, 4, 1])



// function insertionSort(arr) {
//     let elementsShifts = []
//     let elementsAfterLen;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] < arr[i]) {
//             let rangeBefore = arr.slice(0, i + 1)
//             for (let k = 0; k < rangeBefore.length; k++) {
//                 if (arr[i + 1] < rangeBefore[k]) {
//                     elementsAfterLen = rangeBefore.slice(k).length
//                     let splicedElement = arr.splice(i + 1, 1)
//                     arr.splice(k,0,...splicedElement)
//                 }
//             }
//             elementsShifts.push(elementsAfterLen)
//         }
//     }
//
//     if (elementsShifts.length) {
//         let totalShifts = elementsShifts.reduce((pre,curr) => {
//             let total = parseInt(pre) + parseInt(curr)
//             return total
//         })
//         console.log(totalShifts);
//         return totalShifts
//     } else {
    //         console.log(0);
    //         return 0
    //     }
    // }



// function merge(left,right) {
//     let finalArr = [];
//
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             finalArr.push(left.shift())
//         } else {
//             finalArr.push(right.shift())
//         }
//     }
//     console.log(finalArr);
//     return [...finalArr, ...left, ...right]
// }
//
// function mergeSort(arr) {
//     const half = arr.length / 2;
//
//     if (arr.length < 2) {
//         return arr
//     }
//
//     let left = arr.splice(0,half)
//     return merge(mergeSort(left), mergeSort(arr))
// }


// insertionSort([930887, 692778, 636916, 747794, 238336, 885387, 760493, 516650, 641422, 202363, 490028, 368691, 520060, 897764, 513927, 180541, 383427, 89173 ,455737, 5212, 595369, 702568, 956430, 465783, 21531, 722863, 665124, 174068, 703136, 513930, 979803, 634023, 723059, 133070, 898168, 961394, 18457, 175012, 478043, 176230, 377374, 484422, 544920, 413785, 898538, 575199, 594325, 798316, 664371, 566414, 803527, 776092, 268981, 759957, 241874, 806863, 999171, 906997, 497282, 702306, 420926, 477085, 336328, 660337, 126506, 750847, 621730, 661314, 925858, 616125, 353896, 819583, 100546, 898815, 233368, 515435, 990365, 344044, 313751, 171088, 426809, 117277, 947179, 695789, 393585, 705404, 502652, 392755, 612400, 999933, 95061, 549677, 993369, 947740, 210013, 636227, 698587, 348095, 297540, 140796, 480571, 651435, 960379, 97468, 66602, 710098, 612903, 573318, 570493, 926653, 260757, 997302, 560281, 724287, 209442, 953866, 429690, 228445, 346620, 558441, 744730, 958032, 108118, 738098, 905772, 834482, 890676, 120710, 698928, 704568, 777857, 179498, 872354, 254587, 276966, 455307, 964684, 406220, 28625, 51529, 332872, 805733, 48830, 409504, 530020, 258271, 363369, 959709, 486716, 226341, 518150, 747797, 700724, 142619, 2246, 122847, 493452, 892922, 243556, 192380, 597489, 537765, 888229, 469842, 792351, 165194, 441501, 757035, 87765, 470125, 324915, 936988, 275857, 373744, 346492, 322228, 148366, 709860, 281937, 151433, 452552, 316438, 899229, 153276, 975408, 901475, 276122, 468859, 794396, 36030, 661238, 908236, 573794, 65819, 894429, 366144, 231012, 335929, 639530, 318777, 322405, 964444, 255764, 114614, 854539, 118607, 436841, 2905, 344819, 235129, 670689, 797370, 67918, 569918, 466997, 43325, 987744, 259471, 512184, 298491, 295500, 689773, 206726, 385645, 755591, 617506, 268140, 502955, 469787, 907670, 338083, 308543, 388465, 110198, 939508, 759356, 228805, 376349, 278612, 573623, 127829, 949300, 887344, 195747, 35569, 354341, 755423, 23312, 613811, 267606, 321802, 425662, 473731, 44879, 811306,229321, 178737, 79445, 248627, 648523, 503466, 586709, 473417, 408283 ,213259, 412925, 167638, 442063, 305625, 962601, 532037, 433453, 911900, 419380, 145551, 947469 ,290072, 900974, 487132, 903882, 684931, 808934, 845895, 158661, 370164, 657200, 387982, 548900, 252997, 152960, 713774, 272814, 739669, 187191, 681096, 952927, 116467 ,365085 ,911341, 422091, 327685, 443377, 855543, 755937, 379108, 517446, 219757, 669180, 418419, 706888, 89413, 103349, 32173, 451660, 262010, 402337, 625211, 166343, 467588, 878207, 319302, 697714, 667373 ,575322 ,401256, 864820, 44600, 517722, 229905, 955940, 939812, 73941, 915668 ,311706, 346229, 811128, 829151, 565985, 996659, 763921, 789225, 602423, 867270, 821397 ,54082, 645631, 740085, 679293 ,811973, 207673, 73851, 647626, 905386, 741223, 739300, 306641, 606043, 783899, 340714, 352299, 256191, 280525, 942591, 688210, 108582, 288820, 499337, 937733, 371156, 495995, 218005, 160380, 614770, 85274, 981777, 668851, 247256, 721861, 348143, 575580, 445885, 421994, 223206, 867622, 568])
// insertionSort([12, 15, 1, 5, 6, 14, 11])
// mergeSort([3, 5, 7, 11, 9])
// mergeSort([30, 2, 10, 3, 100, 50, 8, 1])
// mergeSort([30,2,10,3])
// mergeSort([30,2,8,1,6,0,5,10,3])
// insertionSort([12, 11, 13, 12, 5, 6])
// insertionSort([1, 1, 1, 2, 2])
// mergeSort([4,3,2,1])
// insertionSort([2, 1, 3, 1, 2])
// insertionSort([9492052, 241944, 5743396, 5758608, 6053545])



// function utopianTree(n) {
//     // Write your code here
//     let H = 1;
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             H *= 2
//         } else {
//             H += 1
//         }
//     }
//     console.log(H);
//     return H
// }
// utopianTree(4)
// utopianTree(3)



// n > number of prisoners
// m > number of candies to be distributed
// s > distribution starting position
// function saveThePrisoner(n, m, s) {
//     // console.log((m-1 + s)%n || n);
// }

// saveThePrisoner(5, 100, 1) // 2
// saveThePrisoner(352926151, 380324688, 94730870) //122129406
// saveThePrisoner(7, 19, 2) // 6
// saveThePrisoner(3, 10, 3) // 3
// saveThePrisoner(5, 2, 2) // 3
