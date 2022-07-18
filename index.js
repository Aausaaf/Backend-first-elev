const express = require('express')
const root = express()
const axios= require('axios')
root.use(express.json())


let products =
    
        [{
            "id": 50,
            "first_name": "Wernher",
            "last_name": "Grushin",
            "email": "wgrushin1d@tinyurl.com",
            "gender": "Male"
          }, {
            "id": 51,
            "first_name": "Pauletta",
            "last_name": "Knapton",
            "email": "pknapton1e@amazon.co.uk",
            "gender": "Female"
          }, {
            "id": 52,
            "first_name": "Fair",
            "last_name": "Ebbage",
            "email": "febbage1f@wordpress.com",
            "gender": "Male"
          }, {
            "id": 53,
            "first_name": "Daren",
            "last_name": "Coase",
            "email": "dcoase1g@php.net",
            "gender": "Male"
          }, {
            "id": 54,
            "first_name": "Clim",
            "last_name": "Cannings",
            "email": "ccannings1h@tuttocitta.it",
            "gender": "Male"
          }, {
            "id": 55,
            "first_name": "Lebbie",
            "last_name": "Zuanazzi",
            "email": "lzuanazzi1i@soup.io",
            "gender": "Female"
          }, {
            "id": 56,
            "first_name": "Gwyneth",
            "last_name": "Dowbiggin",
            "email": "gdowbiggin1j@about.com",
            "gender": "Female"
          }, {
            "id": 57,
            "first_name": "Drew",
            "last_name": "Tidmarsh",
            "email": "dtidmarsh1k@jimdo.com",
            "gender": "Male"
          }, {
            "id": 58,
            "first_name": "Howard",
            "last_name": "Grunnill",
            "email": "hgrunnill1l@sun.com",
            "gender": "Male"
          }, {
            "id": 59,
            "first_name": "Fritz",
            "last_name": "De Bernardi",
            "email": "fdebernardi1m@cocolog-nifty.com",
            "gender": "Male"
          }, {
            "id": 60,
            "first_name": "Bar",
            "last_name": "Nortcliffe",
            "email": "bnortcliffe1n@delicious.com",
            "gender": "Male"
          }, {
            "id": 61,
            "first_name": "Vinnie",
            "last_name": "Schorah",
            "email": "vschorah1o@privacy.gov.au",
            "gender": "Male"
          }, {
            "id": 62,
            "first_name": "Delora",
            "last_name": "Rosenzveig",
            "email": "drosenzveig1p@yale.edu",
            "gender": "Female"
          }, {
            "id": 63,
            "first_name": "Veronika",
            "last_name": "Wintle",
            "email": "vwintle1q@last.fm",
            "gender": "Female"
          }, {
            "id": 64,
            "first_name": "Jeannette",
            "last_name": "Klebes",
            "email": "jklebes1r@mysql.com",
            "gender": "Female"
          }, {
            "id": 65,
            "first_name": "Malina",
            "last_name": "Jordi",
            "email": "mjordi1s@amazon.de",
            "gender": "Female"
          }, {
            "id": 66,
            "first_name": "Myrtia",
            "last_name": "Murrhardt",
            "email": "mmurrhardt1t@sciencedirect.com",
            "gender": "Female"
          }, {
            "id": 67,
            "first_name": "Laurice",
            "last_name": "Greystoke",
            "email": "lgreystoke1u@seattletimes.com",
            "gender": "Female"
          }, {
            "id": 68,
            "first_name": "Randell",
            "last_name": "Deyenhardt",
            "email": "rdeyenhardt1v@theguardian.com",
            "gender": "Male"
          }, {
            "id": 69,
            "first_name": "Mikael",
            "last_name": "Urey",
            "email": "murey1w@hubpages.com",
            "gender": "Non-binary"
          }, {
            "id": 70,
            "first_name": "Sandye",
            "last_name": "Staite",
            "email": "sstaite1x@usatoday.com",
            "gender": "Female"
          }, {
            "id": 71,
            "first_name": "Virgil",
            "last_name": "Klimkin",
            "email": "vklimkin1y@1und1.de",
            "gender": "Male"
          }, {
            "id": 72,
            "first_name": "Jephthah",
            "last_name": "McKimm",
            "email": "jmckimm1z@discuz.net",
            "gender": "Male"
          }, {
            "id": 73,
            "first_name": "Tasha",
            "last_name": "Huntress",
            "email": "thuntress20@behance.net",
            "gender": "Female"
          }, {
            "id": 74,
            "first_name": "Serena",
            "last_name": "Saddler",
            "email": "ssaddler21@opensource.org",
            "gender": "Female"
          }, {
            "id": 75,
            "first_name": "Arvy",
            "last_name": "Spellar",
            "email": "aspellar22@chron.com",
            "gender": "Male"
          }, {
            "id": 76,
            "first_name": "Tobiah",
            "last_name": "Whaites",
            "email": "twhaites23@cisco.com",
            "gender": "Male"
          }, {
            "id": 77,
            "first_name": "Annalise",
            "last_name": "Fippe",
            "email": "afippe24@scribd.com",
            "gender": "Female"
          }, {
            "id": 78,
            "first_name": "Aldis",
            "last_name": "Chittem",
            "email": "achittem25@uol.com.br",
            "gender": "Male"
          }, {
            "id": 79,
            "first_name": "Marta",
            "last_name": "Quant",
            "email": "mquant26@vkontakte.ru",
            "gender": "Female"
          }, {
            "id": 80,
            "first_name": "Toinette",
            "last_name": "Plitz",
            "email": "tplitz27@acquirethisname.com",
            "gender": "Genderqueer"
          }, {
            "id": 81,
            "first_name": "Salim",
            "last_name": "Attiwill",
            "email": "sattiwill28@kickstarter.com",
            "gender": "Male"
          }, {
            "id": 82,
            "first_name": "Quintilla",
            "last_name": "Iacomettii",
            "email": "qiacomettii29@icq.com",
            "gender": "Female"
          }, {
            "id": 83,
            "first_name": "Ephrem",
            "last_name": "Hurdiss",
            "email": "ehurdiss2a@vinaora.com",
            "gender": "Male"
          }, {
            "id": 84,
            "first_name": "Dudley",
            "last_name": "Myerscough",
            "email": "dmyerscough2b@virginia.edu",
            "gender": "Male"
          }, {
            "id": 85,
            "first_name": "Wylma",
            "last_name": "Iapico",
            "email": "wiapico2c@google.com.hk",
            "gender": "Female"
          }, {
            "id": 86,
            "first_name": "Kurt",
            "last_name": "Jull",
            "email": "kjull2d@delicious.com",
            "gender": "Agender"
          }, {
            "id": 87,
            "first_name": "Cammi",
            "last_name": "Doche",
            "email": "cdoche2e@squarespace.com",
            "gender": "Female"
          }, {
            "id": 88,
            "first_name": "Aldis",
            "last_name": "Ratcliffe",
            "email": "aratcliffe2f@yellowpages.com",
            "gender": "Male"
          }, {
            "id": 89,
            "first_name": "Sofie",
            "last_name": "Garvill",
            "email": "sgarvill2g@aol.com",
            "gender": "Female"
          }, {
            "id": 90,
            "first_name": "Ingeborg",
            "last_name": "Cortez",
            "email": "icortez2h@indiegogo.com",
            "gender": "Female"
          }, {
            "id": 91,
            "first_name": "Tansy",
            "last_name": "Haycock",
            "email": "thaycock2i@umich.edu",
            "gender": "Female"
          }, {
            "id": 92,
            "first_name": "Trent",
            "last_name": "Screach",
            "email": "tscreach2j@netscape.com",
            "gender": "Male"
          }, {
            "id": 93,
            "first_name": "Trudie",
            "last_name": "Aleixo",
            "email": "taleixo2k@redcross.org",
            "gender": "Female"
          }, {
            "id": 94,
            "first_name": "Emmey",
            "last_name": "McBean",
            "email": "emcbean2l@harvard.edu",
            "gender": "Female"
          }, {
            "id": 95,
            "first_name": "Shannon",
            "last_name": "Jopp",
            "email": "sjopp2m@lulu.com",
            "gender": "Male"
          }, {
            "id": 96,
            "first_name": "Bliss",
            "last_name": "Binder",
            "email": "bbinder2n@google.com",
            "gender": "Female"
          }, {
            "id": 97,
            "first_name": "Michelle",
            "last_name": "Moorerud",
            "email": "mmoorerud2o@php.net",
            "gender": "Female"
          }, {
            "id": 98,
            "first_name": "Cole",
            "last_name": "Ofener",
            "email": "cofener2p@blinklist.com",
            "gender": "Male"
          }, {
            "id": 99,
            "first_name": "Rafaello",
            "last_name": "Kilmartin",
            "email": "rkilmartin2q@usa.gov",
            "gender": "Male"
          }, {
            "id": 100,
            "first_name": "Curry",
            "last_name": "Ridsdell",
            "email": "cridsdell2r@flavors.me",
            "gender": "Male"
          }]
    

// async function getdata()
// {
//     try{
//         let data = await fetch("http://localhost:8080/products")
//         let res = await data.json()
//         console.log(res)
//     }
//     catch(err){
//         console.log(err)
//     }


root.use("/produts",allproducts) 

root.use("/produts/:id",singleproducts) 


root.get("/products/:name",(req,res)=>{       
   console.log(req.params.name)

   let  singledata = products.filter((ele,tar)=>{
    return ele.name == req.params.name
})
res.send(singledata)
})

//root.listen(3000)
function allproducts(req,res,next)       
{
    console.log("Feteching All Books")
    next()
}

function singleproducts(req,res,next) 

{

    
  console.log(req.params.name)
  next()
}

//const book = express()
root.get("/products",(req,res)=>{    // get all books data
    res.send(products)
})
root.post("/products/create",(req,res)=>{
    const {products:productdata} = req.body
    
    products.push(productdata)
    res.status(200).send("Item got added")
})
root.patch("products/:productId",(req,res)=>{
    const {products:productdata} = req.body
    const {productId:proId} = req.params
    for(let i = 0;i < products.length;i++)
    {
        if(proId == products.id)
        {
            products[i] = productdata
            break;
        }

    }
    res.status(200).send("Edited check get data from get method")
})
root.delete("/products/:productId",(req,res)=>{
    const {productId:proId} = req.params
     products.splice(proId+1,1)
   console.log(proId)
    res.status(200).send("Delete happen")
})

root.listen(3003)