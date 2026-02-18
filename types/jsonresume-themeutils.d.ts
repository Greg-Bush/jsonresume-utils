declare module 'jsonresume-themeutils' {
  /**
   * Конфигурация Gravatar
   */
  interface GravatarConfig {
    s: string;
    r: string;
    d: string;
  }

  /**
   * Основная конфигурация пакета
   */
  interface Config {
    date_format: string;
    gravatar: GravatarConfig;
  }

  /**
   * Опции для настройки конфигурации
   */
  interface ConfigOptions {
    date_format?: string;
    gravatar?: Partial<GravatarConfig>;
  }

  /**
   * Профиль социальной сети
   */
  interface Profile {
    network: string;
    username: string;
    url: string;
  }

  /**
   * Локация
   */
  interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  }

  /**
   * Базовая информация о кандидате
   */
  interface Basics {
    name: string;
    label: string;
    picture: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    location: Location;
    profiles: Profile[];
  }

  /**
   * Опыт работы
   */
  interface Work {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }

  /**
   * Волонтерство
   */
  interface Volunteer {
    organization: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }

  /**
   * Образование
   */
  interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses: string[];
  }

  /**
   * Награды
   */
  interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }

  /**
   * Публикации
   */
  interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    website: string;
    summary: string;
  }

  /**
   * Навыки
   */
  interface Skill {
    name: string;
    level: string;
    keywords: string[];
  }

  /**
   * Языки
   */
  interface Language {
    language: string;
    fluency: string;
  }

  /**
   * Интересы
   */
  interface Interest {
    name: string;
    keywords: string[];
  }

  /**
   * Рекомендации
   */
  interface Reference {
    name: string;
    reference: string;
  }

  /**
   * Структура резюме (JSON Resume schema)
   */
  interface Resume {
    basics: Basics;
    work?: Work[];
    volunteer?: Volunteer[];
    education?: Education[];
    awards?: Award[];
    publications?: Publication[];
    skills?: Skill[];
    languages?: Language[];
    interests?: Interest[];
    references?: Reference[];
  }

  /**
   * Объект длительности (moment.Duration)
   */
  interface Duration {
    _milliseconds: number;
    _days: number;
    _months: number;
    _data: {
      milliseconds: number;
      seconds: number;
      minutes: number;
      hours: number;
      days: number;
      months: number;
      years: number;
    };
    years(): number;
    months(): number;
    days(): number;
    hours(): number;
    minutes(): number;
    seconds(): number;
    milliseconds(): number;
    asDays(): number;
    asHours(): number;
    asMinutes(): number;
    asSeconds(): number;
    asMilliseconds(): number;
  }

  /**
   * Переопределить конфигурацию по умолчанию
   * @param opts - Опции конфигурации
   */
  export function setConfig(opts?: ConfigOptions): void;

  /**
   * Возвращает URL фотографии профиля из resume.basics.picture,
   * или генерирует Gravatar URL из email
   * @param resume - Объект резюме
   * @returns URL изображения
   */
  export function getUrlForPicture(resume: Resume): string;

  /**
   * Возвращает информацию о профиле для указанной социальной сети
   * @param resume - Объект резюме
   * @param network - Название сети (например, 'twitter', 'github')
   * @returns Объект профиля или undefined
   */
  export function getProfile(resume: Resume, network: string): Profile | undefined;

  /**
   * Возвращает URL для профиля социальной сети
   * @param resume - Объект резюме
   * @param network - Название сети
   * @returns URL профиля или undefined
   */
  export function getUrlForProfile(resume: Resume, network: string): string | undefined;

  /**
   * Форматирует дату согласно указанному формату
   * @param date - Дата в формате YYYY-MM-DD
   * @param date_format - Формат вывода (по умолчанию из config)
   * @returns Отформатированная дата
   */
  export function getFormattedDate(date: string, date_format?: string): string;

  /**
   * Возвращает длительность между двумя датами
   * @param start_date - Дата начала (YYYY-MM-DD)
   * @param end_date - Дата окончания (YYYY-MM-DD)
   * @param humanize - Если true, возвращает читаемую строку
   * @returns Объект Duration или строка (если humanize=true)
   */
  export function getDuration(
    start_date: string,
    end_date: string,
    humanize?: boolean
  ): Duration | string;

  /**
   * Возвращает объект родного языка из резюме
   * @param resume - Объект резюме
   * @returns Объект языка или undefined
   */
  export function getNativeLanguage(resume: Resume): Language | undefined;
}