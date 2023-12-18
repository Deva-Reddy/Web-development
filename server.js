const express = require('express');
const mongoose = require('mongoose');
const devuser = require('./devusermodel');
const app = express();

app.use(express.json());
// mongoose.connect()
// app.get('/', (req, res) => {
//     return res.send('Hello world')
// })
mongoose.connect("mongodb://127.0.0.1:27017/Devadb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("db connected"));
 

app.get('/getjobs', async (req, res) => {
    try{
       let alljobs = await devuser.find();
       return res.json(alljobs); 
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
});


app.post('/register', async (req, res) => {
   try{
    const {Job_iD, Nameoftherole,Description,Status,Mode_of_work_location,Start_Date,Applyby,CTC,No_of_applicants,
        Experience_Duration,Tag,Age,AboutCompany,About_Internship_job,Skills_Required,Earn_Certifications,Who_can_Apply,Perks,No_of_openings} = req.body;
        const exist = await devuser.find();
        let newuser = new devuser({
            Job_iD, Nameoftherole,Description,Status,Mode_of_work_location,Start_Date,Applyby,CTC,No_of_applicants,
        Experience_Duration,Tag,Age,AboutCompany,About_Internship_job,Skills_Required,Earn_Certifications,Who_can_Apply,Perks,No_of_openings
        })
        newuser.save();
        return res.status(200).send('Job registered');
   }
   catch(err){
    console.log(err);
    return res.status(500).send('Server Error')
   }
});

app.delete('/deletejob/:id', async (req, res) =>{
    try{
        await devuser.findByIdAndDelete(req.params.id);
        return res.json(await devuser.find())
    }
    catch(err){
        console.log('server error');
    }
})

app.put('/update/:_id', async (req, res) =>{
   console.log(req.params)
   let data = await devuser.updateOne(
    req.params,
    {$set: req.body}
   );
   res.send(data);
})


app.listen(5000,()=>console.log('server is running..'));