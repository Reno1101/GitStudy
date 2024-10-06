function mirror(str){
    cleanStr = str.trim().toLowerCase().replace(/\s+/g,'');
    result = true;

    left = 0;
    right = clearStr.length - 1;

    while (left < right){
        if (left !== right){
            result = false;
        }
        left ++;
        right --;
    }
    return result;
}

function printmirror(str){
    console.log(`mirror: ${mirror(str)}`);   
}

printmirror("madam");