export default async (context, locale) => {

    let title = 'What is VIZ?';

    let home = {
        'entry_title': 'Start using <br>your social capital!',
        'entry_subtitle': 'How to win friends and influence people <br>without likes and donations?',
        'read_more': 'Read more',
        'connect': 'Connect',
        'slider_title': 'What is <span class="colored">VIZ</span>?',
        'slider_after': 'Explanation in pictures. <br>Click on the arrows',
        'tabs_title': '<span class="colored">VIZ</span> step by step',
        'email': 'vizplus@protonmail.com',
        'back': 'Back',
        'close': 'Close last step',
    };

    let slider = [
        {
            'title': 'VIZ is a new layer of the Internet and a new economy for an important part of your life',
            'subtitle': '',
            'image': 'slider_01',
        },
        {
            'title': 'When you do something for others, <span class="colored">people appreciate you</span>',
            'subtitle': 'Likes, thanks, applause, upvotes and thumbs up are expressions of gratitude',
            'image': 'slider_02',
        },
        {
            'title': 'Total thanks from many people - <span class="colored">your social capital</span>',
            'subtitle': 'The more people thank you, the greater your social capital',
            'image': 'slider_03',
        },
        {
            'title': 'VIZ translates <span class="colored">social capital into numbers</span>',
            'subtitle': 'Every like and every thank you increases your digital social capital in VIZ',
            'image': 'slider_04',
        },
        {
            'title': 'Accumulate and use social capital <span class="colored">where you like it</span>',
            'subtitle': 'VIZ account can be connected to social networks, instant messengers, websites, apps, games and real life',
            'image': 'slider_05',
        },
        {
            'title': 'Your social capital will <span class="colored">save</span> no matter what',
            'subtitle': 'If your account on a social network or messenger is blocked, it will not affect your accumulated social capital',
            'image': 'slider_06',
        },
        {
            'title': 'When you thank others, their social capital <span class="colored">increases</span>',
            'subtitle': 'Freely support anyone you like who brings you benefit or pleasure',
            'image': 'slider_07',
        },
        {
            'title': 'Your social capital doesn`t decrease, you <span class="colored">give nothing away</span>',
            'subtitle': 'Rewards come from a constant relatively small supply on the blockchain',
            'image': 'slider_08',
        },
        {
            'title': 'By rewarding others you motivate them to do something <span class="colored">useful or enjoyable for you</span>',
            'subtitle': 'People are more likely to respond to big thanks. Influence those you like',
            'image': 'slider_09',
        },
        {
            'title': 'The more social capital you have, the <span class="colored">stronger</span> you reward',
            'subtitle': 'Reward a lot of people a little, or a lot of a few',
            'image': 'slider_10',
        },
        {
            'title': 'The more social capital you have <span class="colored">the more willing people are to help you</span>',
            'subtitle': 'If you do a lot of good for others, they are happy to do more good for you',
            'image': 'slider_11',
        },
        {
            'title': 'VIZ keeps your social capital on the blockchain',
            'subtitle': 'Blockchain is a secure system. No one has access to your social capital',
            'image': 'slider_12',
        },
        {
            'title': 'If you don`t want to build social capital for a long time, <span class="colored">you can buy it</span>',
            'subtitle': 'Social capital is better than money: it brings benefits without diminishing',
            'image': 'slider_13',
        },
        {
            'title': 'Accumulated social capital in VIZ can be <span class="colored">turned into money</span>',
            'subtitle': 'If you are very popular, sell free capital, monetize your success',
            'image': 'slider_14',
        },
        {
            'title': 'You can build your business in VIZ <span class="colored">without permissions and restrictions</span>',
            'subtitle': 'Program, promote, help others use their social capital',
            'image': 'slider_15',
        },
        {
            'title': 'VIZ has many other features that you will learn about once you start using it.',
            'subtitle': '<span class="colored big">For example, <a class="link" href="#guide">right now!</a></span>',
            'image': 'slider_16',
        },
    ];
    
    let advantages = [
        {
            'title': '588',
            'subtitle': 'active <br>users in 30 days'
        },
        {
            'title': '2719',
            'subtitle': 'transactions <br>per day'
        },
        {
            'title': '$313070',
            'subtitle': 'size of <br>VIZonomy <br>right now'
        },
        {
            'title': '1,5',
            'subtitle': 'seconds - <br>average transaction time'
        }
    ];

    let tabs = [
        {
            'name': 'Your account',
            'title': 'First account - <br>at our expense!',
            'content': '<p>The account stores your social capital, which you will use to receive and distribute rewards. </p><p>On a special secure page, we launched a service for quick and free account creation. At the same time, you will also learn a little more about how VIZ works there.</p>',
            'notifications': [
                {
                    'source': 'start.viz.plus',
                    'title': 'Creating an account',
                    'link': 'https://start.viz.plus/',
                },
            ]
        },
        {
            'name': 'My account',
            'title': 'Connect account to Dashboard',
            'content': '<p>My account shows you your social capital status and other parameters, and also helps you make transfers, participate in the community, buy and sell tokens, create an account and much more.</p> <p>Log in , enter your account name and active private key to access your transactions. Look around, surf the pages, check out the features of the app, complete your account profile if you like.</p>',
            'notifications': [
                {
                    'source': 'my.viz.plus',
                    'title': 'My Account',
                    'link': 'https://my.viz.plus/',
                },
            ]
        },
        {
            'name': 'VIZonator',
            'title': 'VIZ your browser',
            'content': '<p>VIZ`s magic happens where you communicate or receive information: on website pages, in chats and applications.</p><p>By connecting VIZ to a browser (desktop only), you can reward and receive rewards directly on popular sites in just one click. In addition, VIZonator performs many functions of the Personal Account.</p> <p>Unfortunately, browsers on phones do not support extensions.</p>',
            'custom_links': [
                {
                    'image': 'chrome.svg',
                    'title': 'Download Chrome Extension',
                    'url': 'https://chrome.google.com/webstore/detail/vizonator/iehoehfkanaobnbldjfjfabbpaiiojnp',
                },
                {
                    'image': 'firefox.svg',
                    'title': 'Download Firefox Extension',
                    'url': 'https://addons.mozilla.org/en/firefox/addon/vizonator/',
                }
            ],
            'notification_message': 'Sites VIZonator works on:',
            'social_links': [
                {
                    'title': 'twitter.com',
                    'image': 'twitter',
                },
                {
                    'title': 'twitch.tv',
                    'image': 'twitch',
                },
                {
                    'title': 'youtube.com',
                    'image': 'youtube',
                },
                {
                    'title': 'soundcloud.com',
                    'image': 'soundcloud',
                },
                {
                    'title': 'bitcointalk.org',
                    'image': 'bitcointalk',
                },
                {
                    'title': 'github.com',
                    'image': 'github',
                },
                {
                    'title': 'reddit.com',
                    'image': 'reddit',
                },
            ],
        },
        {
            'name': 'Telegram bot',
            'title': 'VIZify your Telegram',
            'content': '<p>Award the channel author for a great post? One click. Thank the commentator in the chat for a useful hint? Start your answer with "thank you". The telegram bot will do the rest - just connect your VIZ account to it.</p> <p>If you run a Telegram channel or own a chat, start building your social capital: connect the VIZ bot so that people can reward you .</p>',
            'notifications_after_content': [
                {
                    'icon': 'telegram',
                    'source': 'telegram',
                    'title': 'VIZ telegram bot',
                    'link': 'https://t.me/viz_social_bot/',
                },
            ],
            'notification_message': 'Some Telegram channels and chats with connected VIZ bot:',
            'notifications': [
                {
                    'icon': 'telegram',
                    'title': 'Yewprint',
                    'message': 'Small author`s channel. Notes on science, culture, quotes from books, interesting pictures from the Internet and offline, other little things in life',
                    'link': 'https://t.me/tisnu_channel',
                },
                {
                    'icon': 'telegram',
                    'title': 'Web 3.0',
                    'message': 'News, analytics, links, videos about the development of the new Internet. The author is one of the most famous Russian analysts in the field of blockchain technologies (Menaskop).',
                    'link': 'https://t.me/web3news',
                },
                {
                    'icon': 'telegram',
                    'title': 'Mishka DJ',
                    'message': 'New music and mixed content every day.',
                    'link': 'https://t.me/mishkadj',
                },
                {
                    'icon': 'telegram',
                    'title': 'Teal Community',
                    'message': 'Russian-speaking turquoise community. We want more happy companies that create value.',
                    'link': 'https://t.me/RussiaTeal',
                },
                {
                    'icon': 'telegram',
                    'title': 'SYNERGIS :: RUS',
                    'message': 'Free crypto discussions.',
                    'link': 'https://t.me/synergis',
                }
            ]
        },
        {
            'name': 'Offline Applications',
            'title': 'Download Independence',
            'content': '<p>Some applications in VIZ work directly with the blockchain and do not require connection to other servers, like regular websites and applications.</p> <p>Such applications always work. For example, if your bank`s servers go down, you won`t be able to access your account either through the website or through the mobile app, and the card will stop working. In a standalone VIZ application connected directly to the blockchain, there is simply nothing to “fall”, it has no servers.</p> <p>The downside of autonomy is limited functionality and not always simple user interaction with the application. Nevertheless, all the main functions are there, and learning how to work with the application a little differently is not so difficult.</p>',
            'notifications': [
                {
                    'source': 'viz.direct',
                    'title': 'Offline personal account',
                    'link': 'https://viz.direct/',
                },
                {
                    'source': 'readdle.me',
                    'title': 'Uncensored Social Network',
                    'link': 'https://readdle.me/',
                }
            ]
        },
        {
            'name': 'Question Answers',
            'title': 'Learn all the subtleties and features of VIZ',
            'content': '<p>We`ve prepared a whole subsite for you with information about VIZ, from answers to basic user questions to how to develop new applications and tips for doing business in VIZ.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus',
                    'title': 'VIZ Knowledge Base',
                    'link': 'https://about.viz.plus/',
                },
            ]
        },
        {
            'name': 'News and Communication',
            'title': 'Subscribe to channels and chats about VIZ',
            'content': '<p>VIZ is evolving, new services are constantly being added and existing ones are being updated, so it`s important to stay up to date. Follow the main information resources about VIZ to immediately find out all the news and participate in their discussion.</p>',
            'notifications': [
                {
                    'icon': 'viz_media',
                    'source': 'viz.media',
                    'title': 'VIZ Media Platform',
                    'message': 'Website with news, links and services.',
                    'link': 'https://viz.media/',
                },
                {
                    'icon': 'viz_world',
                    'source': 'telegram',
                    'title': 'VIZ World',
                    'message': 'First telegram chat about VIZ.',
                    'link': 'https://t.me/viz_world',
                },
                {
                    'icon': 'viz_plus',
                    'source': 'telegram',
                    'title': 'viz+',
                    'message': 'Telegram chat with information about VIZPLUS projects.',
                    'link': 'https://t.me/vizplus',
                },
                {
                    'icon': 'viz',
                    'source': 'telegram',
                    'title': 'VIZ.Blockchain',
                    'message': 'Telegram channel with news, announcements and publications.',
                    'link': 'https://t.me/vizblockchain',
                },
            ]
        },
        {
            'name': 'Theory',
            'title': 'Learn the concept of social capital',
            'content': '<p>VIZ is not "another crypto", it`s a completely new social concept, a new economy and a new kind of relationship between people in today`s and future society.</p> <p>To truly understand the social capital and prepare for a new era, study the works that formed the basis of VIZ.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus/whitepaper',
                    'title': 'VIZPLUS White Paper',
                    'link': 'https://about.viz.plus/whitepaper/',
                },
                {
                    'source': 'about.viz.plus/invest',
                    'title': 'Third Activity Theory and VIZ',
                    'link': 'https://about.viz.plus/invest/#%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BD%D0% B0%D0%B4%D0%BE-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2 %D0%B0%D1%82%D1%8C-%D0%B2-%D0%B2%D0%B8%D0%B7',
                },
            ]
        },
        {
            'name': 'Tokens',
            'title': 'Buy or sell viz',
            'content': '<p>It`s quick and easy to increase your digital social capital by purchasing the required number of VIZs on the free market.</p> <p>More capital will increase your influence in the ecosystem, use it before the tokens go up in price. You can just as easily and quickly sell viz tokens if you decide to monetize your social capital.</p> <p>In the VIZ ecosystem, platforms are spontaneously developing where buyers and sellers of VIZs find each other.</p> <p>Recall , there is no administration or main company in VIZ, all relations between ecosystem participants are their own business, they are not controlled by anyone, and all transactions are irreversible. Choose partners carefully and try to control risks.</p> ',
            'notifications': [
                {
                    'source': 'menaskop.xyz',
                    'title': 'Menaskop Exchange',
                    'link': 'https://menaskop.xyz/',
                },
                {
                    'source': 'telegram',
                    'title': 'Direct trades in viz+trade chat',
                    'link': 'https://t.me/vizplus_trade',
                },
                {
                    'source': 'viz.media',
                    'title': 'Viz.media Receipt Shop',
                    'link': 'https://viz.media/shop/',
                },
                {
                    'source': 'market.rudex.org',
                    'title': 'Decentralized Exchange RuDEX',
                    'link': 'https://market.rudex.org/#/market/XCHNG.VIZ_XCHNG.USDT',
                },
                {
                    'source': 'console.minter.network',
                    'title': 'Minter Liquidity Pool',
                    'link': 'https://console.minter.network/en/swap',
                }
            ]
        },
        {
            'name': 'Participation in development',
            'title': 'Be useful!',
            'content': '<p>If you are a developer, designer, translator, entrepreneur, investor, blogger, journalist, or just an active person who knows how to do something useful, you can help develop VIZ, and VIZ will help you.</p > <p>The VIZ ecosystem has a built-in mechanism to reward those who contribute: the Development Fund, from which you can receive substantial payments with the approval of the community.</p> <p>The story of promoting the idea of ​​​​social capital and its implementation in the form of VIZ is just beginning , there is a lot of work ahead and an ocean of opportunities for initiative people.</p> <p>There is no "administration", "team", "management" and other bosses in VIZ. Only you yourself determine what and how you want to do, without asking anyone for permission. Before you - a new continent, waiting for development, and unlimited opportunities for growth.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus/biz/',
                    'title': 'Business in VIZ',
                    'link': 'https://about.viz.plus/biz/',
                },
                {
                    'source': 'telegram',
                    'title': 'Advice for Active Members',
                    'link': 'https://t.me/adm_viz_plus',
                },
            ],
        },
        {
            'name': 'VIZ+ Initiative',
            'title': 'Helping VIZ grow',
            'content': '<p>The VIZPLUS initiative is a private non-profit project. We design, order, finance development and support the operation of key services for VIZ participants.</p> <p>We maintain VIZ blockchain nodes - both full public and several delegate ones. We also help spread the word about VIZ, attract developers and investors to VIZ.</p> ',
            'after_content': '<p>If you`re into software development, web design, translation, social and messenger bots, interfaces, etc. and are interested in developing the VIZ ecosystem, we are ready to discuss cooperation options with you.</p> <p>If you represent large communities and want to connect to the social capital ecosystem before competitors, please contact us for advice and technical support. We will provide ready-made solutions or develop them especially for you, and we will also delegate a large amount of social capital to develop your community.</p>',
            'slider': [
                {
                    'title': 'First account',
                    'subtitle': 'Quick and anonymous account creation',
                    'name': 'start.VIZ+',
                    'link': 'start.viz.plus',
                    'content': 'Easy and secure way to create your first VIZ account. You do not have to provide the service with any personal information, and your keys are not transmitted to the server.',
                    'bg': '#FF8B71'
                },
                {
                    'title': 'Knowledge Base',
                    'subtitle': 'Instructions, tips, tricks, examples',
                    'name': 'about.VIZ+',
                    'link': 'about.viz.plus',
                    'content': 'Required information for social capital owners, developers, entrepreneurs and investors. Theory and practice of VIZ for those who want to know more.',
                    'bg': '#83A5EC',
                },
                {
                    'title': 'My Account',
                    'subtitle': 'Account management apps',
                    'name': 'my.VIZ+',
                    'link': 'my.viz.plus',
                    'content': 'Your personal account in VIZ. Almost all blockchain functions in a simple and understandable interface. Works both as a website and as a standalone web application with direct access to the blockchain.',
                    'bg': '#62D0A1'
                },
                {
                    'title': 'Browser',
                    'subtitle': 'Parameters and state of blockchain and accounts',
                    'name': 'info.VIZ+',
                    'link': 'info.viz.plus',
                    'content': 'Up-to-date data on the state of the VIZ blockchain, economy parameters, activity graphs. History of account transactions. Information about the delegates VIZa. Block explorer.',
                    'bg': '#EFB98C'
                }
            ]
        }

    ];
    
    let viz_list = [
        {
            'name': 'First account',
            'link': 'https://start.viz.plus/',
        },
        {
            'name': 'My Account',
            'link': 'https://my.viz.plus/',
        },
        {
            'name': 'Knowledge Base',
            'link': 'https://about.viz.plus/',
        },
        {
            'name': 'Browser',
            'link': 'https://info.viz.plus/',
        },
    ];
    let footer_links = [
        {
            'name': 'Telegram for questions',
            'link': 'https://t.me/adm_viz_plus'
        },
    ];

    return {
        title, home, slider, advantages, tabs, viz_list, footer_links
    }
}