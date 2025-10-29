import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://hotel-example-site.takeyaqa.dev/ja/index.html');
  }

  async clickHomeLink() {
    await this.page.click('nav >> text=ホーム');
  }

  async clickReservationLink() {
    await this.page.click('nav >> text=宿泊予約');
  }

  async clickRegisterLink() {
    await this.page.click('nav >> text=会員登録');
  }

  async clickLoginLink() {
    await this.page.click('nav >> text=ログイン');
  }
}