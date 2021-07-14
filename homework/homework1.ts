type Combinable = number | string;
function Cnt(arr: Combinable[]): any {
    let cnt: number = 0;
    for(let elem of arr){
        if (typeof elem == 'string'){
            cnt += 1;
        }
    }
    return cnt;
}

// test 1
console.log(Cnt([1, "h", 2, "k" , "hello"]));
// test 2
console.log(Cnt([1, 5, 4, 2]));
// test 3
console.log(Cnt( ["2", "hello", "b", "c"]));
