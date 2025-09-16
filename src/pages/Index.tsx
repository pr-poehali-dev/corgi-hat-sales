import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Зимняя вязаная шапка",
      price: "1,990 ₽",
      image: "/img/7d9d0c2d-4f92-42dc-9310-a7f46a9e9757.jpg",
      colors: ["coral", "mint", "lavender"]
    },
    {
      id: 2,
      name: "Яркая бини",
      price: "1,590 ₽",
      image: "/img/9610842c-a80c-47a8-8b47-b595af5b9ec2.jpg",
      colors: ["coral", "peach"]
    },
    {
      id: 3,
      name: "Набор модных шапочек",
      price: "4,990 ₽",
      image: "/img/bc807a56-a7de-4e2b-b92e-491b15fe205a.jpg",
      colors: ["coral", "mint", "peach", "lavender"]
    }
  ];

  const galleryImages = [
    "/img/7d9d0c2d-4f92-42dc-9310-a7f46a9e9757.jpg",
    "/img/9610842c-a80c-47a8-8b47-b595af5b9ec2.jpg",
    "/img/bc807a56-a7de-4e2b-b92e-491b15fe205a.jpg"
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Моя корги Луна просто обожает свою новую шапочку! Качество отличное, сидит идеально."
    },
    {
      name: "Михаил С.",
      rating: 5,
      text: "Быстрая доставка, красивая упаковка. Рекс выглядит как настоящий модник!"
    },
    {
      name: "Елена П.",
      rating: 4,
      text: "Очень милые шапки, корги довольна. Размер подошёл точно по таблице."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender/20 to-mint/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-coral/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" size={32} className="text-coral" />
              <h1 className="text-2xl font-bold text-gray-800">CorgiHats</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-600 hover:text-coral transition-colors">Каталог</a>
              <a href="#gallery" className="text-gray-600 hover:text-coral transition-colors">Галерея</a>
              <a href="#delivery" className="text-gray-600 hover:text-coral transition-colors">Доставка</a>
              <a href="#reviews" className="text-gray-600 hover:text-coral transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-coral transition-colors">Контакты</a>
            </nav>
            <Button className="bg-coral hover:bg-coral/90">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Стильные шапки для
            <span className="text-coral"> корги</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Сделайте своего любимца самым модным в округе! Уютные и стильные шапочки, 
            созданные специально для корги.
          </p>
          <Button size="lg" className="bg-coral hover:bg-coral/90 text-lg px-8 py-3">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Посмотреть коллекцию
          </Button>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Icon name="Crown" size={32} className="inline mr-3 text-coral" />
            Популярные модели
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-coral text-white">
                      Хит продаж
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    Размеры: XS, S, M • Материал: хлопок
                  </CardDescription>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-coral">{product.price}</span>
                    <div className="flex space-x-1">
                      {product.colors.map((color, index) => (
                        <div 
                          key={index}
                          className={`w-4 h-4 rounded-full border-2 border-white shadow-sm bg-${color}`}
                        />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-coral hover:bg-coral/90">
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
            <Icon name="Camera" size={32} className="inline mr-3 text-coral" />
            Галерея вдохновения
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Посмотрите, как стильно выглядят корги в наших шапочках!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={`Корги в шапке ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section id="delivery" className="py-16 px-4 bg-mint/10">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Icon name="Truck" size={32} className="inline mr-3 text-coral" />
            Доставка и оплата
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon name="Zap" size={48} className="mx-auto mb-4 text-coral" />
                <CardTitle className="mb-3">Быстрая доставка</CardTitle>
                <CardDescription>
                  Доставим по Москве за 1-2 дня, по России — 3-5 дней
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon name="CreditCard" size={48} className="mx-auto mb-4 text-coral" />
                <CardTitle className="mb-3">Удобная оплата</CardTitle>
                <CardDescription>
                  Картой онлайн, наличными курьеру или при получении
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <Icon name="RotateCcw" size={48} className="mx-auto mb-4 text-coral" />
                <CardTitle className="mb-3">Гарантия возврата</CardTitle>
                <CardDescription>
                  30 дней на возврат, если размер не подошёл
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Icon name="MessageSquare" size={32} className="inline mr-3 text-coral" />
            Отзывы покупателей
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 font-semibold text-gray-700">{review.name}</span>
                  </div>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 px-4 bg-coral/5">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            <Icon name="Phone" size={32} className="inline mr-3 text-coral" />
            Свяжитесь с нами
          </h3>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={20} className="text-coral" />
              <span className="text-lg">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={20} className="text-coral" />
              <span className="text-lg">hello@corgihats.ru</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" size={20} className="text-coral" />
              <span className="text-lg">Москва, ул. Собачья, 42</span>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-coral hover:bg-coral/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Heart" size={24} className="text-coral" />
            <span className="text-xl font-bold">CorgiHats</span>
          </div>
          <p className="text-gray-400">
            © 2024 CorgiHats. Делаем ваших корги ещё более очаровательными! 🐕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;