const api_url="https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1";
fetch(api_url).then((response) =>{
    return response.json();
}).then((data) => {
    let products=data;
    let domesticA=[];
    let domesticCounter=0;
    let imported=[];
    let importedCounter=0;
    for(let i=0; i<products.length; i++){
        if(products[i].domestic===true){
            domesticA[domesticCounter]=products[i];
            domesticCounter++;
        }
        else{
            imported[importedCounter]=products[i];
            importedCounter++;
        }
    }
    var domesticSum=0;
    var importedSum=0;
    domesticA.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(". Domestic");
    for(var i=0;i<domesticA.length;i++){
        console.log("... "+domesticA[i].name);
        console.log("    Price: $"+domesticA[i].price);
        console.log("    "+(domesticA[i].description).slice(0,10)+"...");
        if(domesticA[i].weight===undefined){
            domesticA[i].weight="N/A";
            console.log("    Weight: "+domesticA[i].weight);
        }else {
            console.log("    Weight: "+ domesticA[i].weight+"g");
        }
        domesticSum+=domesticA[i].price;
    }
    imported.sort((a, b) => (a.name > b.name) ? 1 : -1)
    console.log(". Imported");
    for(var i=0;i<imported.length;i++){
        console.log("... "+imported[i].name);
        console.log("    Price: $"+imported[i].price);
        console.log("    "+(imported[i].description).slice(0,10)+"...");
        if(imported[i].weight===undefined){
            imported[i].weight="N/A";
            console.log("    Weight: " +imported[i].weight);
        }else {
            console.log("    Weight: " + imported[i].weight+"g");
        }
        importedSum+=imported[i].price;
    }
    console.log("Domestic cost: $"+domesticSum);
    console.log("Imported cost: $"+importedSum);
    console.log("Domestic count: "+domesticA.length);
    console.log("Imported cost: "+imported.length);
})


