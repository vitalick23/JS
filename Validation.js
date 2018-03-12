function validation (form, type) {
    var elems = form.elements;
    var ret = true;

    var validvideoCart = document.getElementById("validVideoCart");
    var validProcessortypy = document.getElementById("validProcessorType");
    var validFrequence = document.getElementById("validFrequence");
    var validBitDepth = document.getElementById("validBitDepth");
    var validManufacture = document.getElementById("validManufacture");
    var validAmount = document.getElementById("validAmount");
    var validpower = document.getElementById("validPower");
    var validweight = document.getElementById("validWeight");
    var validScreen = document.getElementById("validScreen")

    resetError(validvideoCart);
    if (elems.namevideoCart.value == "" || elems.namevideoCart.value.trim() == '') {
        showError(validvideoCart, 'Empty');
        ret = false;
    }

    resetError(validProcessortypy);
    if(elems.processorType.value == "" || elems.processorType.value.trim() =='')
    {
        ret = false;
        showError(validProcessortypy, 'Empty');
    }

    if(!funvalidpro(elems.processorType.value))
    {
        ret = false;
        showError(validProcessortypy, 'no number');
    }

    resetError(validFrequence);

    if(!funvalidFrequence(elems.Frequence.value) || elems.Frequence.value.trim() =='') {
        showError(validFrequence, 'Only number and last = G or g Exemple: 123G');
        ret = false;
    }


    resetError(validBitDepth);
    if(elems.BitDepth.value == "" || elems.BitDepth.value.trim() =='')
    {
        ret = false;
        showError(validBitDepth, 'Empty');
    }

    resetError(validManufacture);
    if(elems.Manufacture.value == "" || elems.Manufacture.value.trim() =='')
    {
        ret = false;
        showError(validManufacture, 'Empty');
    }

    if(type == '1'){
        resetError(validAmount);
        if(elems.amount.value == "" || elems.amount.value.trim() =='')
        {
            ret = false;
            showError(validAmount, 'Empty');
        }else{
            if(!validNumber(elems.amount.value,elems.amount.value.length)){
                ret = false;
                showError(validAmount, 'Only Number');
            }
        }

        resetError(validpower);
        if(elems.power.value == "" || elems.power.value.trim() =='')
        {ret = false;
            showError(validpower, 'Empty');
        }
        else {
            if(!validNumber(elems.power.value,elems.power.value.length)){
                showError(validpower, 'Only Number');
                ret = false;
            }
        }
    }
    else {
        resetError(validweight);
        if(!funvalidWeight(elems.weight.value) || elems.weight.value.trim() =='')
        {
            ret = false;
            showError(validweight, 'Only number and last =  g Exemple: 1000g');
        }

        if(!funvalid(elems.weight.value))
        {
            ret = false;
            showError(validweight, 'no 0');
        }

        if(elems.weight.value === '-')
        {
            ret = false;
            showError(validweight, 'no - ');
        }
        if(elems.weight.value === '0')
        {
            ret = false;
            showError(validweight, 'no 0');
        }

        resetError(validScreen);
        if(!funvalidScreen(elems.screen.value))
        {
            ret = false;
            showError(validScreen, 'Only number and last = PX or px Exemple: 123PX or 123px');
        }else
        if(!funvalid(elems.screen.value))
        {
            ret = false;
            showError(validScreen, 'no 0');
        }
    }
    return ret;
}

function showError(container, errorMessage) {
    container.innerText = errorMessage;
}

function resetError(container) {
    container.innerText = "";
}

function funvalidFrequence(str) {
    if(str.length == '1') return false;
    if(str[str.length - 1] == 'G' || str[str.length - 1] == 'g') {

        for (var i = 0; i < str.length - 1; i++) {
            if (str[i] < '0' || str[i] > '9') return false;
        }
        return true;
    }
    return false;
}

function funvalidScreen(str) {
    if(str.length < 3) return false;
    if((str[str.length - 1] == 'X' && str[str.length - 2] == 'P')|| (str[str.length - 1] == 'x' && str[str.length - 2] == 'p')) {
        if(!validNumber(str,str.length-2)) return false
        return true;
    }
    return false;
}

function validNumber(str,count)
{
    for (var i = 0; i < count; i++) {
        if (str[i] < '0' || str[i] > '9') return false;
    }
    return true;
}

function funvalidWeight(str) {
    if(str.length <= '1') return false;

    if( str[str.length - 1] === 'g') {

        for (var i = 0; i < str.length - 1; i++) {
            if (str[i] < '0' || str[i] > '9') return false;
        }
        return true;
    }
    return false;
}

function funvalid(str) {
    let res = true;
    let rest = true;
    for(let i = 0; i<str.length;i++)
    {
        if(res && rest) {
            if (str[i] === '0') res = false;
            else if (str[i] === ' ') res = true;
            else rest = false
        }
    }
    return res;
}

function funvalidpro(str) {
    var res = true;
    for(let i = 0; i < str.length; i++){
        if(str[i] != ' ')
            if(str[i] < 'a' || str[i] > 'z')
                if(str[i] < 'A'|| str > 'Z')
                    res= false;
    }
    return res;
}