//1.
    //{1,2,3,4}

//2.
   // "ref"

///3.
    //{
    //    [1,2,3] => true
    //    [1,2,3] => false
    //}

//4.
    const hasDuplicate = (arr => {
        return arr.length != new Set(arr).size;
        });

//5.
    const vowelCount = (word) => {
        const map = new Map();
        const vowels = new Set("aeiouAEIOU");
        for (let letter of word){
            if (vowels.has(letter)){
                letter.toLowerCase();
                if(!map.get(letter)){
                map.set(letter,1)}
                else{map.set(letter,map.get(letter)+1)}
            }
        }
        return map;

    } 
