import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-2xl">
            <Icon name="Gamepad2" size={48} className="text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-rubik">
            Minecraft
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 block">
              Creator
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Создаю эпические приключения в мире блоков. Строительство,
            выживание, PvP и крутые моды — всё для твоих лучших Minecraft
            моментов!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть на YouTube
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Связаться
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">250K+</div>
            <div className="text-gray-400 text-sm">Подписчиков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400 text-sm">Видео</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5M+</div>
            <div className="text-gray-400 text-sm">Просмотров</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
