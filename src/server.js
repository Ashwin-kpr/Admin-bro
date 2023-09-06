const express = require('express')
const {default: AdminBro} = require('admin-bro');
const options = require('./admin.options')
const buildAdminRouter = require('./admin.router');
const mongoose = require('mongoose');
const modal = require('./companies/company.entity')
const app = express()
const port = 3001;



const run =async ()=>{
  await mongoose.connect('mongodb+srv://ashwinravi:1234@ashwin-kpr.294ynlh.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
  
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
}
module.exports = run;