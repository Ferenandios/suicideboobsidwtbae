import { StaticImageData } from "next/image";

type descriptionTypeType = "title" | "p" | "ul";

export interface IDescription {
  type: descriptionTypeType;
  text: string[];
}

export interface IGalleryItem {
  id: number;
  image: null | StaticImageData;
}

export interface IService {
  id: number;
  title: string;
  image: null | StaticImageData;
  description: IDescription[];
  layout: string[];
  galleryItems: IGalleryItem[];
  keywords: string;
  isActive: boolean;
}

interface IContacts {
  phones: string[];
  emails: string[];
}

export interface ICrumb {
  id: number;
  text: string;
  link: string;
  isActive: boolean;
}

export interface ISubmit {
  text: string;
  email: string;
  tel: string;
  message: string;
}

export type companyNameType = "ООО «РЕМИКС»";

export interface IState {
  search: string;
  placeholder: string;
  services: IService[];
  currentService: IService;
  burgerIsOpen: boolean;
  contacts: IContacts;
  companyName: companyNameType;
  companyLogo: StaticImageData;
  companyAddress: string;
  colorTheme: string;
  isShowModal: boolean;
  isShowMessage: boolean;
  crumbs: ICrumb[];
  submit: ISubmit;
  currentActiveCrumb: number;
  currentActiveService: null | number;
}
