//serving content from public directory...
exp=require('express')
var path=require('path')

console.log(__dirname)
 
var p=path.join(__dirname,'\public')
const app=exp()



/*
    app.get('',(req,res)=>{
    res.send('<h1>Anurag Shrivastava</h1>')
})

index.html is deleted as of now so taht app1 can work
*/
 
//fist method //with this no need to use get and render manual all item present in public foder will be displayed
app.use(exp.static(p))
//for about1.html directly can see after typing the url...   localhost/about.html in localhost

 
 //second method //for static content which we can send manually
app.get('/help1',(req,res)=>{
    
    var str='<h1 style="color:blue">Help spagess</h1>'
    res.send(str)
    
})

app.get('/weather',(req,res)=>{
    res.send({name:'Anurag',age:25})
    
})



app.listen(3000,()=>{
    console.log('Server Running')
})
