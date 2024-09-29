// 1) npm init 2) npm i axios cors express json-server 3） npm i nodemon concurrently -D 
const express=require('express');
const cors=require('cors');
const router=require('./routes/index')
const{handleErrors}=require('./middleware/errorMiddleWare')  
const app=express();



app.use(cors());
app.use(express.json());

app.use('/api',router)
//先call api后调用error函数
app.use(handleErrors);
//app.use

const PORT=80;
app.listen(PORT,()=>{
    console.log('Server is running on http://localhost')
})