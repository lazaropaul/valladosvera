// server/api/contact.ts
import { z } from 'zod'
import nodemailer from 'nodemailer';

const schema = z.object({
  name: z.string().regex(/^[a-zA-Z ]+$/, 'Introduce un nombre válido'),
  phone: z.string().min(9, 'El telefono ha de tener como minimo 9 numeros'),
  email: z.string().email('Email no válido'),
  city: z.string().min(3, 'La ciudad ha de tener como minimo 3 caracteres'),
  clientType: z.string().min(1, 'Selecciona un tipo de cliente'),
  message: z.string().max(200, 'El mensaje puede contener como máximo 200 caracteres').optional(),
})

export default defineEventHandler(async (event) => {
    try {
      // Get request body
      const body = await readBody(event)
  
      // Validate the incoming data
      const validatedData = schema.parse(body)


  
      // Or save to a database
      // await prisma.contact.create({
      //   data: validatedData
      // })
  
      // Return success response
      return {
        status: 'success',
        message: 'Form submitted successfully',
        data: validatedData
      }
  
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        setResponseStatus(event, 400)
        return {
          status: 'error',
          message: error.errors[0].message,
          errors: error.errors
        }
      }
  
      // Handle other errors
      console.error('Contact form submission error:', error)
      setResponseStatus(event, 500)
      return {
        status: 'error',
        message: 'An error occurred while processing your request'
      }
    }
})
