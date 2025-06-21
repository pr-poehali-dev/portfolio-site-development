import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Pickaxe",
      title: "Строительство",
      description: "Грандиозные постройки от замков до современных городов",
    },
    {
      icon: "Sword",
      title: "Выживание",
      description: "Hardcore режимы и экстремальные челленджи",
    },
    {
      icon: "Zap",
      title: "Моды и серверы",
      description: "Обзоры лучших модификаций и серверных приключений",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-rubik">
            О моём канале
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Добро пожаловать в мир безграничных возможностей! Здесь ты найдёшь
            самые крутые Minecraft проекты, гайды для новичков и профи, а также
            множество интересных серий и экспериментов.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-rubik">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 font-rubik">
                Почему Minecraft?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Minecraft — это не просто игра, это целая вселенная творчества!
                Каждый блок открывает новые возможности, а каждое приключение
                становится уникальной историей. Я делюсь своим опытом, чтобы
                вдохновить тебя на собственные подвиги в этом удивительном мире.
              </p>
              <div className="flex items-center text-purple-400">
                <Icon name="Heart" size={20} className="mr-2" />
                <span className="font-semibold">Играю уже более 8 лет</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="Gamepad2" size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
