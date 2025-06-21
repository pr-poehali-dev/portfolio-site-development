import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const videos = [
    {
      title: "Строительство МЕГА ЗАМКА",
      description:
        "Эпическая постройка средневекового замка с полной детализацией",
      views: "1.2M",
      duration: "23:45",
      thumbnail:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    },
    {
      title: "Выживание 100 ДНЕЙ",
      description: "Hardcore выживание без читов и модов - только навыки!",
      views: "890K",
      duration: "45:12",
      thumbnail:
        "https://images.unsplash.com/photo-1551103782-8ab07aaa0f2a?w=400",
    },
    {
      title: "ЛУЧШИЕ МОДЫ 2024",
      description: "Обзор самых крутых модификаций этого года",
      views: "654K",
      duration: "18:33",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    },
    {
      title: "PvP МАСТЕР-КЛАСС",
      description: "Секреты профессионального PvP от топового игрока",
      views: "2.1M",
      duration: "31:28",
      thumbnail:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400",
    },
    {
      title: "АВТОМАТИЧЕСКИЕ ФЕРМЫ",
      description: "Гайд по созданию самых эффективных автоферм",
      views: "1.5M",
      duration: "27:19",
      thumbnail:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
    },
    {
      title: "СЕКРЕТНЫЕ КОМАНДЫ",
      description: "Команды которые изменят твою игру навсегда",
      views: "780K",
      duration: "16:42",
      thumbnail:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rubik">
            Популярные видео
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Самые просматриваемые и любимые зрителями видео с моего канала
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-rubik group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {video.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Icon name="Eye" size={16} className="mr-1" />
                    {video.views} просмотров
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-900"
                  >
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold"
          >
            <Icon name="Youtube" size={20} className="mr-2" />
            Смотреть все видео
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
