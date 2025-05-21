import express from 'express'

const app=express();


const port=process.env.PORT||3000;
app.get('/api/items',(req,res)=>{
  const items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
  { id: 3, name: "Item Three" },
  { id: 4, name: "Item Four" }
];
   res.send(items)
})
app.listen(port,(req,res)=>{
    console.log(`Example app listening on port ${port}`)
})