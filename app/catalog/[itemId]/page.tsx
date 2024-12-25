import CatalogPage from "@/components/CatalogPage/CatalogPage";
import { IService } from "@/types/types";
import { FC } from "react";

const services: IService[] = [
  {
    id: 0,
    title: "Лазерный раскрой листового металла",
    image: null,
    description: [
      { type: "title", text: ["Описание товара"] },
      {
        type: "p",
        text: [
          "Лазерный раскрой листового металла — это современная технология, позволяющая точно и быстро обрабатывать металлические листы с использованием лазеров высокой мощности. В Нижневартовске мы предлагаем услуги лазерной резки металла, которые подходят для различных типов материалов, включая сталь, алюминий и нержавеющую сталь. Наши преимущества:",
        ],
      },
      {
        type: "ul",
        text: [
          "Высокая точность. Достигается точность реза до 0,1 мм. Это позволяет выполнять сложные геометрические формы реза.",
          "Высокое качество поверхности. Лазерная резка обеспечивает ровную и аккуратную поверхность с минимальными металлическими окалинами, что позволяет использовать заготовку без дополнительной обработки.",
          "Широкий диапазон материалов. Лазер может резать практически любой листовой металл, включая сталь, алюминий, медь, нержавеющую сталь и т. д.",
          "Высокая производительность. Скорость лазерной резки позволяет обрабатывать большие объёмы заготовок в короткие сроки.",
          "Отсутствие механических нагрузок. Лазер обеспечивает мягкую, бесконтактную обработку металла, что позволяет избежать его повреждений и деформаций.",
          "На нашем производстве работают лазерные станки ЧПУ мощностью до 8 кВт, способный обеспечить высокую точность при раскрое металла толщиной от 0,5 до 30 мм. С максимальным размером листа 1500*3000 мм.",
          "Вам не нужно быть инженером-конструктором, чтобы заказать у нас услуги по резке листового металла. ",
        ],
      },
      {
        type: "title",
        text: ["Какую толщину металла режет лазер"],
      },
      {
        type: "p",
        text: [
          "В зависимости от мощности лазера, можно обрабатывать материалы толщиной от 0,3 до 30 мм. Например, лазер мощностью 6000 Вт может резать сталь толщиной до 20 мм.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит лазерная резка металла"],
      },
      {
        type: "p",
        text: [
          "Цены начинаются от 4,87 рубля за погонный метр, в зависимости от сложности работы и толщины материала.",
        ],
      },
      {
        type: "title",
        text: ["Что можно вырезать на лазере по металлу"],
      },
      {
        type: "p",
        text: [
          "Мы можем вырезать различные детали, включая элементы для промышленного оборудования, архитектурные конструкции и декоративные элементы.",
        ],
      },
      {
        type: "title",
        text: ["Что нельзя резать лазером"],
      },
      {
        type: "p",
        text: [
          "Например, резка некоторых пластиков и материалов с высоким содержанием хлора может быть запрещена из-за выделения токсичных газов.",
        ],
      },
      {
        type: "title",
        text: ["Какой лазер лучше для резки металла"],
      },
      {
        type: "p",
        text: [
          "Выбор лазера зависит от типа материала и требуемой толщины. Волоконные лазеры часто предпочтительнее для резки стали, в то время как CO2 лазеры могут быть более универсальными.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит метр лазерной резки металла"],
      },
      {
        type: "p",
        text: [
          "Как уже упоминалось, стоимость начинается от 4,87 рубля за погонный метр, но может варьироваться в зависимости от сложности и объема заказа.",
        ],
      },
      {
        type: "title",
        text: ["Требования к материалам заказчика"],
      },
      {
        type: "ul",
        text: [
          "материал не должен иметь коррозии и заломов",
          "допустимый прогиб листа на длине 2500 мм не должен превышать 50 мм",
          "заготовка должна иметь прямоугольную форму",
        ],
      },
      {
        type: "p",
        text: [
          "Предприятия, которые оказывают услуги по лазерной резке листового металла, в основном требуют готовые чертежи в специальном формате. Нам достаточно эскиза, нарисованного от руки и общее понимание задуманного. Все остальное мы сделаем сами, а вы получаете готовую деталь!",
        ],
      },
    ],
    layout: [
      "Начните с того, что свяжитесь с нами по телефону, электронной почте или оставьте заявку на сайте.",
      "Расскажите нам о вашем проекте и предоставьте нам детали, такие как размеры, материал и количество.",
      "Наши эксперты помогут вам выбрать наилучший материал и настроить параметры для вашего проекта.",
      "Если вам нравится наше предложение, подтвердите заказ, и мы приступим к работе.",
      "Мы организуем доставку вашего заказа в удобное для вас место.",
    ],
    galleryItems: [],
    keywords:
      "лазерная резка нижневартовск, резка нижневартовск, резка нв, листовая резка нижневартовск, раскрой металла в нижневартовске, раскрой нв, резка металла в нижневартовске, металлов в нв, лазерная резка металла преимущества, требования к лазерной резке",
    isActive: false,
  },
  {
    id: 1,
    title: "Порошковая покраска металлических изделий",
    image: null,
    description: [
      { type: "title", text: ["Описание товара"] },
      {
        type: "p",
        text: [
          "Порошковая покраска - это процесс нанесения специального порошкового материала на поверхность изделия. Порошок состоит из смеси смол и пигментов, которые при нагревании полимеризуются и образуют прочное покрытие.",
        ],
      },
      { type: "title", text: ["Преимущества порошковой окраски металла"] },
      {
        type: "ul",
        text: [
          "Экологичность. Покрытия не содержат токсинов и тяжелых металлов, опасных для здоровья людей. С ними могут без последствий контактировать дети и аллергики",
          "Широкий выбор цветов и оттенков",
          "Разнообразие вариантов декора. Можно создать как гладкое покрытие, так и шагрень, антик, муар и другие разновидности отделки",
          "Устойчивость к механическим повреждениям. Слой краски сохраняется даже при деформации поверхности",
        ],
      },
      { type: "title", text: ["Сколько стоит порошковая окраска"] },
      {
        type: "p",
        text: [
          "Цены начинаются от 90 рублей за метр, что делает этот метод доступным для широкого круга клиентов.",
        ],
      },
      { type: "title", text: ["Как наносится порошковая краска на металл"] },
      {
        type: "p",
        text: [
          "Процесс порошковой покраски включает несколько этапов. Сначала поверхность изделия очищается от грязи, ржавчины и старого покрытия. Затем порошок равномерно наносится на поверхность с помощью электростатического пистолета. После нанесения порошка изделие подвергается нагреванию в специальной печи, где происходит полимеризация и образование прочного покрытия.",
        ],
      },
      {
        type: "title",
        text: ["Нужно ли грунтовать металл перед покраской порошковой краской"],
      },
      {
        type: "p",
        text: [
          "В большинстве случаев предварительная грунтовка не требуется, так как порошковая краска хорошо прилипает к подготовленной поверхности. Однако для некоторых типов металлов может потребоваться дополнительная обработка.",
        ],
      },
      {
        type: "title",
        text: ["Какие металлы можно красить порошковой краской"],
      },
      {
        type: "p",
        text: [
          "Порошковая краска подходит для большинства металлов, включая сталь, алюминий и оцинкованные изделия.",
        ],
      },
      {
        type: "title",
        text: ["Сколько слоев порошковой краски"],
      },
      {
        type: "p",
        text: [
          "Обычно наносят 1-2 слоя, в зависимости от желаемого эффекта и цвета.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит 1 кг порошковой краски"],
      },
      {
        type: "p",
        text: [
          "Цены на порошковую краску варьируются, но в среднем составляют около 300-500 рублей за килограмм.",
        ],
      },
      {
        type: "title",
        text: ["Дорого ли стоит покрыть что-либо порошковой краской"],
      },
      {
        type: "p",
        text: [
          "В целом, стоимость зависит от размера изделия и сложности работы, но порошковая покраска остается одним из наиболее экономичных методов окраски.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит пистолет для порошковой краски"],
      },
      {
        type: "p",
        text: [
          "Цены на пистолеты для порошковой покраски начинаются от 10 000 рублей и могут достигать 50 000 рублей в зависимости от модели и производителя.",
        ],
      },
    ],
    layout: [
      "Размер печи (высота / ширина / глубина), м = 1,8х1,25х7",
      "Печь оборудованна специльными направляющими для погрузки изделий массой до 300 кг",
      "Время выполнения заказов от 1 до 3 рабочих дней",
    ],
    galleryItems: [],
    keywords:
      "порошковая покраска металла, покраска металла в нижневартовске, покраска нв, металл преимущества, покрасить металл порошком, нв краска металла, покраска металлических изделий, красить изделия из металла, порошковая в нижневартовске, красить",
    isActive: false,
  },
  {
    id: 2,
    title: "Изготовление металлоконструкций",
    image: null,
    description: [
      { type: "title", text: ["Описание товара"] },
      {
        type: "p",
        text: [
          "Изготовление металлоконструкций — это важный процесс, который включает в себя проектирование, производство и монтаж различных металлических изделий.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит изготовление металлоконструкций"],
      },
      {
        type: "p",
        text: [
          "Цены могут варьироваться в зависимости от сложности проекта и используемых материалов, но в среднем стоимость изготовления составляет от 30 000 рублей за тонну.",
        ],
      },
      {
        type: "title",
        text: ["Виды металлоконструкций"],
      },
      {
        type: "p",
        text: [
          "Существует множество видов металлоконструкций, включая каркасные конструкции, колонны, балки, фермы и другие элементы, используемые в строительстве.",
        ],
      },
      {
        type: "title",
        text: ["Что входит в изготовление металлоконструкций"],
      },
      {
        type: "p",
        text: ["Процесс включает несколько основных этапов:"],
      },
      {
        type: "ul",
        text: [
          "проектирование",
          "выбор материалов",
          "обработка металла",
          "сварка и монтаж",
        ],
      },
      {
        type: "title",
        text: ["Сколько основных этапов производства металла"],
      },
      {
        type: "p",
        text: [
          "Обычно выделяют четыре ключевых этапа: проектирование, подготовка, производство и монтаж.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит монтаж 1 тонны металлоконструкций"],
      },
      {
        type: "p",
        text: [
          "Цены на монтаж варьируются, но в среднем составляют от 10 000 рублей за тонну. Это зависит от сложности работ и условий на строительной площадке.",
        ],
      },
      {
        type: "title",
        text: ["Какое оборудование нужно для производства металлоконструкций"],
      },
      {
        type: "p",
        text: [
          "Для производства металлоконструкций нужны станки для резки, сварочные аппараты, пресс-станки и другое оборудование, необходимое для обработки металла.",
        ],
      },
    ],
    layout: [],
    galleryItems: [],
    keywords:
      "изготовление металлоконструкций нижневартовск, где изготовить металлоконструкции, преимущества металлоконструкций, металлоконструкции на выбор, сварочные работы, услуги по изготовлению хмао, металлообработка в нижневартовске",
    isActive: false,
  },
  {
    id: 3,
    title: "Гибка металла",
    image: null,
    description: [
      { type: "title", text: ["Описание товара"] },
      {
        type: "p",
        text: [
          "Гибка металла — это промышленный процесс, в ходе которого листовой металл практически любой толщины приобретает необходимую форму. В Нижневартовске услуги по гибке металла востребованы в различных отраслях, включая строительство и производство.",
        ],
      },
      { type: "title", text: ["Что нужно для гибки металла"] },
      {
        type: "p",
        text: [
          "Для гибки металла требуется специальное оборудование, такое как листогибочные прессы и гибочные станки.",
        ],
      },
      {
        type: "title",
        text: ["Какой инструмент используется при гибке металла"],
      },
      {
        type: "p",
        text: [
          " Основными инструментами являются пуансоны и матрицы, которые помогают формировать металл в нужные контуры.",
        ],
      },
      {
        type: "title",
        text: ["Сколько стоит гибка металла"],
      },
      {
        type: "p",
        text: [
          "Цены на услуги гибки могут варьироваться в зависимости от сложности работы и толщины материала, но в среднем стоимость начинается от 500 рублей за метр.",
        ],
      },
      {
        type: "title",
        text: ["Как правильно гнуть металл"],
      },
      {
        type: "p",
        text: [
          "Процесс гибки включает в себя несколько этапов: подготовка заготовки, выбор необходимого инструмента и выполнение гибки с учетом радиуса изгиба.",
        ],
      },
      {
        type: "title",
        text: ["Как рассчитать длину заготовки при гибке"],
      },
      {
        type: "p",
        text: [
          "Для этого необходимо знать угол гибки и радиус, чтобы правильно определить исходные размеры.",
        ],
      },
      {
        type: "title",
        text: ["Как согнуть металл без инструментов"],
      },
      {
        type: "p",
        text: [
          "В некоторых случаях можно использовать ручные методы, такие как сгибание с помощью рычагов или применение тепла для облегчения процесса.",
        ],
      },
      {
        type: "title",
        text: ["Как выбрать пуансон для гибки"],
      },
      {
        type: "p",
        text: [
          "Выбор пуансона зависит от типа материала и требуемой формы. Также важно знать, как рассчитать длину трубы при гибке. Для этого учитываются параметры трубы и угол изгиба.",
        ],
      },
      {
        type: "title",
        text: ["Как определить размер заготовки"],
      },
      {
        type: "p",
        text: [
          "Размер заготовки рассчитывается исходя из конечной формы изделия и необходимых допусков.",
        ],
      },
      {
        type: "title",
        text: ["Как посчитать развертку металла"],
      },
      {
        type: "p",
        text: [
          "Развертка — это длина материала, необходимая для создания изделия, и ее расчет зависит от угла гибки и толщины металла.",
        ],
      },
      {
        type: "title",
        text: [
          "Почему расчет длины заготовки перед гибкой производят по осевой линии",
        ],
      },
      {
        type: "p",
        text: [
          "Это делается для обеспечения точности и правильности формы изделия, так как осевая линия является основной для определения всех размеров.",
        ],
      },
    ],
    layout: [],
    galleryItems: [],
    keywords:
      "гибка металла в нижневартовске,  гибка труб нижневартовск, гибка металла под заказ, услуги гибки, гибка металлических изделий, гибка листового металла нижневартовск",
    isActive: false,
  },
];
export async function generateMetadata({
  params,
}: {
  params: { itemId: string };
}) {
  const service = services[+params.itemId];

  const companyName = 'ООО "РЕМИКС"';
  const year: number = new Date().getFullYear();
  const title: string = service.title;
  return {
    title: `${title} - ${companyName}`,
    description: `${title} в Нижневартовске более 5 лет. Только качественные материалалы. Цены от 5 000 рублей. Работаем в ${year} году!`,
    keywords: service.keywords,
  };
}

const Page: FC<{ params: { itemId: string } }> = ({ params }) => {
  return (
    <>
      <CatalogPage itemId={params.itemId} />
    </>
  );
};

export default Page;
