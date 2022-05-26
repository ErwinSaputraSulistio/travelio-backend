class resultStatus {
   static success = (res, message, data) => {
      res.status(200).json({
         status: "--> OK.",
         message, 
         data 
      })
   }
   static failed = (res, code, error) => {
      res.status(400).json({ 
         status: "--> Not OK.",
         code,
         error 
      })
   }
}

module.exports = resultStatus