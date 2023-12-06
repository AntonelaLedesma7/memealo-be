import express from 'express'
import { roomsRouter } from '@/routes/rooms'
import { userRouter } from '@/routes/user'
import { errorHandler } from '@/middlewares/errorHandler'
import 'dotenv/config'
import cors from 'cors'

const PORT = process.env.PORT

const app = express()

app.listen(3000, () => {
  app.use(cors())

  app.use(express.json())

  app.use('/api', roomsRouter, userRouter)

  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})
