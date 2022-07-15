var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

let {numbers: {a,b}} = obj;

var arr = [1,2];
[arr[1],arr[0]] = [arr[0],arr[1]];

const raceResults = ([first,second,third,...rest]) => {return {first,second,third,rest}};
