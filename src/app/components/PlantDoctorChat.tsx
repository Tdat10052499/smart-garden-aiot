import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function PlantDoctorChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Xin chào! Tôi là Plant Doctor - trợ lý AI chuyên về trồng dâu tây thủy canh. Tôi có thể giúp bạn giải đáp các thắc mắc về:\n\n• Chẩn đoán bệnh trên lá\n• Cân bằng dinh dưỡng\n• Điều chỉnh pH và TDS\n• Quản lý nhiệt độ và độ ẩm\n• Chu kỳ ánh sáng\n\nBạn có câu hỏi gì cho tôi không?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses based on keywords
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("tds") || lowerMessage.includes("dinh dưỡng")) {
      return "Về TDS (Total Dissolved Solids):\n\n• Giai đoạn sinh trưởng: 800-1000 ppm\n• Giai đoạn ra hoa: 1000-1200 ppm\n• Giai đoạn kết quả: 1200-1400 ppm\n\nNếu TDS quá cao (>1500 ppm), bạn nên pha loãng bằng cách thêm nước sạch. Nếu quá thấp (<700 ppm), thêm dung dịch dinh dưỡng theo tỷ lệ Part A:Part B = 1:1.";
    }

    if (lowerMessage.includes("ph")) {
      return "Về độ pH lý tưởng cho dâu tây:\n\n• Khoảng pH tối ưu: 5.5 - 6.5\n• pH lý tưởng nhất: 5.8 - 6.2\n\nCách điều chỉnh:\n• Nếu pH > 6.5: Thêm pH Down từng giọt, đợi 15 phút rồi đo lại\n• Nếu pH < 5.5: Thêm pH Up từng giọt, đợi 15 phút rồi đo lại\n\nLưu ý: Luôn điều chỉnh pH DESPUÉS khi thêm dinh dưỡng vào nước.";
    }

    if (lowerMessage.includes("bệnh") || lowerMessage.includes("lá")) {
      return "Các bệnh thường gặp trên dâu tây:\n\n🔴 Leaf Scorch (Cháy lá):\n• Triệu chứng: Viền lá chuyển nâu, khô\n• Nguyên nhân: TDS quá cao, thiếu nước\n• Giải pháp: Giảm TDS xuống 1000-1200 ppm\n\n🟡 Powdery Mildew (Phấn trắng):\n• Triệu chứng: Lớp bột trắng trên lá\n• Nguyên nhân: Độ ẩm quá cao (>70%)\n• Giải pháp: Giảm độ ẩm, tăng thông gió\n\n🟢 Nutrient Deficiency:\n• Triệu chứng: Lá vàng, sinh trưởng chậm\n• Nguyên nhân: Thiếu N, P, K hoặc vi lượng\n• Giải pháp: Tăng TDS, kiểm tra cân bằng dinh dưỡng";
    }

    if (lowerMessage.includes("nhiệt độ") || lowerMessage.includes("temperature")) {
      return "Nhiệt độ lý tưởng cho dâu tây:\n\n🌡️ Nhiệt độ không khí:\n• Ban ngày: 20-24°C\n• Ban đêm: 15-18°C\n• Tối đa: Không quá 28°C\n\n💧 Nhiệt độ nước (PT100):\n• Lý tưởng: 18-22°C\n• Nếu >24°C: Nguy cơ thiếu oxy, rễ bị thối\n• Nếu <16°C: Hấp thu dinh dưỡng chậm\n\nGiải pháp làm mát: Sử dụng chiller hoặc đá gel trong bể chứa.";
    }

    if (lowerMessage.includes("ánh sáng") || lowerMessage.includes("light") || lowerMessage.includes("led")) {
      return "Chu kỳ ánh sáng cho dâu tây:\n\n💡 Giai đoạn sinh trưởng:\n• Thời gian: 16-18 giờ/ngày\n• Cường độ: 400-500 μmol/m²/s\n\n🌸 Giai đoạn ra hoa:\n• Thời gian: 12-14 giờ/ngày\n• Cường độ: 500-600 μmol/m²/s\n\nKhoảng cách đèn LED:\n• Đèn công suất cao: 30-40cm\n• Đèn công suất trung bình: 20-30cm\n• Đèn công suất thấp: 15-25cm";
    }

    if (lowerMessage.includes("độ ẩm") || lowerMessage.includes("humidity")) {
      return "Độ ẩm không khí lý tưởng:\n\n💧 Giai đoạn sinh trưởng:\n• 60-70% - giúp lá phát triển tốt\n\n🌸 Giai đoạn ra hoa/kết quả:\n• 40-50% - giảm nguy cơ nấm mốc\n\nCách kiểm soát:\n• Độ ẩm cao: Tăng thông gió, dùng quạt\n• Độ ẩm thấp: Phun sương, dùng máy tạo ẩm\n\nLưu ý: Độ ẩm >80% dễ gây bệnh nấm!";
    }

    // Default response
    return "Cảm ơn bạn đã hỏi! Tôi có thể giúp bạn về các vấn đề:\n\n• TDS và dinh dưỡng\n• Độ pH nước\n• Chẩn đoán bệnh trên lá\n• Nhiệt độ nước và không khí\n• Độ ẩm không khí\n• Chu kỳ ánh sáng LED\n\nVui lòng hỏi cụ thể hơn về vấn đề bạn đang gặp phải nhé!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white/80 backdrop-blur-md rounded-[12px] border border-white/20 shadow-sm">
      {/* Chat Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2D5A27] to-[#72BF44] rounded-full flex items-center justify-center">
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-[#2D5A27] flex items-center gap-2">
              Plant Doctor
              <Sparkles className="text-[#72BF44]" size={16} />
            </h3>
            <p className="text-sm text-gray-600">Trợ lý AI chăm sóc dâu tây</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "user"
                  ? "bg-[#72BF44]"
                  : "bg-gradient-to-br from-[#2D5A27] to-[#72BF44]"
              }`}
            >
              {message.role === "user" ? (
                <User className="text-white" size={16} />
              ) : (
                <Bot className="text-white" size={16} />
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[70%] rounded-[12px] p-4 ${
                message.role === "user"
                  ? "bg-[#72BF44] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="whitespace-pre-line text-sm">{message.content}</p>
              <p
                className={`text-xs mt-2 ${
                  message.role === "user" ? "text-white/70" : "text-gray-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D5A27] to-[#72BF44] flex items-center justify-center">
              <Bot className="text-white" size={16} />
            </div>
            <div className="bg-gray-100 rounded-[12px] p-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Hỏi về TDS, pH, bệnh lá, nhiệt độ..."
            className="flex-1 p-3 border border-gray-300 rounded-[12px] bg-white focus:outline-none focus:border-[#72BF44]"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-[#2D5A27] hover:bg-[#234520] disabled:bg-gray-300 text-white px-6 rounded-[12px] transition-all flex items-center gap-2"
          >
            <Send size={18} />
          </button>
        </div>

        {/* Quick Questions */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setInput("TDS bao nhiêu là tốt?")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-all"
          >
            TDS bao nhiêu là tốt?
          </button>
          <button
            onClick={() => setInput("Lá dâu bị vàng phải làm sao?")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-all"
          >
            Lá bị vàng?
          </button>
          <button
            onClick={() => setInput("Cách điều chỉnh pH")}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-all"
          >
            Điều chỉnh pH
          </button>
        </div>
      </div>
    </div>
  );
}
