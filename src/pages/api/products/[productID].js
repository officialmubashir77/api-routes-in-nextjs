import { getById } from "../../../../services/products";

export default function handler(req , res){

if (req.method === 'GET') {
  
const {productID} = req.query ; 
const product = getById(productID); 
return res.status(200).json(product);

}
return res.status(404).send() ;

}
  