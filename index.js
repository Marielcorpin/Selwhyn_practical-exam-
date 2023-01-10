import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import school_last_attendedRoutes from './routes/school_last_attended.js'
import addressRoutes from './routes/address.js'
import identificationRoutes from './routes/identification.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

/* routes */
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/school_last_attended', school_last_attendedRoutes)
app.use('/crim/:crimId/address', addressRoutes)
app.use('/address/:addressId/identification', identificationRoutes)

/* Connect to Database */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'registered_crim'
})
.then(() => app.listen(PORT, () => console.log('Server listening on ${PORT}')))
.catch((error) => console.log('${error} did not connect'))