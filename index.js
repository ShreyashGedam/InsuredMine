const express = require('express')

const connection = require('./config/config')
const agentRoute = require('./routes/agent.routes')
const userRouter = require('./routes/usertype.routes')
const accountRoute = require('./routes/account.routes')
const carrierRouter = require('./routes/carrier.routes')
const lobRouter = require('./routes/lob.routes')
const policyRouter = require('./routes/policy.routes')
const uploadFileRouter = require('./routes/uploadFile.routes')

const app = express()

app.use(express.json())

app.use("/fileupload", uploadFileRouter)
app.use("/agent", agentRoute)
app.use("/userType", userRouter)
app.use("/account", accountRoute)
app.use("/carrier", carrierRouter)
app.use("/lob", lobRouter)
app.use("/policy", policyRouter)

app.listen(8080, async () => {
    try {
        await connection
        console.log("Connetion to db success")
    } catch (error) {
        console.log("DB connection failed")
    }

    console.log("Server is listening on port 8080")
})