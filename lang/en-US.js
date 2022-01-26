export default async (context, locale) => {

    let meta = {
        'title': 'What is VIZ?',
        'description': 'Clear explanation in pictures.',
        'image': '/meta-image-en.png'
    };

    let home = {
        'entry_title': 'Start using <br>your social capital!',
        'entry_subtitle': 'How to win friends and influence people - no likes, no donations!',
        'read_more': 'Learn more',
        'connect': 'Join',
        'slider_title': 'What is <span class="colored">VIZ</span>?',
        'slider_after': 'Explanation in pictures. <br>Click on the arrows',
        'tabs_title': '<span class="colored">VIZ</span> step by step',
        'email': 'vizplus@protonmail.com',
        'back': 'Back',
        'close': 'Close last step',
    };

    let slider = [
        {
            'title': 'VIZ is a new layer of the Internet and a new economy for your life',
            'subtitle': '',
            'image': 'slider_01',
        },
        {
            'title': 'You do something for others - <span class="colored">people are grateful to you</span>',
            'subtitle': 'Likes, thanks, applause, pros and thumbs up are expressions of gratitude',
            'image': 'slider_02',
        },
        {
            'title': 'Thanks from many people is <span class="colored">your social capital</span>',
            'subtitle': 'The more people are grateful to you, the greater your social capital',
            'image': 'slider_03',
        },
        {
            'title': 'VIZ transforms <span class="colored">social capital into numbers</span>',
            'subtitle': 'Every like and every thank increase your digital social capital in VIZ',
            'image': 'slider_04',
        },
        {
            'title': 'Accumulate and use social capital <span class="colored">wherever it is convenient</span>',
            'subtitle': 'The VIZ account can be connected to social networks, messengers, websites, applications, games and real life',
            'image': 'slider_05',
        },
        {
            'title': 'Your social capital is <span class="colored">saved</span>, no matter what',
            'subtitle': 'If your social network or messenger account is blocked, it will not affect the social capital you have accumulated',
            'image': 'slider_06',
        },
        {
            'title': 'When you thank others, their social capital <span class="colored">increases</span>',
            'subtitle': 'Freely support anyone you like, those, who gives you benefits or pleasure',
            'image': 'slider_07',
        },
        {
            'title': 'At the same time, your social capital does not decrease, you <span class="colored">do not give up anything</span>',
            'subtitle': 'Rewards are taken from a constant relatively small emission in the blockchain',
            'image': 'slider_08',
        },
        {
            'title': 'By rewarding others, you motivate them to do something <span class="colored">useful or pleasant for you</span>',
            'subtitle': 'People are more willing to respond to a larger gratitude. Influence those you like',
            'image': 'slider_09',
        },
        {
            'title': 'The greater your social capital, the more you <span class="colored">reward</span> others',
            'subtitle': 'Reward many people little by little or reward some with large rewards',
            'image': 'slider_10',
        },
        {
            'title': 'The greater your social capital, <span class="colored">the more willing people are helping you</span>',
            'subtitle': 'If you bring a lot of benefit to others, they are happy to bring more benefit to you',
            'image': 'slider_11',
        },
        {
            'title': 'VIZ stores your social capital in the blockchain',
            'subtitle': 'Blockchain is a secure system. No one has access to your social capital',
            'image': 'slider_12',
        },
        {
            'title': 'If there is no desire to increase social capital for a long time, <span class="colored">you can buy it</span>',
            'subtitle': 'Social capital is better than money: it benefits and does not decrease at the same time',
            'image': 'slider_13',
        },
        {
            'title': 'The accumulated social capital in VIZ might be <span class="colored">turned into money</span>',
            'subtitle': 'If you are very popular, sell your free capital, monetize the success',
            'image': 'slider_14',
        },
        {
            'title': 'With VIZ you can build your business <span class="colored">with no limits and restrictions</span>',
            'subtitle': 'Program, advertise, help others use their social capital',
            'image': 'slider_15',
        },
        {
            'title': 'There are many other possibilities in VIZ, ones you will learn about, when you start using them.',
            'subtitle': '<span class="colored big">For example, <a class="link" href="#guide">right now!</a></span>',
            'image': 'slider_16',
        },
    ];
    
    let advantages = [
        {
            'title': 'accounts_30',
            'subtitle': 'active <br>users in 30nbsp;days'
        },
        {
            'title': 'trx_1',
            'subtitle': 'transactions <br>per day'
        },
        {
            'title': 'supply_value',
            'subtitle': 'size of <br>VIZonomics <br>right now'
        },
        {
            'title': '1,5',
            'subtitle': 'seconds is the average transaction time'
        }
    ];

    let tabs = [
        {
            'name': 'Your account',
            'title': 'Do not pay for the first account!',
            'content': '<p>The account stores your social capital, which is what you will use to receive and distribute rewards. </p><p>On a special secure page, we have launched a service for quick and free account creation. At the same time, there you will learn a little more about how VIZ works.</p>',
            'notifications': [
                {
                    'source': 'start.viz.plus',
                    'title': 'Creating an account',
                    'link': 'https://start.viz.plus/',
                },
            ]
        },
        {
            'name': 'Private Office',
            'title': 'Connect your account to your Private Office',
            'content': '<p>Private Office shows you the status of your social capital and other parameters, and also helps you make transfers, participate in community life, buy and sell tokens, create an account and much more.</p> <p>Log in, enter the account name and the active private key to access operations. Take a look around, go through the pages, familiarize yourself with the functions of the application, fill out your account profile if you wish.</p>',
            'notifications': [
                {
                    'source': 'my.viz.plus',
                    'title': 'Private Office',
                    'link': 'https://my.viz.plus/',
                },
            ]
        },
        {
            'name': 'VIZonator',
            'title': 'VIZonate your browser',
            'content': '<p>The magic of VIZ happens where you communicate or receive information: on the pages of the web, in chat rooms and applications.</p><p>By connecting VIZ to the browser (PC only), you will be able to award and receive rewards directly on popular sites in just click. In addition, Vizonator allows many functions of a Private Office.</p> <p>Unfortunately, mobile browsers do not support extensions.</p>',
            'custom_links': [
                {
                    'image': 'chrome.svg',
                    'title': 'Download an extension for Chrome',
                    'url': 'https://chrome.google.com/webstore/detail/vizonator/iehoehfkanaobnbldjfjfabbpaiiojnp',
                },
                {
                    'image': 'firefox.svg',
                    'title': 'Download an extension for Firefox',
                    'url': 'https://addons.mozilla.org/en/firefox/addon/vizonator/',
                }
            ],
            'notification_message': 'Sites where VIZonator works:',
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
            'name': 'Telegram Bot',
            'title': 'VIZonate your Telegram',
            'content': '<p>Wish to reward the channel author for an outstanding post? Click. Wish to thank the commentator in the chat for a useful hint? Start the answer with "thank you." The telegram bot will do the rest - just connect your VIZ account to it.</p> <p>If you run a Telegram channel or own a chat, start building up your social capital: connect a VIZ bot so that people can reward you.</p>',
            'notifications_after_content': [
                {
                    'icon': 'telegram',
                    'source': 'telegram',
                    'title': 'VIZ telegram bot',
                    'link': 'https://t.me/viz_social_bot/',
                },
            ],
        },
        {
            'name': 'Direct applications',
            'title': 'Download Independence',
            'content': `<p>Some VIZ applications work directly with the blockchain and do not require connection to other servers, like regular websites and applications.</p> <p>Such applications always work. For example, if your bank's servers "crash", you will not be able to access the account - either through the website or through the mobile application - and the card will be blocked. In a direct VIZ application connected directly to the blockchain, there is simply nothing to "fall", it does not have servers.</p> <p>The downside of autonomy is limited functionality and a user doesn't always have simple interaction with the application. Nevertheless, all the basic functions are present and it is not difficult to learn how to work with the application in a different way.</p>`,
            'notifications': [
                {
                    'source': 'viz.direct',
                    'title': 'Direct Private Office',
                    'link': 'https://viz.direct/',
                },
                {
                    'source': 'readdle.me',
                    'title': 'Uncensored social network',
                    'link': 'https://readdle.me/',
                }
            ]
        },
        {
            'name': 'Answers to questions',
            'title': 'Learn all the details and features of VIZ',
            'content': '<p>We have prepared for you a whole sub-site with information about VIZ - from answers to basic user questions to instructions for developing new applications and tips for doing business in VIZ.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus',
                    'title': 'VIZ Data Base',
                    'link': 'https://about.viz.plus/',
                },
            ]
        },
        {
            'name': 'News and Communication',
            'title': 'Subscribe to channels and chats about VIZ',
            'content': '<p>VIZ is developing, new services are constantly appearing and existing ones are updated, so it is important to update all the time. Follow the main information resources about VIZ to immediately find out all the news and participate in their discussion.</p>',
        },
        {
            'name': 'Theory',
            'title': 'Study the concept of social capital',
            'content': '<p>VIZ is not "another crypto", it is a completely new social concept, a new economy and a new kind of relationship between people in modern and future society.</p> <p>To truly understand social capital and prepare for a new era, study the works that formed the basis of VIZ.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus/whitepaper',
                    'title': 'VIZPLUS White Paper',
                    'link': 'https://about.viz.plus/whitepaper/',
                },
                {
                    'source': 'about.viz.plus/invest',
                    'title': 'Theory of the Third Activity and VIZ',
                    'link': 'https://about.viz.plus/invest/',
                },
            ]
        },
        {
            'name': 'Tokens',
            'title': 'Buy or sell VIZ',
            'content': '<p>You can increase your digital social capital quickly and easy by buying the necessary number of VIZ tokens on the free market.</p> <p>A large capital will increase your influence in the ecosystem, use it until the tokens have risen in price. It is also easy and fast to sell VIZ tokens if you decide to monetize your social capital.</p> <p>In VIZ ecosystem, platforms are spontaneously developing, so buyers and sellers of VIZs find each other.</p> <p>Remember that there is no administration or main company in VIZ, all relations between ecosystem participants are their personal business, they are not controlled by anyone and all transactions are irreversible. Choose partners carefully and try to manage the risks.</p> ',
            'notifications': [
                {
                    'source': 'menaskop.xyz',
                    'title': 'Menaskop Exchange',
                    'link': 'https://menaskop.xyz/',
                },
                {
                    'source': 'telegram',
                    'title': 'Direct transactions in viz+trade chat',
                    'link': 'https://t.me/vizplus_trade',
                },
                {
                    'source': 'viz.media',
                    'title': 'Check store on viz.media',
                    'link': 'https://viz.media/shop/',
                },
                {
                    'source': 'market.rudex.org',
                    'title': 'RuDEX Decentralized Exchange',
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
            'name': 'Take part in development',
            'title': 'Bring benefits!',
            'content': '<p>If you are a developer, designer, translator, entrepreneur, investor, blogger, journalist or just an active person who knows how to do something useful, you can help in the development of VIZ and VIZ will help you.</p> <p>The VIZ ecosystem has a built-in mechanism for encouraging those who benefit: a Development Fund from which one can receive substantial payments with an approval of the community.</p> <p>The history of promoting the idea of social capital and its implementation in the form of a VIZ is just the beginning, there is a lot of work ahead and vast opportunities for creative people.</p> <p>There is no "administration", "team", "directorate" and other bosses in VIZ. Only you determine what and how you want to do, with no necessary permission. Here is a new continent waiting to be explored, and unlimited opportunities to grow.</p>',
            'notifications': [
                {
                    'source': 'about.viz.plus/biz/',
                    'title': 'Business with VIZ',
                    'link': 'https://about.viz.plus/biz/',
                },
                {
                    'source': 'telegram',
                    'title': 'Consultations for active telegram participants',
                    'link': 'https://t.me/adm_viz_plus',
                },
            ],
        },
        {
            'name': 'VIZ+ Initiative',
            'title': 'We help to develop VIZ',
            'content': '<p>The VIZPLUS initiative is a private non-profit project. We design, order, finance the development and support the operation of key services for VIZ participants.</p> <p>We maintain VIZ blockchain nodes. We also help to disseminate information about VIZ, attract developers and investors to VIZ.</p>',
            'after_content': '<p>If you are engaged in software development, web design, translations, bots for social networks and messengers, interfaces, etc. and are interested in the development of VIZ ecosystem, we are ready to discuss cooperation options with you.</p> <p>If you represent large communities and want to connect to the ecosystem of social capital ahead of competitors, contact us for advice and technical support. We will provide ready-made solutions or develop them specifically for you, as well as delegate a large amount of social capital to accelerate the community.</p>',
            'slider': [
                {
                    'title': 'First account',
                    'subtitle': 'Quick and anonymous Sign Up',
                    'name': 'start.VIZ+',
                    'link': 'start.viz.plus',
                    'content': 'A simple and secure way to create your first VIZ account. You will not have to tell the service any personal information and your keys are not transmitted to the server.',
                    'bg': '#FF8B71'
                },
                {
                    'title': 'Data base',
                    'subtitle': 'Instructions, tips, recommendations, examples',
                    'name': 'about.VIZ+',
                    'link': 'about.viz.plus',
                    'content': 'Necessary information for owners of social capital, developers, entrepreneurs and investors. VIZ theory and practice for those who want to learn more.',
                    'bg': '#83A5EC',
                },
                {
                    'title': 'Private Office',
                    'subtitle': 'Account Management Apps',
                    'name': 'my.VIZ+',
                    'link': 'my.viz.plus',
                    'content': 'Your Private Office in VIZ. Almost all functions of the blockchain in a simple and clear interface. It works both as a website and as a standalone web application with direct access to the blockchain.',
                    'bg': '#62D0A1'
                },
                {
                    'title': 'Blockchain Explorer',
                    'subtitle': 'Parameters and status of the blockchain and accounts',
                    'name': 'info.VIZ+',
                    'link': 'info.viz.plus',
                    'content': 'Up-to-date data about VIZ blockchain, economic parameters, activity charts. History of account operations. Information about VIZ delegates. Block explorer.',
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
            'name': 'Private Office',
            'link': 'https://my.viz.plus/',
        },
        {
            'name': 'Data base',
            'link': 'https://about.viz.plus/',
        },
        {
            'name': 'Explorer',
            'link': 'https://info.viz.plus/',
        },
    ];
    let footer_links = [
        {
            'name': 'Telegram',
            'link': 'https://t.me/adm_viz_plus'
        },
    ];

    return {
        meta, home, slider, advantages, tabs, viz_list, footer_links
    }
}