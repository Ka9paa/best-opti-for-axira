import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-c6947b67/health", (c) => {
  return c.json({ status: "ok" });
});

// AI Chat endpoint
app.post("/make-server-c6947b67/ai-chat", async (c) => {
  try {
    console.log('=== AI CHAT REQUEST START ===');
    
    const rawBody = await c.req.text();
    console.log('Raw body received, length:', rawBody?.length);
    
    let parsedBody;
    try {
      parsedBody = JSON.parse(rawBody);
      console.log('Body parsed successfully');
    } catch (e) {
      console.error('JSON parse error:', e);
      return c.json({ error: 'Invalid JSON in request body' }, 400);
    }
    
    const { message, conversationHistory } = parsedBody;

    console.log('Message received:', message ? 'YES' : 'NO');
    console.log('Message length:', message?.length);
    console.log('Conversation history items:', conversationHistory?.length || 0);

    if (!message || typeof message !== 'string') {
      console.error('Invalid message - message:', message, 'type:', typeof message);
      return c.json({ error: 'Message is required' }, 400);
    }

    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openaiApiKey) {
      console.error('OPENAI_API_KEY not found in environment variables');
      return c.json({ error: 'OpenAI API key not configured. Please add it to Supabase Edge Function secrets.' }, 500);
    }

    console.log('OpenAI API key found, making request...');

    // System prompt for Axira optimization expert
    const systemPrompt = `You are the Axira AI Assistant, an expert in Windows PC optimization, FPS boosting, and gaming performance tweaks. You help users with:

- GPU optimization (NVIDIA/AMD tweaks, power settings, driver optimization)
- CPU performance (idle states, scheduling, core parking, power plans)
- RAM/Memory optimization (XMP/DOCP, page file, memory compression)
- Network optimization (ping reduction, TCP/IP tweaks, Nagle's algorithm)
- Windows debloating (safe services to disable, telemetry removal)
- BIOS settings for gaming (C-States, PCIe settings, Resizable BAR)
- Game-specific optimizations (Fortnite, Valorant, Warzone, Apex)
- Troubleshooting (stuttering, lag, crashes, performance issues)

Key facts about Axira Optimizer:
- 3 packages: CHECKUP (free), FOUNDATION ($15), ELITE ($30)
- CHECKUP gives +5-15 FPS with basic tweaks
- FOUNDATION gives +15-30 FPS with advanced GPU/network tweaks
- ELITE gives +25-50 FPS with all premium tweaks (ASPM disable, thermal throttle disable, etc.)
- All tweaks are safe, reversible, and don't modify hardware or game files
- No risk of anti-cheat bans (VAC, EAC, BattleEye safe)
- Uses Windows registry and service optimizations only

Be conversational, helpful, and provide actionable advice. Give specific step-by-step instructions when asked. Use emojis sparingly. Keep responses concise but informative.`;

    // Build messages array for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...(conversationHistory || []),
      { role: 'user', content: message }
    ];

    console.log('Calling OpenAI API...');

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 800,
        temperature: 0.7,
      })
    });

    console.log('OpenAI response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      return c.json({ 
        error: `OpenAI API error (${response.status}): ${errorText.substring(0, 200)}` 
      }, 500);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');

    const aiMessage = data.choices[0].message.content;

    return c.json({ 
      message: aiMessage,
      usage: data.usage 
    });

  } catch (error) {
    console.error('AI chat error:', error);
    return c.json({ 
      error: `Internal server error: ${error.message || 'Unknown error'}` 
    }, 500);
  }
});

Deno.serve(app.fetch);
