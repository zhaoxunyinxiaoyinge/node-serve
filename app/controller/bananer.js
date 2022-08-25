// "use strict";

// eslint-disable-next-line strict
/**
 * @Controller home表接口操作
 */
 let Controller = require("egg").Controller;
 class BananerController extends Controller {
    async  create(){
         let res={};
         let body=this.ctx.request.body;
         let {pic,text,name,status}=body;
         try{
            res.data=await this.ctx.model.Bananer.create({
               pic,text,name,status
            })
            res.code=0;
         }catch(e){
            res.data={msg:e};
            res.code=1;
         }
         this.ctx.body=res;
    }

    async update(){
       let res={};
       let body=this.ctx.request.body;
       let {pic,text,name,status,id}=body;
       try{
         res.data=await this.ctx.model.Bananer.update({
            pic,text,name,status
         },{where:{id}})
         res.code=0;
      }catch(e){
         res.data={msg:e};
         res.code=1;
      }
      this.ctx.body=res;
    }

    async index(){
       let {limit=10,page=1,id,status,name}=this.ctx.query;
       let where={};
       if(id){
         where.id=id;
       }
       let res={};
       Object.keys(this.ctx.query).forEach(item=>{
          if(this.ctx.query[item]!=''&&item!='page'&&item!='limit'){
            where[item]=this.ctx.query[item];
          }
       })
       console.log(where,"where")
       try{
         res.data=await this.ctx.model.Bananer.findAndCountAll({
            where,
            offset:(limit*(page-1)),
            limit:Number(limit)
         });
         res.code=0;
       }catch(err){
         console.log(err,"err")
         res.code=1;
         res.data={msg:err}
       }
      console.log(res,"res")
       this.ctx.body=res;
    }

    async destroy() {
         let id=this.ctx.params.id;      
         let res={};
         if(id){
            try{
              res.data=await this.ctx.model.Bananer.destroy({
               where:{id}
              });
              res.code=0;
            }catch(err){
              res.code=1;
              res.data={msg:err}
            }
         }else{
            res.code=-1;
            res.data='数据id不存在';
         }
         this.ctx.body=res;
    }
 }
 
 module.exports = BananerController;