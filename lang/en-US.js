export default async (context, locale) => {

    let home = {
        'entry_title': 'Start using <br>your social capital',
        'entry_subtitle': 'An ocean of opportunity <br>with our ecosystem',
        'read_more': 'Learn more',
        'connect': 'Connect',
        'slider_title': 'What is <span class = "colored"> Viz </span>?',
        'slider_after': 'Explanation in pictures. <br> Press the arrows',
        'tabs_title': '<span class = "colored"> Viz </span> step by step',
        'email': 'vizplus@protonmail.com',
    };

    let slider = [
        {
            'title': 'VIZ is a new layer of the Internet and a new economy for an important part of your life',
            'subtitle': '',
            'image': 'slide-1.svg',
        },
        {
            'title': 'When you do something for others, <span class = "colored"> people are grateful to you </span>',
            'subtitle': 'Likes, thanks, applause, pluses and thumbs up are expressions of gratitude',
            'image': 'slide-2.png',
        },
        {
            'title': 'Amount of thanks from many people - <span class = "colored"> your social capital </span>',
            'subtitle': 'The more people thank you, the more your social capital',
            'image': 'slide-3.png',
        },
        {
            'title': 'VIZ converts social capital <span class = "colored"> into numbers </span>',
            'subtitle': 'Every like and every thanks increases your digital social capital in VISA',
            'image': 'slide-4.png',
        },
        {
            'title': 'Accumulate and use social capital, <span class = "colored"> wherever you like </span>',
            'subtitle': 'A VIZ account can be connected to social networks, instant messengers, websites, applications, games and to real life',
            'image': 'slide-5.png',
        },
        {
            'title': 'Your social capital <span class = "colored"> will persist </span> no matter what',
            'subtitle': 'If your account in a social network or messenger is blocked, it will not affect your accumulated social capital',
            'image': 'slide-6.png',
        },
        {
            'title': 'When you thank others, their social capital <span class = "colored"> rises </span>',
            'subtitle': 'Freely support anyone you like, who benefits or pleases you',
            'image': 'slide-7.png',
        },
        {
            'title': 'At the same time, your social capital is not reduced, you are not giving away anything <span class = "colored"> </span>',
            'subtitle': 'Rewards are taken from a constant relatively small supply on the blockchain',
            'image': 'slide-8.svg',
        },
        {
            'title': 'By rewarding others, you motivate them to do something <span class = "colored"> that is useful or pleasant for you </span>',
            'subtitle': 'People are more likely to respond to more gratitude. Influence those you like ',
            'image': 'slide-9.svg',
        },
        {
            'title': 'The more social capital you have, the <span class = "colored"> more </span> you reward',
            'subtitle': 'Reward a lot of people a little, or a big one,',
            'image': 'slide-10.svg',
        },
        {
            'title': 'The more social capital you have, <span class = "colored"> the more willing people are to help you </span>',
            'subtitle': 'If you are of much benefit to others, they are happy to be of more benefit to you',
            'image': 'slide-11.svg',
        },
        {
            'title': 'VIZ stores your social capital on the blockchain',
            'subtitle': 'Blockchain is a secure system. Nobody has access to your social capital ',
            'image': 'slide-12.svg',
        },
        {
            'title': 'If there is no desire to build up social capital for a long time, you can buy it <span class = "colored"> </span>',
            'subtitle': 'Social capital is better than money: it benefits and does not diminish',
            'image': 'slide-13.svg',
        },
        {
            'title': 'The accumulated social capital in VISA can be turned into money <span class = "colored"> </span>',
            'subtitle': 'If you are very popular, sell free capital, monetize your success',
            'image': 'slide-14.svg',
        },
        {
            'title': 'In VISA you can build your own business <span class = "colored"> without permissions and restrictions </span>',
            'subtitle': 'Program, advertise, help others use their social capital',
            'image': 'slide-15.svg',
        },
        {
            'title': 'Visa has many other features that you will learn about when you start using it.',
            'subtitle': '<span class = "colored big"> For example, right now! </span>',
            'image': 'slide-16.png',
        },
    ];
    
    let advantages = [
        {
            'title': '1mln',
            'subtitle': 'Active Users'
        },
        {
            'title': '1bln',
            'subtitle': 'Transactions <br> per year'
        },
        {
            'title': '40',
            'subtitle': 'New users <br>per week'
        },
        {
            'title': '$10mln',
            'subtitle': 'Visa turnover between users'
        }
    ];

    let tabs = [
        {
            'name': 'Создайте ВИЗ',
            'title': 'Создайте свой первый <br>ВИЗ-аккаунт',
            'content': 'На <a href="https://start.viz.plus/" target="_blank">start.viz.plus</a> пройдите базовый микрокурс по основам ВИЗа и создайте аккаунт. Это займёт несколько минут и не потребует передачи ваших личных данных.',
        },
        {
            'name': 'Ответ-вопрос',
            'title': 'Получайте ответы на возникающие вопросы',
            'content': 'Откройте <a href="https://about.viz.plus/" target="_blank">about.viz.plus</a> — подборку вопросов и ответов для начинающих участников ВИЗа и заглядывайте в неё, если на следующих шагах что-то окажется непонятным. На этом же подсайте вы найдёте подробную информацию о ВИЗе для разработчиков, предпринимателей и инвесторов.',
        },
        {
            'name': 'Личный кабинет',
            'title': 'Подключите ваш аккаунт к Личному кабинету',
            'content': 'Зайдите на <a href="https://my.viz.plus" target="_blank">my.viz.plus</a>, введите имя аккаунта и активный приватный ключ, чтобы получить доступ к операциям. Осмотритесь, походите по страницам, ознакомьтесь с функциями приложения, заполните профиль аккаунта, если хотите.',
        },
        {
            'name': 'Расширение Vizonator',
            'title': 'Установите браузерное расширение Vizonator',
            'content': 'Расширение для браузеров Chrome <a href="https://chrome.google.com/webstore/detail/vizonator/iehoehfkanaobnbldjfjfabbpaiiojnp" target="_blank">(установка)</a> и Firefox <a href="https://addons.mozilla.org/ru/firefox/addon/vizonator/" target="_blank">(установка)</a> позволяет награждать и получать награды непосредственно в Twitter’е, Youtube’е, SoundCloud и на других сайтах (список будет расширяться). Установите расширение и добавьте в него ваш аккаунт и обычный приватный ключ.',
        },
        {
            'name': 'Телеграм-бот VIZ Social bot',
            'title': 'Подключите ваш аккаунт к Телеграм-боту VIZ Social bot',
            'content': '<p>Запустите VIZ Social bot и добавьте в него ваш виз-аккаунт, введя обычный приватный ключ. Следуйте инструкциям в боте.</p><p>Принимайте участие в обсуждениях в группах, будьте полезными и интересными другим участникам. Получайте награды и увеличивайте свой цифровой социальный капитал.</p><p>Предложите админам чатов и каналов, в которых вы состоите, добавить VIZ Social bot, чтобы получать и раздавать награды.</p>',
            'notification_message': 'Проверьте список каналов и групп в Телеграме с виз-ботом и подпишитесь на те, что вам интересны',
            'notifications': [
                {
                    'icon': 'telegram',
                    'title': 'Оттиск на тисе',
                    'message': 'Небольшой авторский канал. Заметки о науке, кульуре, цитаты из книг, интересные картинки из интернета и офлайна, другие мелочи жизни',
                },
                {
                    'icon': 'telegram',
                    'title': 'Web 3.0',
                    'message': 'Новости, аналитика, ссылки, видео о развитии нового Интернета. Автор - один из самых известных российских аналитиков в сфере блокчейн-технологий (Menaskop).',
                }
            ]
        },
        {
            'name': 'Соц. сеть Readdle.Me',
            'title': 'Подключите ваш аккаунт к социальной сети без цензуры Readdle.Me',
            'content': '<p>Перейдите на <a href="https://readdle.me/" target="_blank">Readdle.Me</a>, введите имя своего аккаунта и приватный обычный ключ.</p> <p>Напишите первый пост, а потом расскажите своим друзьям в других социальных сетях и мессенджерах, что теперь у вас есть площадка для общения, которую невозможно заблокировать и цензурировать.</p>',
        },
        {
            'name': 'Информирование о ВИЗе',
            'title': 'Получайте информацию о ВИЗе',
            'content': '<p>Экосистема ВИЗа развивается, и активному участнику сообщества стоит следить за новостями, анонсами и обсуждениями.</p><p>Выберите, какой способ доступа к новостям о ВИЗе вам удобнее, и будьте в курсе всего, что происходит в экосистеме.</p>',
            'notifications': [
                {
                    'icon': 'telegram',
                    'source': 'viz.media',
                    'title': 'Медиаплатформа ВИЗ',
                    'message': 'Информационный портал о ВИЗе: статьи, новости, ссылки. Собирает информацию из всех доступных источников, систематизирует, публикует, позволяет комментировать и награждать авторов.',
                },
                {
                    'icon': 'viz_plus',
                    'source': 'telegram',
                    'title': 'viz+',
                    'message': 'Основная телеграм-группа Инициативы VIZPLUS. Информация о релизах, ответы на вопросы, новости, предложения.',
                },
                {
                    'icon': 'viz_world',
                    'source': 'telegram',
                    'title': 'VIZ.World',
                    'message': 'Популярная телеграм-группа о ВИЗе. Общение пользователей, информация о новых разработках, обсуждение как концепции ВИЗа, так и конкретных вопросов.',
                },
            ]
        },
        {
            'name': 'Покупка и продажа ВИЗов',
            'title': 'Изучите возможности покупки и продажи визов',
            'content': '<p>Увеличить свой цифровой социальный капитал можно быстро и просто - купив необходимое количество визов на свободном рынке. Большой капитал увеличит ваше влияние в экосистеме, пользуйтесь этим, пока токены не подорожали.</p><p>В экосистеме ВИЗа стихийно развиваются площадки, на которых покупатели и продавцы визов находят друг друга. Напомним, в ВИЗе нет администрации или главной компании, все отношения между участниками экосистемы - их личное дело, они никем не контролируются, а все сделки необратимы. Выбирайте партнёров осмотрительно и старайтесь контролировать риски.</p>',
            'notifications': [
                {
                    'source': 'menaskop.xyz',
                    'title': 'Обменник Menaskop',
                    'message': 'Прямая продажа токенов viz за несколько видов криптовалют. Возможны крупные сделки. Цена viz указана в долларах, цена в криптовалюте рассчитывается в долларах автоматически на основе объёма заказа и курса соответствующей валюты к доллару. Самый удобный вариант для покупателей, имеющих криптовалюту.',
                },
                {
                    'source': 'telegram',
                    'title': 'viz+trade',
                    'message': 'Телеграм-группа для торговли визами, курируемая Инициативой VIZPLUS. Доска объявлений о покупке и продаже визов участниками. Предлагайте, договаривайтесь, проводите сделки под свою ответственность.',
                },
                {
                    'source': 'viz.media',
                    'title': 'Магазин чеков ВИЗа',
                    'message': 'Продажа визов в виде чеков за рубли, доллары, евро с использованием банковских карт, Webmoney, QIWI, счетов мобильных операторов и пр. Купленные чеки можно погасить на свой аккаунт в Личном кабинете my.viz.plus. Магазин предлагает чеки на разные суммы. Работает автоматически.',
                },
                {
                    'source': 'wallet.bitshares.org',
                    'title': 'Децентрализованная криптобиржа Bitshares',
                    'message': 'Автоматическая покупка и продажа визов в парах с USDT, BTS, BTC. Требует понимания биржевой торговли и знакомства с не самым простым интерфейсом биржи. Не рекомендуется для новичков и проведения разовых сделок.',
                }
            ]
        },
        {
            'name': 'Идея и философис ВИЗа',
            'title': 'Погрузитесь в идеи ВИЗа и измените свою жизнь к лучшему',
            'content': 'ВИЗ - это новый слой Интернета и новая экономика для важной части вашей жизни. Чем раньше и глубже вы проникнете в идеи и философию ВИЗа, тем полезнее и выгоднее для вас будет участие в его росте.',
        },
        {
            'name': 'Инициатива VIZPLUS',
            'title': 'Примите участие в работе Инициативы VIZPLUS',
            'content': 'Инициатива VIZPLUS - частный некоммерческий проект. Мы проектируем, заказываем, финансируем разработку и поддерживаем работу ключевых сервисов для участников ВИЗа. Мы содержим ноды блокчейна VIZ - как полную публичную, так и несколько делегатских. Также мы помогаем распространять информацию о ВИЗе, привлекаем в ВИЗ разработчиков и инвесторов.',
            'after_content': '<p>Если вы занимаетесь разработкой программного обеспечения, веб-дизайном, переводами, ботами для соцсетей и мессенджеров, интерфейсами и т.п. и заинтересованы в развитии экосистемы ВИЗ, мы готовы обсудить с вами варианты сотрудничества.</p><p>Если вы представляете крупные сообщества и хотите подключиться к экосистеме социального капитала раньше конкурентов, обратитесь к нам за консультациями и технической поддержкой. Мы предоставим готовые решения или разработаем их специально для вас, а также делегируем большой объём социального капитала для развития вашего сообщества.</p>',
            'slider': [
                {
                    'title': 'Первый аккаунт',
                    'subtitle': 'Быстрое и анонимное создание аккаунта',
                    'name': 'start.VIZ+',
                    'link': 'start.viz.plus',
                    'content': 'Простой и безопасный способ создания вашего первого аккаунта в ВИЗе. Вам не придётся сообщать сервису какую-либо личную информацию, а ваши ключи не передаются на сервер.',
                    'bg': '#FF8B71'
                },
                {
                    'title': 'База знаний',
                    'subtitle': 'Инструкции, советы, рекомендации, примеры',
                    'name': 'about.VIZ+',
                    'link': 'about.viz.plus',
                    'content': 'Необходимая информация для владельцев социального капитала, разработчиков, предпринимателей и инвесторов. Теория и практика ВИЗа для тех, кто хочет знать больше.',
                    'bg': '#83A5EC'
                },
                {
                    'title': 'Личный кабинет',
                    'subtitle': 'Приложения для управления аккаунтом',
                    'name': 'my.VIZ+',
                    'link': 'my.viz.plus',
                    'content': 'Ваш личный кабинет в ВИЗе. Практически все функции блокчейна в простом и понятном интерфейсе. Работает и как сайт, и как автономное веб-приложение с прямым доступом в блокчейн.',
                    'bg': '#62D0A1'
                },
                {
                    'title': 'Обозреватель',
                    'subtitle': 'Параметры и состояние блокчейна и аккаунтов',
                    'name': 'info.VIZ+',
                    'link': 'info.viz.plus',
                    'content': 'Актуальные данные о состоянии блокчейна VIZ, параметры экономики, графики активности. История операций аккаунтов. Сведения о делегатах ВИЗа. Блок-эксплорер.',
                    'bg': '#EFB98C'
                }
            ]
        }

    ];

    let footer_links = [
        {
            'name': 'Telegram for questions',
            'link': 'https://t.me/ae_viz_plus',
        },
        {
            'name': 'Telegram Conversation',
            'link': 'https://t.me/vizplus',
        },
    ];

    return {
        home, slider, advantages, tabs, footer_links
    }
}