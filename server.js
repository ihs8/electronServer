const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require("body-parser");
const cors = require('cors');
//for models 
const user = require("./models/user");
const store=require("./models/store");
const order = require("./models/order");
const company = require("./models/company");
const attribute = require("./models/attribute");
const product = require("./models/product");
const report = require("./models/report");
const groupe = require("./models/groupe");
const category = require("./models/category");
const brand = require("./models/brand");

/*
const bcrypt= require('bcrypt');
const QRScanner = require ('qr-code-scanner');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");*/
const app = express();
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cors());
// This VIEW GROUPES 
app.get('/get_groups', async (req, res)=>{
   try{
      await groupe.find({}).then((result)=>{
         res.send(result);
      });
  }   catch (err) {
      console.log(err);
   }
});
// This ADD groupe
app.post('/add_groupe', async (req, res)=> {
   try {
      let new_groupe = new groupe ({
         groupe_ID :req.body.groupeID ,
         groupe_name: req.body.groupeName});
      await new_groupe.save()
      res.send('groupe added !')   
   } catch (err) {
      console.log(err)}
   });
   //this Update Groupe
   app.put('/update_groupe/:groupe_ID',  async(req,res)=>{
      try {
         await groupe.findOneAndUpdate(req.params.ID,{
            groupe_name:req.body.newgroupeName,
         });
         res.send('updated ! ')
      } catch (err) {
         console.log(err)
         
      }
   })
   
//this Delete Groupe
   app.delete('/delete_groupe/:groupe_ID',  async(req,res)=>{
      try {
         await groupe.findOneAndDelete(req.params.ID);
         res.json({
            message:"deleted !",
             }
            )
      } catch (err) {
         console.log(err)
         
      }
   })
   




// This VIEW Brands 
app.get('/get_brands', async (req, res)=>{
   try{
      await brand.find({}).then((result)=>{
         res.send(result);
      });
  }   catch (err) {
      console.log(err);
   }
});
// This ADD Brand
app.post('/add_brand', async (req, res)=> {
   const brandID = req.body.brandID;
   const brandName = req.body.brandName;
   try {
      let new_brand = new brand ({
         brand_ID :brandID ,
         brand_name:brandName});
      await new_brand.save()
      res.send('brand added !')   
   } catch (err) {
      console.log(err)}
   });
   //this Update Brand
   app.put('/update_brand/:brand_ID',  async(req,res)=>{
      
      try {
         await brand.findOneAndUpdate(req.params.ID,{
            brand_name:req.body.newBrandName,
         });
         res.send('updated ! ')
      } catch (err) {
         console.log(err)
         
      }
   })
   
//this Delete Brand
   app.delete('/delete_brand/:brand_ID',  async(req,res)=>{
      const ID = req.params.ID
      try {
         await brand.findOneAndDelete(ID);
         res.json({
            message:"deleted !",
             }
            )
      } catch (err) {
         console.log(err)
         
      }
   })



// This VIEW category 
app.get('/get_categorys', async (req, res)=>{
   try{
      await category.find({}).then((result)=>{
         res.send(result);
      });
  }   catch (err) {
      console.log(err);
   }
});
// This ADD category
app.post('/add_category', async (req, res)=> {

   const CategoryID = req.body.CategoryID;
   const CategoryName = req.body.CategoryName;
   try {
      let new_Category = new category ({
         category_ID :CategoryID ,
         category_name:CategoryName});

      await new_Category.save()
      res.send('category added !')   
   } catch (err) {
      console.log(err)}
   });
   //this Update category
   app.put('/update_category/:category_ID',  async(req,res)=>{
      try {
         await category.findOneAndUpdate(req.params.ID,{
            category_name:req.body.newCategoryName,
         });
         res.send('updated ! ')
      } catch (err) {
         console.log(err)
         
      }
   })
   
//this Delete Category
   app.delete('/delete_category/:category_ID',  async(req,res)=>{
      try {
         await category.findOneAndDelete(req.params.category_ID);
         res.json({
            message:"deleted !",
             }
            )
      } catch (err) {
         console.log(err)
         
      }
   })






// This VIEW store 
app.get('/get_stores', async (req, res)=>{
   try{
      await store.find({}).then((result)=>{
         res.send(result);
      });
  }   catch (err) {
      console.log(err);
   }
});
// This ADD store
app.post('/add_store', async (req, res)=> {
   try {
      let new_store = new store ({
         store_ID :req.body.storeID ,
         store_name: req.body.storeName});
      await new_store.save()
      res.send('store added !')   
   } catch (err) {
      console.log(err)}
   });
   //this Update store
   app.put('/update_store/:store_ID',  async(req,res)=>{
      try {
         await store.findOneAndUpdate(req.params.ID,{
            store_name:req.body.newstoreName,
         });
         res.send('updated ! ')
      } catch (err) {
         console.log(err)
         
      }
   });
   
//this Delete store
   app.delete('/delete_store/:store_ID',  async(req,res)=>{
      try {
         await store.findOneAndDelete(req.params.store_ID);
         res.json({
            message:"deleted !",
            }
            )
      } catch (err) {
         console.log(err)
         
      }
   });




app.get('/get_users', async(req,res) => {
try {
   await user.find({}).then((result)=>{
      res.send(result);
   });
} catch (error) {
   console.log(error)
}
})


app.get('/get_user/:id', async(req,res) => {
   try {
      await user.findById(req.params.id , async(err,result)=> {
         if(err){console.log(err)}if(result){res.send(result)}
      })
   }catch(error){
    console.log(error)
   }
   });



app.post('/add_user', async(req,res)=>{
   try {
   let new_user = new user(req.body)
   await new_user.save()
   res.send('user added !')
   } catch (error) {
      console.log(error)
   }
})
app.put('/update_user/:user_ID' , async(req,res)=>{
   try {
      user.findOneAndUpdate(req.params.user_id,
      {
         username:req.body.newusername,
         password:req.body.newpassword,
         phone:req.body.newphone,
      }, function (err, res) {
         console.log(err)
       })
      res.send('updated ! ')
   } catch (error) {
      console.log(error)
   }
})
app.delete('/delete_user/:user_ID',  async(req,res)=>{
   try {
      await user.findOneAndDelete(req.params.user_ID);
      res.json({
         message:"deleted !",
        }
         )
   } catch (err) {
      console.log(err)
      
   }
});



   
app.get('/get_products', async(req,res) => {
try {
   await product.find({}).then((result)=>{
      res.send(result);
   });
} catch (error) {
   console.log(error)
}
})
app.post('/add_product', async(req,res)=>{
   try {
   let new_product = new product(req.body)
   await new_product.save()
   res.send('product added !')
   } catch (error) {
      console.log(error)
   }
})
app.put('/update_product/:sku' , async(req,res)=>{
   try {
      product.findOneAndUpdate(req.params.sku ,{
         $set:req.body
      },function (err, res) {
         console.log(err)
       } )
      res.send('updated ! ')
   } catch (error) {
      console.log(error)
   }
})
app.delete('/delete_product/:sku',  async(req,res)=>{
   try {
      await product.findOneAndDelete(req.params.user_ID);
      res.json({
         message:"deleted !", }
         )
   } catch (err) {
      console.log(err)
      
   }
});



   app.get('/get_orders', async(req,res) => {
   try {
      await order.find({}).then((result)=>{
         res.send(result);
      });
   } catch (error) {
      console.log(error)
   }
   })
   app.post('/add_order', async(req,res)=>{
      try {
      let new_order = new order({
         bill_no:req.body.orderID,
         order_name:req.body.orderName,
         customer_name:req.body.customerName,
         customer_phone:req.body.customerPhone,
         date_of_order:req.body.dateOfOrder,
         count_total_items:req.body.cti,
         net_amount:req.body.netAmount,
         status:req.body.status
      })
      await new_order.save()
      res.send('order added !')
      } catch (error) {
         console.log(error)
      }
   })
   app.put('/update_order/:bill_no' , async(req,res)=>{

      try {
      await   order.findOneAndUpdate(req.params.ID,{
            order_name:req.body.neworderName,
            customer_phone:req.body.newcustomerPhone,
            status:req.body.newstatus
         } )
         res.send('updated ! ')
      } catch (error) {
         console.log(error)
      }
   })
   app.delete('/delete_order/:bill_no',  async(req,res)=>{
      try {
         await order.findOneAndDelete(req.params.bill_no);
         res.json({
            message:"deleted !", }
            )
      } catch (err) {
         console.log(err)
         
      }
   });


   app.put('/update_company/:company_ID' , async(res,req)=>{
         try {
            let id = req.params.company_ID
            company.findByIdAndUpdate(id ,{$set:req.body} )
            res.send('updated ! ')
         } catch (error) {
            console.log(error)
         }
      })


      app.get('/get_attributes', async(req,res) => {
         try {
            await attribute.find({}).then((result)=>{
               res.send(result);
            });
         } catch (error) {
            console.log(error)
         }
         })
         app.post('/add_attribute', async(req,res)=>{
            try {
            let new_attribute = new attribute(req.body)
            await new_attribute.save()
            res.send('attribute added !')
            } catch (error) {
               console.log(error)
            }
         })
         app.put('/update_attribute/:attribute_ID' , async(req,res)=>{
            try {
               attribute.findOneAndUpdate(req.params.ID ,{$set:req.body},function (err, res) {
                  console.log(err)
                } )
               res.send('updated ! ')
            } catch (error) {
               console.log(error)
            }
         })
         app.delete('/delete_attribute/:attribute_ID',  async(req,res)=>{
            try {
               await attribute.findOneAndDelete(req.params.attribute_ID);
               res.json({
                  message:"deleted !", }
                  )
            } catch (err) {
               console.log(err)
               
            }
         });
app.get('/get_report/:id',async(req , res)=>{
   try {
      report.findById(req.params.id, (err, report) => {
         if (err) {
           return res.json({ success: false, err });
         }
     
         return res.json({
           success: true,
           factory,
         });
       }); }catch(error){
          console.log(error)
       }
})

/*/ This responds a POST request for the homepage
app.post('/login', function (req, res) {
   let {email,password} = req.body;
   email=email.trim();
   password=password.trim();

   if(email=="" || password=="") {
      res.json({
         status:"Failed",
         message:"Empty login"


      })
   }else {
      
      user.find({email:req.body.email}).then(data => {
         if(data) {
            bcrypt.compare(req.body.password, data[0].password,function(err, result) {

               if (result) {
                  let token = jwt.sign({name:data[0].Name},'secret', {expiresIn:'1h'})
                  res.json({

                     status:"success",
                     message:"Signin Successful",
                     data:data,
                     token
               

                  })
               }else{
                  res.json({
                     status:"Failed",
                     message:"Invalid login"
                  })
               }
            })

         }


      })



   }
})
*/

mongoose.connect('mongodb+srv://fleet:tracking@cluster0.vfkzj.mongodb.net/electronAPP?retryWrites=true&w=majority',
(err,done)=>{
if(err)
{console.log(err)}
if (done){
   console.log('DB connected !')
}

});
app.listen(5010,() => console.log("server activate"));