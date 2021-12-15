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
            'subtitle': 'Every like and every thanks increases your digital social capital in VIZ',
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
            'title': 'The accumulated social capital in VIZ can be turned into money <span class = "colored"> </span>',
            'subtitle': 'If you are very popular, sell free capital, monetize your success',
            'image': 'slide-14.svg',
        },
        {
            'title': 'In VIZ you can build your own business <span class = "colored"> without permissions and restrictions </span>',
            'subtitle': 'Program, advertise, help others use their social capital',
            'image': 'slide-15.svg',
        },
        {
            'title': 'VIZ has many other features that you will learn about when you start using it.',
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
            'subtitle': 'VIZs turnover between users'
        }
    ];

    let tabs = [
        {
            'name': 'Create VIZ',
            'title': 'Create your first <br> VIZ account',
            'content': 'At <a href="https://start.viz.plus/" target="_blank"> start.viz.plus </a> take a basic micro-course on VIZ basics and create an account. This will take a few minutes and does not require the transfer of your personal data. ',
        },
        {
            'name': 'Question-answer',
            'title': 'Get answers to your questions',
            'content': 'Open <a href="https://about.viz.plus/" target="_blank"> about.viz.plus </a> - a compilation of questions and answers for new VIZ members and check it out if something turns out to be incomprehensible in the next steps. On the same sub-site you will find detailed information about VIZ for developers, entrepreneurs and investors. ',
        },
        {
            'name': 'Personal account',
            'title': 'Connect your account to the Personal Account',
            'content': 'Go to <a href="https://my.viz.plus" target="_blank"> my.viz.plus </a>, enter your account name and active private key to access operations. Take a look around, navigate through the pages, check out the app`s features, complete your account profile if you like. ',
        },
        {
            'name': 'Vizonator Extension',
            'title': 'Install the Vizonator browser extension',
            'content': 'Chrome browser extension <a href="https://chrome.google.com/webstore/detail/vizonator/iehoehfkanaobnbldjfjfabbpaiiojnp" target="_blank"> (install) </a> and Firefox <a href = "https://addons.mozilla.org/ru/firefox/addon/vizonator/" target = "_blank"> (install) </a> allows you to reward and receive awards directly on Twitter, Youtube, SoundCloud and on other sites (the list will expand). Install the extension and add your account and regular private key to it. ',
        },
        {
            'name': 'Telegram bot VIZ Social bot',
            'title': 'Connect your account to the Telegram bot VIZ Social bot',
            'content': '<p> Run VIZ Social bot and add your VIZ account to it by entering your usual private key. Follow the instructions in the bot. </p> <p> Take part in group discussions, be useful and interesting to other members. Get rewards and grow your digital social capital. </p> <p> Invite the chat and channel admins you are a member to add the VIZ Social bot to receive and give out rewards. </p> ',
            'notification_message': 'Check the list of channels and groups in Telegram with a VIZ bot and subscribe to those that interest you:',
            'notifications': [
                {
                    'icon': 'telegram',
                    'title': 'Оттиск на тисе',
                    'message': 'Small author channel. Notes about science, culture, quotes from books, interesting pictures from the Internet and offline, other little things in life ',
                    'link': 'https://t.me/tisnu_channel',
                },
                {
                    'icon': 'telegram',
                    'title': 'Web 3.0',
                    'message': 'News, analytics, links, videos about the development of the new Internet. The author is one of the most famous Russian analysts in the field of blockchain technologies (Menaskop). ',
                    'link': 'https://t.me/web3news',
                }
            ]
        }, 
        {
            'name': 'Soc. network Readdle.Me ',
            'title': 'Connect your account to the uncensored social network Readdle.Me',
            'content': '<p> Go to <a href="https://readdle.me/" target="_blank"> Readdle.Me </a>, enter your account name and private regular key. </ p > <p> Write the first post, and then tell your friends on other social networks and instant messengers that you now have a communication platform that cannot be blocked and censored. </p> ',
        }, 
        {
            'name': 'Informing about VIZ',
            'title': 'Get information about VIZ',
            'content': '<p> The VIZ ecosystem is evolving, and an active community member should follow the news, announcements and discussions. </p> <p> Choose which way of accessing VIZ news is the most convenient for you and stay on top of everything. what is happening in the ecosystem. </p> ',
            'notifications': [
                {
                    'icon': 'telegram',
                    'source': 'viz.media',
                    'title': 'VIZ Media Platform',
                    'message': 'Information portal about VIZ: articles, news, links. Gathers information from all available sources, organizes, publishes, allows commenting and rewarding authors. ',
                    'link': 'https://viz.media/',
                },
                {
                    'icon': 'viz_plus',
                    'source': 'telegram',
                    'title': 'viz +',
                    'message': 'Basic telegram group of the VIZPLUS Initiative. Information about releases, answers to questions, news, offers. ',
                    'link': 'https://t.me/vizplus',
                },
                {
                    'icon': 'viz_world',
                    'source': 'telegram',
                    'title': 'VIZ.World',
                    'message': 'Popular telegram group about VIZ. Communication of users, information about new developments, discussion of both the VIZ concept and specific issues. ',
                    'link': 'https://t.me/viz_world',
                },
            ]
        }, 
        {
            'name': 'Buying and selling VIZs',
            'title': 'Explore the possibilities of buying and selling VIZs',
            'content': '<p> You can quickly and easily increase your digital social capital by purchasing the required number of VIZs in the free market. Large capital will increase your influence in the ecosystem, use this before the tokens rise in price. </p> <p> In the VIZ ecosystem, platforms are spontaneously developing where buyers and sellers of VIZs find each other. Recall that there is no administration or main company in VIZ, all relations between ecosystem participants are their own business, they are not controlled by anyone, and all transactions are irreversible. Choose partners carefully and try to control risks. </p> ',
            'notifications': [
                {
                    'source': 'menaskop.xyz',
                    'title': 'Menaskop exchanger',
                    'message': 'Direct sale of viz tokens for several types of cryptocurrencies. Big deals are possible. The viz price is indicated in dollars, the price in cryptocurrency is calculated in dollars automatically based on the order volume and the exchange rate of the corresponding currency against the dollar. The most convenient option for buyers with cryptocurrency. ',
                    'link': 'https://menaskop.xyz/',
                },
                {
                    'source': 'telegram',
                    'title': 'viz + trade',
                    'message': 'Telegram group for the VIZ trade, curated by the VIZPLUS Initiative. Notice board for the purchase and sale of VIZs by participants. Offer, negotiate, conduct transactions at your own risk. ',
                    'link': 'https://t.me/vizplus_trade',
                },
                {
                    'source': 'viz.media',
                    'title': 'VIZ check shop',
                    'message': 'Sale of VIZs in the form of checks for rubles, dollars, euros using bank cards, Webmoney, QIWI, mobile operator accounts, etc. Purchased checks can be redeemed to your account in your personal account my.viz.plus. The store offers checks for different amounts. Works automatically. ',
                    'link': 'https://viz.media/',
                },
                {
                    'source': 'wallet.bitshares.org',
                    'title': 'Bitshares Decentralized Crypto Exchange',
                    'message': 'Automatic purchase and sale of VIZs in pairs with USDT, BTS, BTC. Requires an understanding of exchange trading and familiarity with the not the simplest interface of the exchange. Not recommended for newbies and one-time deals. ',
                    'link': 'https://wallet.bitshares.org/',
                }
            ]
        }, 
        {
            'name': 'The idea and philosophy of VIZ',
            'title': 'Immerse yourself in VIZ ideas and change your life for the better',
            'content': 'VIZ is a new layer of the Internet and a new economy for an important part of your life. The sooner and deeper you penetrate into the ideas and philosophy of VIZ, the more useful and beneficial it will be for you to participate in its growth. ',
        }, 
        {
            'name': 'VIZPLUS Initiative',
            'title': 'Get involved in the VIZPLUS Initiative',
            'content': 'The VIZPLUS initiative is a private non-profit project. We design, order, finance the development and support the operation of key services for VIZ members. We maintain the nodes of the VIZ blockchain - both a full public one and several delegate ones. We also help to spread information about VIZ, attract developers and investors to VIZ. ',
            'after_content': '<p> If you are involved in software development, web design, translation, bots for social networks and messengers, interfaces, etc. and are interested in the development of the VIZ ecosystem, we are ready to discuss options for cooperation with you. </p> <p> If you represent large communities and want to connect to the social capital ecosystem before competitors, contact us for advice and technical support. We will provide ready-made solutions or develop them especially for you, as well as delegate a large amount of social capital for the development of your community. </p> ',
            'slider': [
                {
                    'title': 'First account',
                    'subtitle': 'Quick and anonymous account creation',
                    'name': 'start.VIZ +',
                    'link': 'start.viz.plus',
                    'content': 'An easy and secure way to create your first VIZ account. You do not have to provide the service with any personal information, and your keys are not transferred to the server. ',
                    'bg': '#FF8B71'
                },
                {
                    'title': 'Knowledge Base',
                    'subtitle': 'Instructions, tips, tricks, examples',
                    'name': 'about.VIZ +',
                    'link': 'about.viz.plus',
                    'content': 'Essential information for social capital owners, developers, entrepreneurs and investors. VIZ theory and practice for those who want to know more. ',
                    'bg': '#83A5EC'
                },
                {
                    'title': 'Personal account',
                    'subtitle': 'Account Management Apps',
                    'name': 'my.VIZ +',
                    'link': 'my.viz.plus',
                    'content': 'Your personal account in VIZ. Almost all blockchain functions in a simple and intuitive interface. Works both as a website and as a standalone web application with direct access to the blockchain. ',
                    'bg': '#62D0A1'
                },
                {
                    'title': 'Browser',
                    'subtitle': 'Parameters and state of blockchain and accounts',
                    'name': 'info.VIZ +',
                    'link': 'info.viz.plus',
                    'content': 'Up-to-date data on the state of the VIZ blockchain, economy parameters, activity graphs. Account operations history. Information about VIZ delegates. Block explorer. ',
                    'bg': '#EFB98C'
                }
            ]
        }

    ];

    let footer_links = [
        {
            'name': 'Telegram for questions',
            'link': 'https://t.me/adm_viz_plus',
        },
    ];

    return {
        home, slider, advantages, tabs, footer_links
    }
}