const filterOutOdds =  (...nums) => {return nums.filter(El => {return El %2  == 0})}

const mergeObject = (first,second) => {return {...first,...second}};

const doubleAndReturnArgs = (arr, ...others) => {
    const doubles = [others];
    doubles.forEach((El) => (El*2));
    const newArray = [...arr,...doubles];
    return newArray;
}


const removeRandom = (items) => {
    const Rand = math.Rand / items.length;

    items.filter((El,i) => {
        if (i == Rand){
            return false;
        }
        return true;
    },[])
}

const extend = (array1,array2) => {
    return [...array1,...array2];
}


const addKeyVal = (obj,key,val) =>{
    return {[key]: val, ...obj};   
}

const removeKey = (obj, key) => {
    const int =  {...obj}
    delete int[key];
    return key;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    return {...obj, [key]: val};
}
