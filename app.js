'use strict';

/*
 * SecHub — static resource directory.
 * The catalogue below is local data. No remote API, analytics or tracking is used.
 */
const RESOURCES = {
  tools: [
    { name: 'Nmap', kind: 'Сканирование и инвентаризация сети', description: 'Определение доступных узлов и служб в сети. Используй только на собственной инфраструктуре или с разрешения владельца.', url: 'https://nmap.org/download.html', category: 'network', tags: 'nmap network scanner диагностика сканирование' },
    { name: 'Wireshark', kind: 'Анализ сетевого трафика', description: 'Графический анализатор сетевых протоколов и сохранённых захватов пакетов.', url: 'https://www.wireshark.org/download.html', category: 'network', tags: 'wireshark packets pcap анализатор трафик' },
    { name: 'tcpdump', kind: 'Захват пакетов', description: 'Консольная утилита для захвата и анализа сетевых пакетов.', url: 'https://www.tcpdump.org/', category: 'network', tags: 'tcpdump capture pcap консоль' },
    { name: 'iperf3', kind: 'Измерение пропускной способности', description: 'Проверка пропускной способности между узлами, которыми ты управляешь.', url: 'https://github.com/esnet/iperf', category: 'network', tags: 'iperf3 speed bandwidth throughput скорость' },
    { name: 'MTR', kind: 'Диагностика маршрута', description: 'Показывает маршрут до узла и статистику потерь и задержек.', url: 'https://github.com/traviscross/mtr', category: 'network', tags: 'mtr ping traceroute route диагностика' },
    { name: 'Zeek', kind: 'Мониторинг и анализ сети', description: 'Платформа для анализа сетевых событий и построения наблюдаемости.', url: 'https://zeek.org/get-zeek/', category: 'network', tags: 'zeek network monitoring мониторинг' },
    { name: 'OWASP ZAP', kind: 'Проверка веб-приложений', description: 'Инструмент тестирования веб-безопасности. Применяй к собственным приложениям и учебным стендам.', url: 'https://www.zaproxy.org/download/', category: 'web', tags: 'zap owasp web proxy security' },
    { name: 'Burp Suite Community', kind: 'Анализ HTTP(S)-запросов', description: 'Набор инструментов для ручного анализа веб-приложений и запросов.', url: 'https://portswigger.net/burp/communitydownload', category: 'web', tags: 'burp suite proxy web security портсвиггер' },
    { name: 'CyberChef', kind: 'Преобразование и анализ данных', description: 'Браузерный набор операций для декодирования, преобразования и анализа строк и файлов.', url: 'https://gchq.github.io/CyberChef/', category: 'web', tags: 'cyberchef encode decode base64 hash' },
    { name: 'Ncat', kind: 'Сетевые соединения и диагностика', description: 'Утилита из проекта Nmap для работы с TCP и UDP. Применяй её только в своей сети или с разрешения.', url: 'https://nmap.org/ncat/', category: 'network', tags: 'ncat netcat tcp udp network sockets' },
    { name: 'OpenSSH', kind: 'Защищённый удалённый доступ', description: 'Набор инструментов для SSH-подключений, передачи файлов и управления ключами.', url: 'https://www.openssh.org/portable.html', category: 'network', tags: 'openssh ssh scp sftp keys remote access' },
    { name: 'OWASP Amass', kind: 'Инвентаризация внешних активов', description: 'Инструмент обнаружения цифровых активов и построения карты поверхности атаки. Используй только для разрешённых доменов.', url: 'https://owasp.org/www-project-amass/', category: 'network', tags: 'amass owasp assets domains attack surface reconnaissance' },
    { name: 'Ghidra', kind: 'Реверс-инжиниринг', description: 'Среда анализа программ и бинарных файлов. Используй для изучения собственного кода и учебных образцов.', url: 'https://github.com/NationalSecurityAgency/ghidra/releases', category: 'analysis', tags: 'ghidra reverse engineering disassembler binary nsa' },
    { name: 'ExifTool', kind: 'Метаданные файлов', description: 'Просмотр и редактирование метаданных изображений, аудио, видео и документов.', url: 'https://exiftool.org/', category: 'analysis', tags: 'exiftool metadata image photo document metadata' },
    { name: 'OSINT Framework', kind: 'Каталог открытых источников', description: 'Дерево инструментов и источников для разных типов OSINT-исследований.', url: 'https://osintframework.com/', category: 'osint', tags: 'osint framework open source intelligence directory sources' },
    { name: 'Bellingcat Toolkit', kind: 'Инструментарий цифровых расследований', description: 'Подборка средств для геолокации, проверки фото и видео, архивирования и исследования открытых источников.', url: 'https://bellingcat.gitbook.io/toolkit', category: 'osint', tags: 'bellingcat osint geolocation maps images video verification' },
    { name: 'SpiderFoot', kind: 'Автоматизация OSINT', description: 'Открытая платформа сбора и сопоставления публичных сведений. Ограничивай проверки своими активами или полученным разрешением.', url: 'https://github.com/smicallef/spiderfoot', category: 'osint', tags: 'spiderfoot osint domain ip email threat intelligence' },
    { name: 'Maigret', kind: 'Поиск публичных профилей по нику', description: 'Инструмент проверки совпадений имени пользователя в открытых сервисах. Не используй для преследования, доксинга или обхода приватности.', url: 'https://github.com/soxoj/maigret', category: 'osint', tags: 'maigret username social media public profiles osint' }
  ],
  learning: [
    { name: 'TryHackMe', kind: 'Интерактивные учебные комнаты', description: 'Практические комнаты по сетям, Linux и кибербезопасности; часть материалов доступна бесплатно.', url: 'https://tryhackme.com/', category: 'learning', tags: 'tryhackme beginner обучение комнаты' },
    { name: 'picoCTF', kind: 'CTF для начинающих', description: 'Задачи по основам компьютерной безопасности от Carnegie Mellon University.', url: 'https://picoctf.org/', category: 'learning', tags: 'picoctf ctf beginner carnegie mellon' },
    { name: 'PortSwigger Web Security Academy', kind: 'Лаборатории веб-безопасности', description: 'Бесплатные практические лаборатории по классам уязвимостей веб-приложений.', url: 'https://portswigger.net/web-security', category: 'learning', tags: 'portswigger academy web labs xss sql injection' },
    { name: 'OverTheWire: Bandit', kind: 'Linux и командная строка', description: 'Практические уровни по SSH, файлам, правам доступа и базовым командам Linux.', url: 'https://overthewire.org/wargames/bandit/', category: 'learning', tags: 'overthewire bandit linux ssh терминал' },
    { name: 'Hack The Box Academy', kind: 'Пошаговые учебные модули', description: 'Структурированные модули по инфраструктуре, сетям и безопасности; условия бесплатного доступа смотри на сайте.', url: 'https://academy.hackthebox.com/', category: 'learning', tags: 'hack the box htb academy modules' },
    { name: 'OWASP Juice Shop', kind: 'Уязвимое учебное приложение', description: 'Специально созданное OWASP приложение для обучения. Разворачивай в своей лаборатории.', url: 'https://owasp.org/www-project-juice-shop/', category: 'learning', tags: 'owasp juice shop vulnerable app local lab' },
    { name: 'pwn.college', kind: 'Практика компьютерной безопасности', description: 'Учебные dojos по Linux, программированию, системной безопасности и анализу уязвимостей.', url: 'https://pwn.college/', category: 'learning', tags: 'pwn college dojo linux computing cybersecurity education' },
    { name: 'CyberDefenders', kind: 'Blue Team и цифровая криминалистика', description: 'Практические задания по анализу инцидентов, поиску угроз и цифровой криминалистике.', url: 'https://cyberdefenders.org/', category: 'learning', tags: 'cyberdefenders blue team forensics threat hunting labs' },
    { name: 'Blue Team Labs Online', kind: 'Лаборатории защиты', description: 'Сценарии для тренировки анализа логов, реагирования на инциденты и защитных навыков.', url: 'https://blueteamlabs.online/', category: 'learning', tags: 'blue team labs online soc incident response logs' },
    { name: 'Root-Me', kind: 'Практические задачи по безопасности', description: 'Большая коллекция задач и испытаний по веб-безопасности, сетям, криптографии и системам.', url: 'https://www.root-me.org/', category: 'learning', tags: 'root me challenges ctf web network crypto learning' }
  ],
  systems: [
    { name: 'Arch Linux', kind: 'Linux · rolling release', description: 'Минималистичный дистрибутив с гибкой настройкой и подробной документацией.', url: 'https://archlinux.org/download/', category: 'linux', tags: 'arch linux rolling advanced' },
    { name: 'Ubuntu', kind: 'Linux · универсальная система', description: 'Популярный дистрибутив для настольных компьютеров, серверов и разработки.', url: 'https://ubuntu.com/download', category: 'linux', tags: 'ubuntu linux desktop server' },
    { name: 'Debian', kind: 'Linux · стабильная система', description: 'Универсальный дистрибутив с большим репозиторием и разными вариантами установки.', url: 'https://www.debian.org/download', category: 'linux', tags: 'debian linux stable' },
    { name: 'Fedora Workstation', kind: 'Linux · рабочая станция', description: 'Современная настольная система для разработчиков и повседневной работы.', url: 'https://fedoraproject.org/workstation/download', category: 'linux', tags: 'fedora workstation linux' },
    { name: 'Linux Mint', kind: 'Linux · удобный рабочий стол', description: 'Дистрибутив с традиционным рабочим окружением и акцентом на удобство.', url: 'https://linuxmint.com/download.php', category: 'linux', tags: 'linux mint cinnamon beginner' },
    { name: 'Kali Linux', kind: 'Linux · тестирование безопасности', description: 'Специализированный дистрибутив для тестирования безопасности и цифровой криминалистики.', url: 'https://www.kali.org/get-kali/', category: 'linux', tags: 'kali linux pentest security' },
    { name: 'Tails', kind: 'Linux · приватность', description: 'Live-система, ориентированная на приватность и работу с минимальными следами на компьютере.', url: 'https://tails.net/install/', category: 'linux', tags: 'tails linux privacy live' },
    { name: 'Qubes OS', kind: 'ОС · изоляция окружений', description: 'Операционная система, использующая изоляцию задач в отдельных виртуальных окружениях.', url: 'https://www.qubes-os.org/downloads/', category: 'other', tags: 'qubes os virtualization security' },
    { name: 'Windows 11', kind: 'Microsoft · настольная ОС', description: 'Официальная страница загрузки установочных образов и средств установки Windows.', url: 'https://www.microsoft.com/software-download/windows11', category: 'other', tags: 'windows microsoft operating system' },
    { name: 'FreeBSD', kind: 'BSD · Unix-подобная ОС', description: 'Свободная Unix-подобная операционная система с образами для разных платформ.', url: 'https://www.freebsd.org/where/', category: 'other', tags: 'freebsd bsd unix operating system' },
    { name: 'Parrot OS', kind: 'Linux · безопасность и приватность', description: 'Дистрибутив с домашней редакцией и отдельной редакцией для security-исследований.', url: 'https://www.parrot.sh/', category: 'linux', tags: 'parrot os security privacy home download' },
    { name: 'openSUSE', kind: 'Linux · Leap и Tumbleweed', description: 'Семейство дистрибутивов для настольных систем и серверов: стабильный и rolling-варианты.', url: 'https://get.opensuse.org/', category: 'linux', tags: 'opensuse leap tumbleweed linux download' },
    { name: 'Alpine Linux', kind: 'Linux · лёгкая система', description: 'Компактный дистрибутив на базе musl и BusyBox, часто используемый в контейнерах и серверах.', url: 'https://www.alpinelinux.org/downloads/', category: 'linux', tags: 'alpine linux lightweight containers musl busybox' },
    { name: 'Rocky Linux', kind: 'Linux · серверная система', description: 'Корпоративный Linux-дистрибутив, совместимый с экосистемой Enterprise Linux.', url: 'https://rockylinux.org/download', category: 'linux', tags: 'rocky linux enterprise server download' },
    { name: 'AlmaLinux', kind: 'Linux · серверная система', description: 'Открытый Enterprise Linux-дистрибутив для серверов, облака и рабочих станций.', url: 'https://almalinux.org/get-almalinux/', category: 'linux', tags: 'almalinux enterprise server workstation' },
    { name: 'OpenBSD', kind: 'BSD · безопасность по умолчанию', description: 'Свободная Unix-подобная система с акцентом на корректность кода и встроенные механизмы безопасности.', url: 'https://www.openbsd.org/faq/faq4.html#Download', category: 'other', tags: 'openbsd bsd secure unix download' }
  ]
};

const CATEGORY_LABELS = {
  network: 'СЕТИ',
  web: 'WEB SECURITY',
  osint: 'OSINT',
  analysis: 'АНАЛИЗ',
  learning: 'ОБУЧЕНИЕ',
  linux: 'LINUX',
  other: 'ДРУГИЕ ОС'
};

const state = { filter: 'all', query: '' };

// Subtle monochrome tint cycle for mobile browser chrome. Support varies by browser;
// the page itself stays black. No network access or user data is involved.
const browserThemeColor = document.querySelector('meta[name="theme-color"]');
const browserTints = ['#080808', '#111111', '#191919', '#111111'];
let browserTintIndex = 0;
if (browserThemeColor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    browserTintIndex = (browserTintIndex + 1) % browserTints.length;
    browserThemeColor.setAttribute('content', browserTints[browserTintIndex]);
  }, 6500);
}


// View navigation: only the selected section is visible at a time.
const viewPanels = [...document.querySelectorAll('[data-view-panel]')];
const viewTargets = [...document.querySelectorAll('[data-view-target]')];
const validViews = new Set(viewPanels.map((panel) => panel.dataset.viewPanel));
let activeView = 'home';

function switchView(viewName, options = {}) {
  if (!validViews.has(viewName)) return;
  activeView = viewName;
  document.dispatchEvent(new CustomEvent('sechub:viewchange', { detail: { view: viewName } }));

  for (const panel of viewPanels) {
    const active = panel.dataset.viewPanel === viewName;
    panel.hidden = !active;
    panel.setAttribute('aria-hidden', String(!active));
  }

  for (const control of viewTargets) {
    const active = control.dataset.viewTarget === viewName;
    if (control.getAttribute('role') === 'tab') {
      control.classList.toggle('is-active', active);
      control.setAttribute('aria-selected', String(active));
      control.tabIndex = active ? 0 : -1;
    } else if (control.classList.contains('nav-view')) {
      if (active) control.setAttribute('aria-current', 'page');
      else control.removeAttribute('aria-current');
    }
  }

  if (options.updateHash && window.history?.replaceState) {
    const newHash = viewName === 'home' ? '#top' : `#${viewName}`;
    window.history.replaceState(null, '', newHash);
  }

  if (options.scroll !== false) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}

for (const control of viewTargets) {
  control.addEventListener('click', (event) => {
    if (control instanceof HTMLAnchorElement) event.preventDefault();
    switchView(control.dataset.viewTarget, { updateHash: true });
  });
}

const tabList = document.querySelector('.floating-dock');
if (tabList) {
  tabList.addEventListener('keydown', (event) => {
    const current = event.target.closest('[role="tab"]');
    if (!current) return;
    const tabs = [...tabList.querySelectorAll('[role="tab"]')];
    const currentIndex = tabs.indexOf(current);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    tabs[nextIndex].focus();
    switchView(tabs[nextIndex].dataset.viewTarget, { updateHash: true });
  });
}

const requestedView = window.location.hash.slice(1);
switchView(validViews.has(requestedView) ? requestedView : 'home', { scroll: false });

// The robot tracks the pointer only while the home view is active. It does not
// access sensors, send data, log movement or retain cursor coordinates.
const robot = document.getElementById('cursor-robot');
const robotHead = document.getElementById('robot-head');
const robotPupils = document.getElementById('robot-pupils');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let robotFrame = 0;
let pointerPosition = null;

function resetRobotGaze() {
  pointerPosition = null;
  if (robotFrame) window.cancelAnimationFrame(robotFrame);
  robotFrame = 0;
  if (robotHead) robotHead.style.transform = '';
  if (robotPupils) robotPupils.style.transform = '';
}

document.addEventListener('sechub:viewchange', (event) => {
  if (event.detail?.view !== 'home') resetRobotGaze();
});

function updateRobotGaze() {
  robotFrame = 0;
  if (activeView !== 'home' || !robot || !robotHead || !robotPupils || reducedMotion.matches || !pointerPosition) return;
  const bounds = robot.getBoundingClientRect();
  if (bounds.width === 0 || bounds.height === 0) return;

  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height * 0.43;
  const x = Math.max(-1, Math.min(1, (pointerPosition.x - centerX) / (window.innerWidth * 0.42)));
  const y = Math.max(-1, Math.min(1, (pointerPosition.y - centerY) / (window.innerHeight * 0.55)));
  robotHead.style.transform = `translate(${x * 1.8}px, ${y * 1.2}px) rotate(${x * 6.5 + y * 1.6}deg)`;
  robotPupils.style.transform = `translate(${x * 3.2}px, ${y * 2.4}px)`;
}

if (robot && !reducedMotion.matches) {
  window.addEventListener('pointermove', (event) => {
    if (activeView !== 'home' || event.pointerType === 'touch') return;
    pointerPosition = { x: event.clientX, y: event.clientY };
    if (!robotFrame) robotFrame = window.requestAnimationFrame(updateRobotGaze);
  }, { passive: true });

  window.addEventListener('pointerout', (event) => {
    if (activeView !== 'home' || event.relatedTarget !== null) return;
    pointerPosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    if (!robotFrame) robotFrame = window.requestAnimationFrame(updateRobotGaze);
  }, { passive: true });

  window.addEventListener('blur', resetRobotGaze, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') resetRobotGaze();
  });
  reducedMotion.addEventListener?.('change', (event) => {
    if (event.matches) resetRobotGaze();
  });
}

// Frosted glass cards react subtly to pointer position; values never leave the page.
document.querySelectorAll('.glass-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch' || reducedMotion.matches) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--pointer-x', `${x}%`);
    card.style.setProperty('--pointer-y', `${y}%`);
  }, { passive: true });
  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--pointer-x');
    card.style.removeProperty('--pointer-y');
  }, { passive: true });
});

const gridTargets = {
  tools: document.getElementById('tools-grid'),
  learning: document.getElementById('learning-grid'),
  systems: document.getElementById('systems-grid')
};

function getHost(urlString) {
  try {
    return new URL(urlString).hostname;
  } catch {
    return 'официальный сайт';
  }
}

function createResourceRow(item, index) {
  const article = document.createElement('article');
  article.className = 'resource-card';

  const number = document.createElement('span');
  number.className = 'resource-number';
  number.textContent = String(index + 1).padStart(2, '0');
  number.setAttribute('aria-hidden', 'true');

  const main = document.createElement('div');
  main.className = 'resource-main';
  const titleRow = document.createElement('div');
  titleRow.className = 'resource-title-row';

  const title = document.createElement('h4');
  title.textContent = item.name;
  const kind = document.createElement('span');
  kind.className = 'resource-kind';
  kind.textContent = item.kind;
  titleRow.append(title, kind);

  const description = document.createElement('p');
  description.className = 'resource-description';
  description.textContent = item.description;
  main.append(titleRow, description);

  const foot = document.createElement('div');
  foot.className = 'resource-foot';
  const category = document.createElement('span');
  category.className = 'resource-category';
  category.textContent = CATEGORY_LABELS[item.category] || 'РЕСУРС';
  const domain = document.createElement('span');
  domain.className = 'resource-domain';
  domain.textContent = getHost(item.url);
  let destination;
  try {
    destination = new URL(item.url);
  } catch {
    destination = null;
  }

  if (destination && destination.protocol === 'https:' && destination.hostname) {
    const link = document.createElement('a');
    link.className = 'resource-link';
    link.href = destination.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.referrerPolicy = 'no-referrer';
    link.textContent = 'Открыть ↗';
    link.setAttribute('aria-label', `Открыть ресурс: ${item.name}, новая вкладка`);
    foot.append(category, domain, link);
  } else {
    const unavailable = document.createElement('span');
    unavailable.className = 'resource-link resource-link-disabled';
    unavailable.textContent = 'Ссылка недоступна';
    foot.append(category, domain, unavailable);
  }

  article.append(number, main, foot);
  return article;
}

function resourceMatches(item) {
  const matchesCategory = state.filter === 'all' || item.category === state.filter;
  const searchable = `${item.name} ${item.kind} ${item.description} ${item.tags} ${getHost(item.url)}`.toLocaleLowerCase('ru');
  return matchesCategory && (!state.query || searchable.includes(state.query));
}

function renderResources() {
  let total = 0;
  for (const [group, items] of Object.entries(RESOURCES)) {
    const target = gridTargets[group];
    const visible = items.filter(resourceMatches);
    target.replaceChildren(...visible.map(createResourceRow));
    total += visible.length;
    target.closest('.catalog-section').hidden = visible.length === 0;
  }
  document.getElementById('visible-count').textContent = String(total).padStart(2, '0');
  document.getElementById('empty-state').hidden = total !== 0;
}

function setActiveFilter(filter) {
  state.filter = filter;
  document.querySelectorAll('[data-filter]').forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderResources();
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => setActiveFilter(button.dataset.filter));
});

const searchInput = document.getElementById('resource-search');
searchInput.addEventListener('input', () => {
  state.query = searchInput.value.trim().toLocaleLowerCase('ru');
  renderResources();
});

document.getElementById('reset-search').addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  setActiveFilter('all');
  searchInput.focus();
});

document.addEventListener('keydown', (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
  if (event.key === '/' && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && target === searchInput && searchInput.value) {
    searchInput.value = '';
    state.query = '';
    renderResources();
  }
});

// Password estimate is intentionally approximate and runs only in this tab.
const passwordInput = document.getElementById('password-input');
const strengthFill = document.getElementById('strength-fill');
const strengthLabel = document.getElementById('strength-label');
const strengthScore = document.getElementById('strength-score');
const passwordFeedback = document.getElementById('password-feedback');

function estimatePassword(value) {
  if (!value) return { score: 0, label: 'Ожидание ввода', feedback: 'Не используй настоящий пароль. Для проверки придумай отдельную строку.' };

  const length = Array.from(value).length;
  let score = 0;
  if (length >= 8) score += 1;
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  const hasRepeated = /(.)\1{3,}/u.test(value);
  const hasSequence = /(?:12345|23456|34567|45678|56789|abcdef|qwerty|password)/i.test(value);
  if (hasRepeated || hasSequence) score = Math.max(0, score - 2);

  if (length < 8 || score <= 2) {
    return { score, label: 'Слабый пример', feedback: 'Увеличь длину. Избегай имён, дат, повторов и очевидных последовательностей.' };
  }
  if (score <= 4) {
    return { score, label: 'Средний пример', feedback: 'Попробуй длинную уникальную фразу. Не используй один пароль на разных сайтах.' };
  }
  if (score <= 6) {
    return { score, label: 'Хороший пример', feedback: 'По базовым признакам неплохо. Уникальность важнее набора случайных символов ради оценки.' };
  }
  return { score, label: 'Сильный пример', feedback: 'Хороший результат по простой эвристике. Это не проверка утечек и не гарантия стойкости.' };
}

function updatePasswordEstimate() {
  const result = estimatePassword(passwordInput.value);
  strengthFill.className = `strength-fill score-${result.score}`;
  strengthLabel.textContent = result.label;
  strengthScore.textContent = passwordInput.value ? `${result.score}/7` : '—';
  passwordFeedback.textContent = result.feedback;
}

passwordInput.addEventListener('input', updatePasswordEstimate);
document.getElementById('clear-password').addEventListener('click', () => {
  passwordInput.value = '';
  updatePasswordEstimate();
  passwordInput.focus();
});

// URL parser only. It never opens a URL and never performs a network request.
const urlInput = document.getElementById('url-input');
const urlOutput = document.getElementById('url-output');

function appendUrlRow(list, label, value) {
  const term = document.createElement('dt');
  term.textContent = label;
  const detail = document.createElement('dd');
  detail.textContent = value || '—';
  list.append(term, detail);
}

function analyzeUrl() {
  urlOutput.replaceChildren();
  const raw = urlInput.value.trim();
  if (!raw) {
    const note = document.createElement('p');
    note.className = 'url-warning';
    note.textContent = 'Сначала введи адрес для разбора.';
    urlOutput.append(note);
    return;
  }

  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    const note = document.createElement('p');
    note.className = 'url-warning';
    note.textContent = 'Не удалось разобрать URL. Укажи полный адрес, например https://example.com/path.';
    urlOutput.append(note);
    return;
  }

  if (!['https:', 'http:'].includes(parsed.protocol)) {
    const note = document.createElement('p');
    note.className = 'url-warning';
    note.textContent = 'Поддерживаются только обычные веб-адреса с протоколом HTTP или HTTPS.';
    urlOutput.append(note);
    return;
  }

  const details = document.createElement('dl');
  details.className = 'url-result-grid';
  appendUrlRow(details, 'Протокол', parsed.protocol);
  appendUrlRow(details, 'Домен', parsed.hostname);
  appendUrlRow(details, 'Порт', parsed.port || 'по умолчанию');
  appendUrlRow(details, 'Путь', parsed.pathname);
  appendUrlRow(details, 'Параметры', parsed.search ? 'присутствуют' : 'нет');
  appendUrlRow(details, 'Фрагмент', parsed.hash ? 'присутствует' : 'нет');
  urlOutput.append(details);

  const warnings = [];
  if (parsed.protocol === 'http:') warnings.push('HTTP не защищает содержимое соединения шифрованием.');
  if (parsed.username || parsed.password) warnings.push('В адресе есть данные для входа. Не публикуй и не пересылай такой URL.');
  if (parsed.hostname.toLowerCase().split('.').some((label) => label.startsWith('xn--'))) warnings.push('Домен содержит Punycode. Внимательно проверь написание имени сайта: похожие символы могут вводить в заблуждение.');
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(parsed.hostname) || parsed.hostname.includes(':')) warnings.push('В адресе указан IP-адрес вместо обычного доменного имени. Проверь, ожидаешь ли ты такой адрес.');
  if (parsed.port && !['80', '443'].includes(parsed.port)) warnings.push('Указан нестандартный порт. Проверь адрес и источник ссылки.');
  if (warnings.length) {
    const warningList = document.createElement('ul');
    warningList.className = 'url-warnings';
    warnings.forEach((warning) => {
      const item = document.createElement('li');
      item.textContent = warning;
      warningList.append(item);
    });
    urlOutput.append(warningList);
  } else {
    const note = document.createElement('p');
    note.className = 'url-neutral';
    note.textContent = 'Структура адреса разобрана. Это не означает, что сайт безопасен.';
    urlOutput.append(note);
  }
}

document.getElementById('analyze-url').addEventListener('click', analyzeUrl);
urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') analyzeUrl();
});

document.getElementById('current-year').textContent = String(new Date().getFullYear());
renderResources();

document.getElementById('resource-total').textContent = String(Object.values(RESOURCES).reduce((sum, group) => sum + group.length, 0)).padStart(2, '0');
