import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const socialLinks = [
    { icon: "Youtube", label: "YouTube", color: "hover:text-red-500" },
    { icon: "MessageCircle", label: "Discord", color: "hover:text-indigo-500" },
    { icon: "Send", label: "Telegram", color: "hover:text-blue-500" },
    { icon: "Mail", label: "Email", color: "hover:text-green-500" },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rubik">
            Связаться со мной
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готов к сотрудничеству, предложениям или просто хочешь обсудить
            Minecraft? Напиши мне!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 font-rubik">
              Отправить сообщение
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Тема
                </label>
                <Input
                  placeholder="О чём хотите поговорить?"
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Сообщение
                </label>
                <Textarea
                  placeholder="Расскажите подробнее..."
                  rows={5}
                  className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                />
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6 font-rubik">
                Где меня найти
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`justify-start p-4 h-auto text-gray-300 ${social.color} hover:bg-slate-700 transition-all duration-300`}
                  >
                    <Icon
                      name={social.icon as any}
                      size={24}
                      className="mr-3"
                    />
                    <span>{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 font-rubik">
                Для сотрудничества
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Icon
                    name="Users"
                    size={16}
                    className="mr-3 text-purple-400"
                  />
                  <span>Рекламные интеграции</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Gamepad2"
                    size={16}
                    className="mr-3 text-purple-400"
                  />
                  <span>Обзоры серверов/модов</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Video"
                    size={16}
                    className="mr-3 text-purple-400"
                  />
                  <span>Совместные проекты</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl">
              <Icon
                name="Clock"
                size={32}
                className="mx-auto mb-3 text-purple-400"
              />
              <p className="text-white font-semibold mb-1">
                Обычно отвечаю в течение
              </p>
              <p className="text-purple-300 text-2xl font-bold">24 часов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
