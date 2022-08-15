function colocados(firstPlace,secondPlace,lastPlace){
    let competidores = []
    if(firstPlace == "Daniel"){
        competidores.push(firstPlace,secondPlace,lastPlace)
    }
    if(secondPlace == "Daniel"){
        competidores.push(secondPlace,firstPlace,lastPlace)
    }
    if(lastPlace == "Daniel"){
        competidores.push(firstPlace,lastPlace,secondPlace)
    }
    for(let i = 0;i < competidores.length; i++){
        console.log(`${i + 1}° colocado : ${competidores[i]}`)
        
    }
}
/*Escolha a ordem dos competidores*/
colocados("Rafael", "Daniel", "Marcos")
