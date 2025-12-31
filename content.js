// Theme constants for global styling
const THEME = {
    backgroundColor: '#f5f5f5',      // Nice light gray background
    textColor: '#2d2d2d',             // Dark gray text
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'  // Nice common font stack
};

// Content data structures for easy content management
const siteContent = {
    header: {
        title: "Quo Vadis?",
        subtitle: "Bicycle for the mind"
    },

    cards: [
        {
            header: "Intelligence",
            title: "",
            text: `There is a related "Theorem" about progress in AI: once some mental function is programmed, people soon cease to consider it as an essential ingredient of "real thinking". The ineluctable core of intelligence is always in that next thing which hasn't yet been programmed. This "Theorem" was first proposed to me by Larry Tesler, so I call it Tesler's Theorem: "AI is whatever hasn't been done yet."
<br>
<br> -- Gödel, Escher, Bach by Douglas R. Hofstadter, 1979 Chapter 18: Artificial Intelligence.
<br><br>
<a href="https://quoteinvestigator.com/2024/06/20/not-ai/" rel="nofollow">As Soon As It Works, No One Calls It AI Anymore</a>`
        },
        {
            header: "Brain Food Reference",
            title: "",
            text: `Read <a href="/brainfood_reference/">curated list of mental gems and streams</a> to fuel cognition.`
        },
        {
            header: "C0DE",
            title: "",
            items: [
                `Embed <a href="https://github.com/reefactor/cppy3">Python scripting layer    into C++ app</a> in 10 minutes.`,
                `Build <a href="https://github.com/reefactor/org.backbone">your dev team IT infra IAAC</a>`,
                `Employ <a href="/brainfood_reference/security_review_python_code_protector.html">Python code protection via obfuscation and compilation</a>`,
                `Enjoy <a href="https://github.com/reefactor/zx-spectrum-instapack">ZX Spectrum Demoscene collection with best emulators, and all-in-one ZXBOX VM build</a>`
            ]
        },
        {
            header: "Teach youself High Availability in 60 sec",
            image: {
                src: "https://raw.githubusercontent.com/reefactor/brainfood_reference/master/res/howto-ha.gif",
                alt: "HOWTO HA или Отказоустойчивость для чайников",
                style: "max-width:19rem;"
            }
        }
    ],

    sections: [
        {
            id: "xplain",
            title: '<a href="https://autofaq.ai/xplain">xplain</a>',
            items: [
                `E<a href="https://autofaq.ai/xplain">xplain</a> your Website, Confluence, DOCX, XLSX, PDF`
            ]
        },
        {
            id: "skyrunning",
            title: "Skyrunning Elbrus 2023",
            items: [
                `Забег <a href="https://elbrus.redfox.ru/docs/skajranning/index2.html">Вертикальный километр</a> от поляны Азау (2450 м) до станции Мир (3450 м)`,
                `Результат: <a href="https://live.myrace.info/?f=bases/2023/RFER/VK2023.clax">Place 91 / 131 Time 1:21:58 Average speed 2,85 km/h</a>`
            ]
        },
        {
            id: "autofaq",
            title: '<a href="https://autofaq.ai">autofaq.ai</a>',
            items: [
                `<a href="https://habr.com/ru/company/croc/blog/522072/">Как роботизировать поддержку с помощью машинного обучения</a> в компаниях <a href="https://www.cnews.ru/news/line/2019-08-14_alfabank_zapustil_intellektualnogo_hrbota">Альфа банк</a>, <a href="https://www.cnews.ru/news/line/2020-08-12_krok_robotiziroval_pervuyu">Мегафон</a>, <a href="https://rb.ru/opinion/bot-valera/">Райффайзенбанк</a>, <a href="https://www.cnews.ru/news/line/2019-09-25_set_1s_vnedrila_chatbota">1С</a>, <a href="https://fond.sk.ru/foundation/itc/b/news/archive/2020/08/20/fond-_1c20_skolkovo_1d20_-zapustil-robotizirovannuyu-sluzhbu-podderzhki-kompaniyrezidentov.aspx">Фонд Сколково</a>, <a href="https://www.cnews.ru/news/line/2021-06-30_obrabotka_85_zaprosov_za">585*Золотой</a>, <a href="https://olp.ru/rostelecom-cod/">Ростелеком - ЦОД</a> (<a href="https://drive.google.com/file/d/1oh_yGKpU_5ufzvQImNVw5JCLqJf31CJm/view">ITSM 2021</a>, <a href="https://www.youtube.com/watch?v=cB-KrU6R0WY">VMWare VCD support</a>), <a href="https://vc.ru/pwc/239196-novyy-sotrudnik-pwc-botya-spasaet-ot-haosa-dannyh-i-reshaet-tysyachi-voprosov-ezhegodno">PWC</a>, и в проектах <a href="https://www.tadviser.ru/index.php/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82:%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%84%D0%BE%D1%80%D1%83%D0%BC_%28%D0%9F%D0%9C%D0%AD%D0%A4%29_%28AutoFAQ_%D0%9D%D0%B5%D0%B9%D1%80%D0%BE%D1%81%D0%B5%D1%82%D1%8C%29">ПМЭФ</a>, <a href="https://www.tadviser.ru/index.php/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82:%D0%92_%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8_%D0%B2%D0%BD%D0%B5%D0%B4%D1%80%D0%B5%D0%BD_%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82_%D0%B4%D0%BB%D1%8F_%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%B2_%D0%BE_%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8F%D1%85_%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0">Туризм в Туле</a>, <a href="https://www.cnews.ru/news/line/2023-11-28_novosibirskenergosbyt">Новосибирскэнергосбыт IT поддержке</a>`,
                `Как <a href="https://career.habr.com/companies/autofaq"> попасть к нам в команду</a> инженеров разработки сердца <a href="https://career.habr.com/companies/autofaq/vacancies">коммуникационной платформы</a>, языка сценариев, адаптеров к текстовым каналам комуникаций, команду <a href="https://habr.com/ru/company/croc/blog/580590/">исследователей релевантности семантического поиска</a> в сервисах Баз Знаний, и DevOps инженеров сопровождения.`
            ]
        },
        {
            id: "marathon",
            title: 'Absolute Moscow Marathon 22 September 2019',
            items: [
                `Результат: <a href="https://results.runc.run/event/absolute_moscow_marathon_2019/result/9637/">Finish Time 4:11:47 Pace 5:59 min/km</a>`
            ]

        },
        {
            id: "reason8",
            title: "reason8.ai",
            items: [
                `<a href="https://techcrunch.com/2017/12/04/auroom-is-an-ai-assistant-for-managers-and-meetings">Reason8 is an AI assistant for managers and meetings</a> at TechCrunch Disrupt Berlin 2017.`
            ]
        },
        {
            id: "datadvance",
            title: "DATADVANCE Research & Development",
            items: [
                `PSE core engineering team`,
                `<a href="https://www.datadvance.net/blog/tech-tips/2016/smartselection-in-predictive-modeling-toolkit.html">Predictive Modeling toolkit</a> engineering team to Build, <a href="https://www.datadvance.net/blog/tech-tips/2017/model-validator.html">Validate</a> and <a href="https://www.datadvance.net/blog/tech-tips/2017/model-explorer.html">Explore</a>`,
            ],
            colClass: "row justify-content-md-center",
            iframes: [
                {
                    src: "https://www.slideshare.net/slideshow/embed_code/key/tlMR5zQ0WnPuhX?startSlide=1",
                    width: "600px",
                    height: "470px"
                },
                {
                    src: "https://www.slideshare.net/slideshow/embed_code/key/56dMV5jMSMLfi0?startSlide=1",
                    width: "600px",
                    height: "470px"
                }
            ]
        },
        {
            id: "mailru",
            title: "mail.ru search team",
            items: [
                `2007-2010 Search engineering team from <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA_Mail.ru#GoGo.Ru">gogo.ru</a> to <a href="https://habr.com/en/company/mailru/blog/149498/">go.mail.ru</a>`
            ]
        },
        {
            id: "research",
            title: "Undergraduate & Masters research and publications",
            items: [
                `<a href="https://github.com/reefactor/undergrad_crypto">XLong, XGaloisLib</a> C++ implementation of fast math routines for long integer operations and arithmetic in GF(2m). 2002-2004.`,
                `<a href="https://elib.bsu.by/handle/123456789/92531">Дискретное логарифмирование на мультипликативной группе для двухсоставного модуля RSA</a> Сюрин, В. Н. Гаврилова, И. Л. Шилко, Д. В. библиотека БГУ 2007.`
            ]
        },
        {
            id: "passion",
            title: "Passion of youth",
            content: `<div class="col-md-auto justify-content-left">
                <p>
                    <a href="#demoscene_player" class="its_showtime btn btn-outline-primary btn-sm">
                        <i class="fas fa-random"></i> Shuffle playlist and enable demo sound
                    </a> of ZX Speccy Demoscene
                </p>
                <p>
                    <div class="row align-items-center autoplay-timer-bar">
                        <div class="col-xs-10 progress progress-striped active" style="width: 11rem;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="col-xs-2">&nbsp;&nbsp;<button class="cancel_autoplay btn btn-sm btn-outline-secondary">
                            <i class="far fa-times-circle"></i> Cancel autoplay</button>
                        </div>
                    </div>
                </p>
                <p>
                    Enjoy it
                    <a href="#demoscene_player" class="demoscene_player_fullscreen btn btn-outline-secondary btn-sm">
                        <i class="fas fa-expand-arrows-alt"></i> Fullscreen
                    </a>
                </p>
                <p>
                    Checkout
                    <a href="/zx-spectrum-instapack/">zx-spectrum-instapack</a> collection
                </p>
            </div>
            <a name="demoscene_player"></a>
            <div class="col-md-4 justify-content-right">
                <div class="" id="fscontainer">
                    <div id="speccy_container" class="shadow-lg bg-white rounded" style="width: 864px; height: 700px; position: relative; margin: auto; float: none;"></div>
                </div>
            </div>`
        }
    ],

    footer: {
        links: [
            {
                href: "https://github.com/reefactor",
                className: "btn btn-outline-light btn-lg box",
                icon: "fab fa-github",
                text: ""
            },
            {
                href: "https://www.linkedin.com/in/dennis-shilko-973b0522",
                className: "btn btn-outline-light btn-lg box",
                icon: "fab fa-linkedin",
                text: ""
            },
            {
                href: "https://career.habr.com/sdennis",
                className: "btn btn-outline-light btn-lg box",
                icon: "",
                imgSrc: "https://career.habr.com/images/favicons/favicon-32.png",
                text: "Habr"
            }
        ]
    }
};

