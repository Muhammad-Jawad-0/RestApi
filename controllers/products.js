const product = require("../models/product")

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }


    //-----------  for sorting
    let ifApiDataSort = product.find(queryObject)

    if (sort) {
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        ifApiDataSort = ifApiDataSort.sort(sortFix)
    }

    //-----------  for selecting

    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        ifApiDataSort = ifApiDataSort.select(selectFix)
    }

    //-----------  Pagination

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 2;

    let skip = (page - 1) * limit;

    ifApiDataSort = ifApiDataSort.skip(skip).limit(limit)

    // --------------------------------------------------------


    const myData = await ifApiDataSort;
    res.status(200).json({ myData, nbHits: myData.length })
}


const getAllProductsTesting = async (req, res) => {

    console.log(req.query)
    const myData = await product.find(req.query).select("name company");
    //sort = name,price

    res.status(200).json({ myData ,nbHits: myData.length })
}

module.exports = { getAllProducts, getAllProductsTesting }