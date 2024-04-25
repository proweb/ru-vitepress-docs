import { defineConfig } from 'vitepress';

// Constants
const year = new Date().getFullYear();
const copyright = `Разработчик сайта - <a href="https://sg43.ru">Сергей Мочалов</a>`;

export default defineConfig({
  lang: 'ru-RU',
  title: 'DocPress',
  description: 'Статический сайт',
  titleTemplate: ':title - Сайт',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,

  // Default theme
  themeConfig: {
    // Topnav
    nav: [
      { text: 'Руководства', link: '/guide/' },
      { text: 'Новости', link: '/news/' },
      { text: 'Сайт ДИС', link: 'https://dis.kpfu.ru' },
    ],
    // Sidebar nav
    sidebar: [
      {
        text: 'Раздел A',
        items: [
          { text: 'Ссылка 1', link: '/item-a' },
          { text: 'Ссылка 2', link: '/item-b' },
        ],
      },
      {
        text: 'Раздел B',
        items: [
          { text: 'Ссылка 3', link: '/item-c' },
          { text: 'Ссылка 4', link: '/item-d' },
        ],
      },
    ],
    // Footer text
    footer: {
      message: `${copyright}`,
      copyright: `Все права защищены © 2019-${year}`,
    },
    docFooterText: 'Текст после записи',
    // Поиск
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Найти',
          },
          modal: {
            footer: {
              closeText: 'закрыть',
              selectText: 'выбрать',
              navigateText: 'навигация',
            },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://git.kpfu.ru' }],
    // Labels
    sidebarMenuLabel: 'Меню',
    outline: {
      label: 'На странице:', // ссылки на заголовки
    },
    darkModeSwitchLabel: 'Тема:',
    darkModeSwitchTitle: 'Ночь',
    lightModeSwitchTitle: 'День',
    returnToTopLabel: 'В начало', // To top link text
    docFooter: {
      prev: 'Назад',
      next: 'Вперед',
    },
    // need to be false if NO git
    lastUpdated: false,
  },
});
