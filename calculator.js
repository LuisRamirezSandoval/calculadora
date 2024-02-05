let operacion = "";

function appendToDisplay(arg){
    operacion = document.getElementById('display').innerHTML += arg;
    console.log(operacion, " operacion");
};

function calculadora(){
    let estado = 1;
    let num = 0;
    operacion+="=";
    for(let i=0; i<=operacion.length-1;i++){
        if(estado==1){
            num+=operacion[i];
            if(operacion[i+1] == "+"){
                estado=3;
            }else if(operacion[i+1] == "-"){
                estado=4;
            }else if(operacion[i+1]=="*"){
                estado=6;
            }else{
                estado=2;
            }
        }else if(estado==2){
            while(i<=operacion.length-1 && operacion[i] != "*" && operacion[i] != '+' && operacion[i] != "-"){
                num+=operacion[i];
                i++;
            }
            if(operacion[i]=="+"){
                estado=3;
            }else if(operacion[i]=="-"){
                estado=4;
            }else if(operacion[i]=="*"){
                estado=6;
            }
        }else if(estado==3){
            let numAux = 0;
            while(i<=operacion.length-1 && operacion[i] != "=" && operacion[i] != "*" && operacion[i] != '+' && operacion[i] != "-"){
                numAux+=operacion[i];
                i++;
            }
            if(operacion[i] == "="){
                estado=5;
                num=parseInt(num);
                num+=parseInt(numAux);
            }else if(operacion[i] == "+"){
                estado=3;
                num=parseInt(num);
                num+=parseInt(numAux);
            }else if(operacion[i]=="-"){
                estado=4;
                num=parseInt(num);
                num+=parseInt(numAux);
            }else if(operacion[i]== "*"){
                estado=6;
                num=parseInt(num);
                num+=parseInt(numAux);
            }
        }else if(estado == 4){
            let numAux = 0;
            while(i<=operacion.length-1 && operacion[i] != "=" && operacion[i] != "*" && operacion[i] != '+' && operacion[i] != "-"){
                numAux+=operacion[i];
                i++;
            }
            if(operacion[i] == "="){
                estado=5;
                num=parseInt(num);
                num-=parseInt(numAux);
            }else if(operacion[i] == "-"){
                estado=4;
                num=parseInt(num);
                num-=parseInt(numAux);
            }else if(operacion[i]=="+"){
                estado=3;
                num=parseInt(num);
                num-=parseInt(numAux);
            }else if(operacion[i]== "*"){
                estado=6;
                num=parseInt(num);
                num-=parseInt(numAux);
            }
        }else if(estado==6){
            let numAux = 0;
            while(i<=operacion.length-1 && operacion[i] != "=" && operacion[i] != "*" && operacion[i] != '+' && operacion[i] != "-"){
                numAux+=operacion[i];
                i++;
            }
            if(operacion[i] == "="){
                estado=5;
                num=parseInt(num);
                num*=parseInt(numAux);
            }else if(operacion[i] == "*"){
                if(numAux != 0){
                    num=parseInt(num);
                    num*=parseInt(numAux);
                }
            }else if(operacion[i]=="+"){
                estado=3;
                num=parseInt(num);
                num*=parseInt(numAux);
            }else if(operacion[i]=="-"){
                estado=4;
                num=parseInt(num);
                num*=parseInt(numAux);
            }
        }
    }; 
    clearDisplay("");
    appendToDisplay(num);
}

function clearDisplay(arg){
    document.getElementById('display').innerHTML = "";
};

// calculadora("3000+3000=");
// calculadora("1000+3000=)");
// calculadora("10+10+1+200+1000=");
