function validation (form, type) {
    const elems = form.elements;
    const ret = true;

    const validvideoCart = document.getElementById("validVideoCart");
    const validProcessortypy = document.getElementById("validProcessorType");
    const validFrequence = document.getElementById("validFrequence");
    const validBitDepth = document.getElementById("validBitDepth");
    const validManufacture = document.getElementById("validManufacture");
    const validAmount = document.getElementById("validAmount");
    const validpower = document.getElementById("validPower");
    const validweight = document.getElementById("validWeight");
    const validScreen = document.getElementById("validScreen")

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

    resetError(validFrequence);

    if(!funvalidFrequence(elems.Frequence.value)) {
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
        if(elems.weight.value == "" || elems.weight.value.trim() =='')
        {
            ret = false;
            showError(validweight, 'Empty');
        }

        resetError(validScreen);
        if(!funvalidScreen(elems.screen.value))
        {
            ret = false;
            showError(validScreen, 'Only number and last = PX or px Exemple: 123PX or 123px');
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