// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/highstakes/";
    },
  },{id: "nav-call-for-papers",
          title: "Call for Papers",
          description: "Submission guidelines, topics of interest, and review process",
          section: "Navigation",
          handler: () => {
            window.location.href = "/highstakes/cfp/";
          },
        },{id: "news-workshop-proposal-submitted-to-aaai-2027-montreal-canada-call-for-papers-coming-july-2026-stay-tuned",
          title: 'Workshop proposal submitted to AAAI 2027, Montreal, Canada. Call for papers coming July...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
