export interface Main {
    aboutUs: AboutUs;
    authorOfDay: AuthorOfDay;
}
export interface MainResponse {
    RU: Main;
    EN: Main;
    BEL: Main;
}

interface AboutUs {
    title: string;
    introduction: string;
    aboutLiterature: string;
    aboutPortal: string;
}
interface AuthorOfDay {
    title: string;
    job: string;
    name: string;
    birth: string;
    death: string;
    moreBtn: string;
}
