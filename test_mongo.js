const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://user1:vCF4SBT6A51XqOa7@cluster-proyect.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Conectado a Cosmos DB");
}).catch(err => {
    console.error("❌ Error al conectar:", err);
});
