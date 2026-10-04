import categorytList from "@/data/categories.json"

function getCategories() {
    return [{Id: 0, Title: "All" }, ...categorytList];
}


export {getCategories};