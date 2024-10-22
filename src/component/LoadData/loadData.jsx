import Card from "../card/Card";

function loadData(dataArray){
    console.log(dataArray)
    return( dataArray.map((book, i) => <Card key={i} books = {book}></Card>));
};

export default loadData;