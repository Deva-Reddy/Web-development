const mongoose = require('mongoose');

const devuser = new mongoose.Schema({
    Job_iD:{ 
        type: Number,
         required: true,
     },
     Nameoftherole:{ 
        type: String, 
        required: true,
     },
     Description:{ 
        type: String, 
        required: true,
     },
     Status:{ 
        type: String,
         required: true,
     },
     Mode_of_work_location:{ 
        type: String, 
        required: true,
     },
     Start_Date:{ 
        type: Number, 
        required: true, 
     },
     Applyby:{ 
        type: Number, 
        required: true, 
     },
     CTC:{
         type: Number, 
         required: true,
     },
     No_of_applicants:{ 
        type: Number, 
        required: true,
     },
     Experience_Duration:{ 
        type: String, 
        required: true, 
     },
     Tag:{ 
        type: String, 
        required: true,
     },
     Age:{ 
        type: Number, 
        required: true,
     },
     AboutCompany:{ 
        type: String, 
        required: true,
     },
     About_Internship_job:{ 
        type: String, 
        required: true,
     },
     Skills_Required:{ 
        type: [String], 
        required: true,
     },
     Earn_Certifications:{ 
        type: Boolean, 
        required: true,
     },
     Who_can_Apply:{ 
        type: String, 
        required: true,
     },
     Perks:{ 
        type: [String], 
        required: true,
     },
     No_of_openings:{ 
        type: Number, 
        required: true,
     }
});

module.exports = mongoose.model('devuser',devuser);