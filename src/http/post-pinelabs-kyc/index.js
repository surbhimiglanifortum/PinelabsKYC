// learn more about HTTP functions here: https://arc.codes/http
exports.handler = async function http (req,res) {

  if (!req.headers.authorization || req.headers.authorization.indexOf("Basic ") === -1) {
    return    {
      statusCode: 401,
      message: "Missing Authorization Header"
      
   }
  }

// verify auth credentials
const base64Credentials =  req.headers.authorization.split(" ")[1];
const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
const [username, password] = credentials.split(":");
//const user = await userService.authenticate({ username, password });
if (username!="pinelabskyc" || password!="pinelabskyc@Fortum") {
    return  {
    statusCode: 401,
    message: "Invalid Authentication Credentials" 
  }
}

return { 
  
    statusCode: 200,
    message: "Success" 
  
}
}