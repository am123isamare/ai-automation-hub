import voice from "@/assets/videos/AI_Enterprise_Voice_Agent_Commercial_60s.mp4.asset.json";
import youtube from "@/assets/videos/autopilot_promo_60s.mp4.asset.json";
import insta from "@/assets/videos/instagram-auto-reply-walkthrough.mov.asset.json";
import whatsapp from "@/assets/videos/whatsapp-automation-with-music.mov.asset.json";
import social from "@/assets/videos/ai-social-media-bot-demo-v2.mov.asset.json";
import property from "@/assets/videos/Smart_Property_Consolidation_System.mp4.asset.json";
import chatbot from "@/assets/videos/AI_Chatbot_Development_Project_1_1.mp4.asset.json";

export const EMAIL = "amnahadia34@gmail.com";
export const PHONE = "+92 322 6184767";
export const GITHUB = "https://github.com/amnahadia34-dotcom";
export const LINKEDIN = "https://www.linkedin.com/in/amna-aurangzaib-051bb364/";

export type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  business: string;
  workflow: string[];
  video?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AI Enterprise Voice Agent",
    category: "Voice AI · Conversational Agent",
    problem: "Routine spoken customer conversations take up staff time and are hard to handle consistently.",
    solution: "A voice agent that listens, understands the request with an LLM and replies in natural speech.",
    features: ["Speech-to-text and natural voice replies", "LLM-driven conversation flow", "Context-aware responses", "API-ready integration layer"],
    tech: ["Python", "OpenAI API", "Speech APIs", "REST APIs"],
    business: "Front-line call handling, FAQs and appointment-style interactions without manual effort.",
    workflow: ["Caller speech", "Speech-to-text", "LLM reasoning", "Voice response", "Handled conversation"],
    video: voice.url,
    featured: true,
  },
  {
    name: "AI YouTube Automation SaaS",
    category: "SaaS · Content Automation",
    problem: "Producing YouTube content consistently involves many repetitive manual steps.",
    solution: "A SaaS-style autopilot that automates the pipeline from idea to script to publishing workflow.",
    features: ["AI script and title generation", "Automated content workflow", "Dashboard-style interface", "Repeatable scheduling pipeline"],
    tech: ["Python", "Streamlit", "OpenAI API", "YouTube API"],
    business: "Helps creators and agencies produce consistent content with less manual work.",
    workflow: ["Topic input", "AI script & metadata", "Content assembly", "YouTube API", "Published video"],
    video: youtube.url,
    featured: true,
  },
  {
    name: "Facebook & Instagram AI Automation",
    category: "Social · Meta Integrations",
    problem: "Brand pages receive comments and DMs on two platforms that need fast, consistent replies.",
    solution: "One combined auto-reply system for Facebook and Instagram using the Meta Graph API and webhooks.",
    features: ["Auto-reply to comments and DMs", "Unified Facebook + Instagram handling", "Webhook-based event processing", "Configurable reply logic"],
    tech: ["Python", "Meta Graph API", "Webhooks", "OpenAI API"],
    business: "Keeps brand pages responsive around the clock.",
    workflow: ["Comment / DM", "Webhook event", "Reply logic + AI", "Meta Graph API", "Reply posted"],
    video: insta.url,
    github: "https://github.com/aurangzaib-ai/FACEBOOK-INSTAGRAM-AUTOREPLY",
  },
  {
    name: "WhatsApp Business Automation",
    category: "Messaging · WhatsApp Cloud API",
    problem: "Repetitive customer messages on WhatsApp consume time and delay responses.",
    solution: "Automated WhatsApp replies, templates and conversation routing through the Cloud API.",
    features: ["Automated message replies", "Template and bulk messaging", "Conversation routing", "Cloud API integration"],
    tech: ["Python", "WhatsApp Cloud API", "REST APIs"],
    business: "Customer support, order updates and lead follow-ups on the channel customers already use.",
    workflow: ["Incoming message", "Routing logic", "Reply / template", "WhatsApp Cloud API", "Customer answered"],
    video: whatsapp.url,
    github: "https://github.com/amnahadia34-dotcom/Whatsapp-Automation-",
  },
  {
    name: "AI Social Media Automation",
    category: "Content · AI Bot",
    problem: "Keeping a regular social presence requires constant, repetitive content work.",
    solution: "A bot that generates captions and posts with AI and automates the posting workflow.",
    features: ["AI-generated captions and posts", "Automated posting workflow", "Multi-platform ready", "Simple control interface"],
    tech: ["Python", "OpenAI API", "Meta Graph API", "Streamlit"],
    business: "Consistent social presence for small teams without a dedicated content manager.",
    workflow: ["Content brief", "AI generation", "Review interface", "Platform APIs", "Scheduled post"],
    video: social.url,
    github: "https://github.com/amnahadia34-dotcom/SOCIAL-MEDIA-BOT-PROJECT",
  },
  {
    name: "Smart Property Consolidation System",
    category: "Data · Consolidation",
    problem: "Property data scattered across multiple sources is slow to merge and review by hand.",
    solution: "A system that merges, cleans and structures multi-source property data into one dataset.",
    features: ["Multi-source data merging", "Cleaning and de-duplication", "Google Sheets sync", "Interactive Streamlit view"],
    tech: ["Python", "Pandas", "Streamlit", "Google Sheets API"],
    business: "Saves manual spreadsheet work for property and real-estate operations.",
    workflow: ["Source files", "Pandas cleaning", "De-duplication", "Google Sheets API", "Unified dataset"],
    video: property.url,
    github: "https://github.com/amnahadia34-dotcom/Property-moduler",
  },
  {
    name: "AI Chatbot Development",
    category: "Conversational AI · Web",
    problem: "Users need quick answers and guidance without waiting for a human.",
    solution: "A custom AI chatbot with tailored prompts, knowledge and conversation memory.",
    features: ["Natural language Q&A", "Custom knowledge and prompts", "Conversation memory", "Web interface"],
    tech: ["Python", "OpenAI API", "Streamlit", "REST APIs"],
    business: "Support and lead qualification on websites and internal tools.",
    workflow: ["User question", "Context + memory", "LLM response", "Web interface", "User guided"],
    video: chatbot.url,
  },
];
