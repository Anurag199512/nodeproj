exp=require('express')
var path=require('path')

console.log(__dirname)
 
var p=path.join(__dirname,'\public')
const app=exp()

// to inform express which template engine we have installed
app.set('view engine','hbs')


//fist method //with this no need to use get and render manual all item present in public foder will be displayed
app.use(exp.static(p))
//for about1.html directly can see after typing the url...   localhost/about.html in localhost

//third method // this will render index.hbs for dynamic  content
app.get('',(req,res)=>{
    res.render('index',{name:'Anurag',Company:'IBM'})
})


//rendering through hbs
app.get('/about',(req,res)=>{
    var str='name is shubham shrivastava'
    res.render('about',{st:str})
})

//second method //for static content which we can send manually
app.get('/help1',(req,res)=>{
    
    var str='<h1 style="color:green">Help pagsess</h1>'
    res.send(str)
    
})

app.get('/weather',(req,res)=>{
    res.send({name:'Anurag',age:25})
    
})



app.listen(3000,()=>{
    console.log('Server Running')
})
