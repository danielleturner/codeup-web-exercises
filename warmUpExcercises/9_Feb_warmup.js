//write a function that takes a string as argument and returns the number of vowels contained in that string



let myWord = "helicopter"

function vowel_count(str1) {

    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < myWord.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(vowel_count("helicopter"));