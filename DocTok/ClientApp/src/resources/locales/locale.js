let locale = {
    tinymceLocale:"ru",

    authentication:{
        login: "Войти",
        register: "Регистрация",
    },

    buttons:{
        submit: "Подтвердить",
        close: "Закрыть",
        automated:"Генерация графика",
        save: "Сохранить",
        delete: "Удалить",
        edit: "Редактировать",
        cancel: "Отмена",
    },

    main:{
        yourProjects: "Ваши проекты",
    },

    menubar:{
        file : 'Файл',
        edit : 'Редактирвание',
        view : 'Вид',
        insert : 'Вставка',
        format : 'Форматирование',
        tools : 'Инструменты',
        table : 'Таблицы',
        help: 'Помощь',
    },

    navigationBar:{
        title: "DocTok",
        main: "Главная",
        projects: "Проекты",
        employees: "Сотрудники",
        calendar: "Календарь",
    },
    
    sideBarElements:{
        addNewPage:"Добавить новую страницу",
        addNewEvent:"Добавить новое событие",
        search:"Поиск",
    },
}

const locale_en = {
    tinymceLocale:"en-US",

    authentication:{
        login: "Login",
        register: "Register",
    },

    buttons:{
        submit: "Submit",
        close: "Close",
        automated:"Shedule generation",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        cancel: "Cancel",
    },

    main:{
        yourProjects: "Your projects",
    },

    menubar:{
        file :'file' ,
        edit :'edit' ,
        view :'view' ,
        insert :'insert', 
        format :'format', 
        tools :'tools' ,
        table :'table' ,
        help: 'help',
    },

    navigationBar:{
        title: "DocTok",
        main: "Main",
        projects: "Projects",
        employees: "Employees",
        calendar: "Calendar",
    },

    sideBarElements:{
        addNewPage:"Add new page",
        addNewEvent:"Add new event",
        search:"Search",
    },
}

var lang = navigator.language || navigator.userLanguage
const langs = ["ru", "ru-RU", "uk", "uk-UA", "ru-UA", "kk", "kk-Cyrl-KZ", "kk-Cyrl", "kk-KZ", "ru-KZ", "be", "be-BY", "ru-BY"];
if (!langs.includes(lang)) {
    //$.extend(true, locale, locale_en)
    locale = locale_en
}

export { locale };