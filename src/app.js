const express=require('express');
const app=express();
const hbs=require('hbs')
const port =process.env.PORT || 3000;
const path=require('path')




//public static path
const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");


//set the engine
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path)
//routing 
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.render('index')
})


app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"Oops ! Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})