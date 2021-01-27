exports.PORT = process.env.PORT || 80;

exports.DB_URL = process.env.NODE_ENV === 'production'
  ? process.env.DB_URL
  : 'mongodb+srv://user1:passworduser1@cluster0.5vqng.mongodb.net/todos?retryWrites=true&w=majority'



process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;