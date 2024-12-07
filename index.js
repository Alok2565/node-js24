const express = require("express");
const conn = require("./config/db_config");
const app = express();
app.use(express.json());
app.put("/:id", (req, resp) => {
  const data = [req.body.name,req.body.email,req.body.password,req.params.id];
  conn.query("update users set name =?,email=?,password=? where id=?",data,(err,result,fields)=>{
    if (err) throw err;
    resp.send(result);  
  });
});
app.delete('/:id',(req,resp)=>{
    conn.query("DELETE FROM users WHERE id= "+ req.params.id,(error,result)=>{
        if(error) throw error;
        resp.send(result);
    });
   // resp.send(req.params.id);
})
app.listen(5000);
