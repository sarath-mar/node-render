const http=require("http")
const server=http.createServer((req,res)=>{
    // console.log(req);
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end("Helloo world")
})
const PORT=process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
