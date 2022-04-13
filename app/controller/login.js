const Controller=require("egg").Controller;

class Login extends Controller {
     async index(){
        await this.ctx.render('login/login.html');  
     }
}

module.exports=Login;