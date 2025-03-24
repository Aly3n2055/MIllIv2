import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define the contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string(),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming request
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real app, you might store this in a database or send an email
      // For now, we'll just log it and return success
      console.log("Contact form submission:", validatedData);
      
      // Return success
      res.status(200).json({ 
        success: true,
        message: "Thank you for contacting us. We'll get back to you soon."
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "An error occurred processing your request. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
