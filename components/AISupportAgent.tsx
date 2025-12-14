import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageSquare, ShieldCheck, Bot, User, Zap } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AISupportAgentProps {
  onClose: () => void;
  packageName?: string;
}

export function AISupportAgent({ onClose, packageName = 'CHECKUP' }: AISupportAgentProps) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Package-based limits
  const getPackageLimits = () => {
    const pkg = packageName.toUpperCase();
    
    if (pkg.includes('ELITE')) {
      return {
        maxChats: 15,
        maxMessages: 100,
        maxCharacters: 1000,
        badge: 'ELITE',
        badgeColor: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50 text-yellow-400'
      };
    } else if (pkg.includes('FOUNDATION')) {
      return {
        maxChats: 8,
        maxMessages: 50,
        maxCharacters: 750,
        badge: 'FOUNDATION',
        badgeColor: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/50 text-blue-400'
      };
    } else {
      // CHECKUP or default
      return {
        maxChats: 3,
        maxMessages: 20,
        maxCharacters: 500,
        badge: 'CHECKUP',
        badgeColor: 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-gray-500/50 text-gray-400'
      };
    }
  };

  const limits = getPackageLimits();

  // Format message content to support basic markdown-like formatting
  const formatMessage = (content: string) => {
    return content.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    const question = inputText.trim();
    setInputText('');
    setIsTyping(true);
    
    try {
      // Build conversation history for API
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const payload = {
        message: question,
        conversationHistory: conversationHistory
      };

      console.log('Sending AI request:', payload);

      // Call the AI backend
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-c6947b67/ai-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('AI backend error:', errorData);
        throw new Error(errorData.error || 'Failed to get AI response');
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI chat error:', error);
      
      // Fallback error message with more details
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `⚠️ Error: ${error.message}\n\nThis usually means:\n1. OpenAI API key is not configured in Supabase\n2. API key is invalid or expired\n3. OpenAI API is having issues\n\nTo fix:\n- Check Supabase logs for detailed error\n- Verify OPENAI_API_KEY is set in Edge Function secrets\n- Make sure the key starts with "sk-" and is valid`,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex">
      {/* Sidebar */}
      <div className="w-56 bg-[#0A0A0A] border-r border-gray-800 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-4 flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-all"
        >
          <X className="w-4 h-4" />
          <span className="text-sm">AI Assistant</span>
        </button>

        {/* Stats */}
        <div className="px-4 py-3 space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400">Open chats</span>
            <span className="ml-auto text-gray-300">1/{limits.maxChats}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="w-4 h-4 text-gray-500" />
            <span className="text-gray-400">Daily messages</span>
            <span className="ml-auto text-gray-300">0/{limits.maxMessages}</span>
          </div>
        </div>

        {/* Today Section */}
        <div className="px-4 py-4 border-t border-gray-800">
          <div className="text-xs text-gray-500 mb-3">Today</div>
          <button className="w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-800/50 rounded-lg transition-all">
            New chat
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-800">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-blue-500" />
                <h1 className="text-2xl">Axira AI Assistant</h1>
              </div>
              <p className="text-gray-400 text-sm">Your personal optimization expert. Ask me anything about FPS, tweaking, and performance!</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-black overflow-y-auto p-6">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <Bot className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Start a conversation</h3>
                <p className="text-gray-500 text-sm">Ask me anything about tweaking and optimization!</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map(msg => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                  )}
                  <div className={`max-w-2xl rounded-2xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-blue-600/20 border border-blue-500/30' 
                      : 'bg-gray-800/50 border border-gray-700/50'
                  }`}>
                    <p className="text-sm leading-relaxed">{formatMessage(msg.content)}</p>
                    <span className="text-xs text-gray-500 mt-2 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="max-w-2xl rounded-2xl p-4 bg-gray-800/50 border border-gray-700/50">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about tweaks, BIOS, debloat..."
              maxLength={limits.maxCharacters}
              className="w-full px-5 py-4 pr-24 bg-[#0A0A0A] border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 transition-all"
            />
            
            {/* Character Count */}
            <div className="absolute right-5 bottom-[-24px]">
              <span className="text-xs text-gray-600">{inputText.length}/{limits.maxCharacters}</span>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className={`absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                inputText.trim()
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-800 text-gray-600 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
