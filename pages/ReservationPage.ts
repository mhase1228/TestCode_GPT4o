import { Page } from '@playwright/test';

export class ReservationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://hotel-example-site.takeyaqa.dev/ja/reservation.html');
  }

  async selectPlan(planName: string) {
    await this.page.click(`text="${planName}"`);
  }

  async fillReservationDetails(checkInDate: string, nights: number, guests: number) {
    await this.page.fill('#checkin-date', checkInDate);
    await this.page.fill('#stay-nights', nights.toString());
    await this.page.fill('#guest-count', guests.toString());
  }

  async submitReservation() {
    await this.page.click('text=予約確認');
  }

  async confirmReservation() {
    await this.page.click('button:has-text("予約確定")');
  }
}