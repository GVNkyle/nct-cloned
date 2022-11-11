import { Injectable } from '@angular/core';
import { Block, Confirm, Loading, Notify, Report } from 'notiflix';

@Injectable({ providedIn: 'root' })
export class NgxNotiflixService {
  private okButton: string = 'OK';
  private cancelButton: string = 'Cancel';
  private loadingType: string = 'standard';
  private loadingColor: string = '#fff';
  private loadingSvgUrl: string | null = null;

  init = (custom?: NotiflixCustom): void => {
    this.okButton = custom?.okButton || 'OK';
    this.cancelButton = custom?.cancelButton || 'Cancel';
    this.loadingType = custom?.loadingType || 'standard';
    this.loadingColor = custom?.loadingColor || '#fff';
    this.loadingSvgUrl = custom?.loadingSvgUrl || null;

    Notify.init({
      pauseOnHover: true,
      clickToClose: true,
      fontSize: '16px',
      success: { notiflixIconColor: '#fff' },
      failure: { notiflixIconColor: '#fff' },
      warning: { notiflixIconColor: '#000', textColor: '#000' },
      info: { notiflixIconColor: '#000', textColor: '#000' },
    });

    Confirm.init({
      titleColor: '#ff5549',
      titleFontSize: '20px',
      messageFontSize: '16px',
      okButtonBackground: '#ff5549',
    });

    Loading.init({
      customSvgUrl: this.loadingSvgUrl,
      svgColor: this.loadingColor,
      svgSize: '128px',
    });

    Report.init({
      success: { backOverlayColor: 'rgba(0,0,0,0.5)' },
      failure: { backOverlayColor: 'rgba(0,0,0,0.5)' },
      warning: { backOverlayColor: 'rgba(0,0,0,0.5)', buttonColor: '#000' },
      info: { backOverlayColor: 'rgba(0,0,0,0.5)', buttonColor: '#000' },
    });

    Block.init({
      svgSize: '128px',
    });
  }

  /* --------------------------------- Notify --------------------------------- */

  success = (message: string): void => {
    Notify.success(message);
  }

  error = (message: string): void => {
    Notify.failure(message);
  }

  warning = (message: string): void => {
    Notify.warning(message);
  }

  info = (message: string): void => {
    Notify.info(message);
  }

  /* --------------------------------- Confirm --------------------------------- */

  confirm = (title: string, message: string, okButtonCallback: () => void, cancelButtonCallback?: () => void): void => {
    Confirm.show(title, message, this.okButton, this.cancelButton, okButtonCallback, cancelButtonCallback);
  }

  ask = (title: string, question: string, answer: string, okButtonCallback?: () => void, cancelButtonCallback?: () => void): void => {
    Confirm.ask(title, question, answer, this.okButton, this.cancelButton, okButtonCallback, cancelButtonCallback);
  }

  prompt = (title: string, question: string, defaultAnswer: string, okButtonCallback?: (clientAnswer: string) => void, cancelButtonCallback?: (clientAnswer: string) => void): void => {
    Confirm.prompt(title, question, defaultAnswer, this.okButton, this.cancelButton, okButtonCallback, cancelButtonCallback);
  }

  /* --------------------------------- Loading --------------------------------- */

  showLoading = (): void => {
    switch (this.loadingType) {
      case 'hourglass':
        Loading.hourglass();
        break;

      case 'circle':
        Loading.circle();
        break;

      case 'arrows':
        Loading.arrows();
        break;

      case 'dots':
        Loading.dots();
        break;

      case 'pulse':
        Loading.pulse();
        break;

      case 'custom':
        Loading.custom();
        break;

      default:
        Loading.standard();
        break;
    }
  }

  hideLoading = (): void => {
    Loading.remove();
  }

  /* --------------------------------- Report --------------------------------- */

  successReport = (title: string, message: string, callback?: () => void): void => {
    Report.success(title, message, this.okButton, callback);
  }

  errorReport = (title: string, message: string, callback?: () => void): void => {
    Report.failure(title, message, this.okButton, callback);
  }

  infoReport = (title: string, message: string, callback?: () => void): void => {
    Report.info(title, message, this.okButton, callback);
  }

  warningReport = (title: string, message: string, callback?: () => void): void => {
    Report.warning(title, message, this.okButton, callback);
  }

  /* ---------------------------------- Block --------------------------------- */

  showBlock = (el: string | HTMLElement[] | NodeListOf<HTMLElement>): void => {
    switch (this.loadingType) {
      case 'hourglass':
        Block.hourglass(el);
        break;

      case 'circle':
        Block.circle(el);
        break;

      case 'arrows':
        Block.arrows(el);
        break;

      case 'dots':
        Block.dots(el);
        break;

      case 'pulse':
        Block.pulse(el);
        break;

      default:
        Block.standard(el);
        break;
    }
  }

  hideBlock = (el: string | HTMLElement[] | NodeListOf<HTMLElement>): void => {
    Block.remove(el);
  }
}

export interface NotiflixCustom {
  okButton?: string;
  cancelButton?: string;
  loadingSvgUrl?: string;
  loadingType?: 'standard' | 'hourglass' | 'circle' | 'arrows' | 'dots' | 'pulse' | 'custom';
  loadingColor?: string;
}