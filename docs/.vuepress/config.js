import {defaultTheme} from '@vuepress/theme-default'
import {searchPlugin} from '@vuepress/plugin-search'

module.exports = {
    // base: './',
    // dest: './dist',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.png'}]
    ],
    lang: 'zh-CN',
    title: '歪榆禅',
    description: '歪鱼的知识站点，专注知识学习以及自身提升，技术涉猎包括但不限于后端开发、人工智能，欢迎大家交流。',
    theme: defaultTheme({
        logo: '/img/logo.png',
        colorMode: 'light',
        colorModeSwitch: false,
        navbar: [
            {
                text: '🏠 首页',
                link: '/'
            },
            {
                text: '📖 开发攻略',
                children: [
                    {
                        text: '入门基础',
                        children: [
                            {
                                text: '🧩 组成原理',
                                link: '/tech/base/cp.md'
                            },
                            {
                                text: '🖥 操作系统',
                                link: '/tech/base/os.md'
                            },
                            {
                                text: '🕸 计算机网络',
                                link: '/tech/base/network.md'
                            },
                            {
                                text: '⛓ 数据结构',
                                link: '/tech/base/ds.md'
                            },
                            {
                                text: '💿 数据库基础',
                                link: '/tech/base/db.md'
                            },
                            {
                                text: '🧑🏻‍💻 面向对象编程',
                                link: '/tech/base/obj.md'
                            }
                        ]
                    },
                    {
                        text: '编程语言',
                        children: [
                            {
                                text: '🧑🏻‍💻 Java',
                                link: '/tech/lang/java.md'
                            },
                            {
                                text: '🧑🏻‍💻 C++',
                                link: '/tech/lang/cpp.md'
                            },
                            {
                                text: '🧑🏻‍💻 Python',
                                link: '/tech/lang/python.md'
                            },
                            {
                                text: '🧑🏻‍💻 Golang',
                                link: '/tech/lang/golang.md'
                            }
                        ]
                    },
                    {
                        text: '开发进阶',
                        children: [
                            {
                                text: '📐 系统设计',
                                link: '/tech/advanced/sysd.md'
                            },
                            {
                                text: '📲 分布式系统',
                                link: '/tech/advanced/distsys.md'
                            },
                            {
                                text: '💾 高并发',
                                link: '/tech/advanced/highc.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: '🧑🏻‍💻 算法训练',
                children: [
                    {
                        text: '🚗 常用算法',
                        link: '/algorithm/daily.md'
                    },
                    {
                        text: '🚀 Leetcode算法',
                        link: '/algorithm/leetcode.md'
                    }
                ]
            },
            {
                text: '🤖️ AI，从入门到放弃',
                children: [
                    {
                        text: '👀 人工智能概览',
                        link: '/ai/overview.md',
                    },
                    {
                        text: '🤖️ 机器学习',
                        link: '/ai/ml.md',
                    },
                    {
                        text: '🕸 深度学习',
                        link: '/ai/dl.md'
                    },
                    {
                        text: '💬 自然语言处理',
                        link: '/ai/nlp.md'
                    }
                ]
            },
            {
                text: '⏰ 项目实战',
                children: [
                    {
                        text: 'Java',
                        children: [
                            {
                                text: '👨🏻‍🎓 智慧学生公寓SaaS版',
                                link: '/project/java/iaaas.md'
                            }
                        ]
                    },
                    {
                        text: 'C++',
                        children: [
                            {
                                text: '📚 小说阅读器',
                                link: '/project/cpp/novel_reader.md'
                            }
                        ]
                    },
                    {
                        text: 'Golang',
                        children: [
                            {
                                text: '⛓ 简易区块链',
                                link: '/project/golang/blockchain.md'
                            },
                            {
                                text: '🔏 电子合同',
                                link: '/project/golang/econtract.md'
                            },
                            {
                                text: '📝 家庭菜单',
                                link: '/project/golang/family_menu.md'
                            }
                        ]
                    }
                ]
            },
            {
                text: '🌲 碳中和',
                children: [
                    {
                        text: '📰 碳资讯', link: '/carbon_neutral/news.md'
                    },
                    {
                        text: '📖 碳科普', link: '/carbon_neutral/science.md'
                    },
                    {
                        text: '💻 碳科技', link: '/carbon_neutral/tech.md'
                    }
                ],
            }
        ],
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '输入关键词',
                }
            }

        }),
    ],
}