exp=require('express')
var addi=require('./additional.js')
var path=require('path')
hbs=require('hbs')


console.log(__dirname)
 
var p=path.join(__dirname,'\public')
var p1=path.join(__dirname,"\\template\\views")


var partialspath=path.join(__dirname,"\\template\\partials")

hbs.registerPartials(partialspath)
const app=exp()

app.set('view engine','hbs')

//template is provided by files inside p1
app.set('views',p1)

console.log(p1,p)
app.use(exp.static(p))


/*
app.get('',(req,res)=>{
    res.send('<h1>Anurag Shrivastava</h1>')
})
*/

app.get('',(req,res)=>{
    res.render('index',{name:'Anurag',Company:'IBM in'})
})


/*app.get('/about',(req,res)=>{
    res.send('<h1 style="color:pink">About pagess</h1>')
    
})
*/

app.get('/help',(req,res)=>{
    
    var str='<h1 style="color:blue">Helps pagess</h1>'
    res.render('about',{st:'gdsgdf'})
    
})


//rendering through hbs
app.get('/about',(req,res)=>{
    var str='name is shubham'
    res.render('about',{name:'Anurag',Company:'IBM',st:str})
})


app.get('/weather',(req,res)=>{
//    res.send({name:'Anurag',age:25})
   // place=document.getElementById('place').value

   if(!req.query.address){
        res.send({msg:"Please provide a location....."})
   }
   else{
    addi.getco(req.query.address,(val)=>{
        //res.send(val)
        console.log(val)
        

        addi.getreport(val.lattitude,val.longitude,(val1)=>{
            res.send(val1)
        })
    })
 }      
})


app.get('/about/*',(req,res)=>{

    var err='not able to find content inside about......'
    res.render('error',{errmsg:err})
})



app.get('*',(req,res)=>{

    var err='Page not found!!!'
    res.render('error',{errmsg:err})
})



app.listen(3000,()=>{
    console.log('Server Running')
})
