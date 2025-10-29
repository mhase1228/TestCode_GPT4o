import { test, expect } from '@playwright/test';
import { ReservationPage } from '../pages/ReservationPage';

test.describe('宿泊予約フロー', () => {
  test('宿泊プランの選択', async ({ page }) => {
    const reservationPage = new ReservationPage(page);

    // 宿泊プラン一覧画面を開く
    await reservationPage.navigate();

    // 任意のプランを選択
    await reservationPage.selectPlan('スタンダードプラン');

    // 選択したプランの詳細が表示されることを確認
    await expect(page).toHaveURL(/.*plan-detail.*/);
  });

  test('宿泊予約情報の入力', async ({ page }) => {
    const reservationPage = new ReservationPage(page);

    // 宿泊予約画面を開く
    await reservationPage.navigate();

    // 必要な情報を入力
    await reservationPage.fillReservationDetails('2025-11-01', 2, 2);

    // 「予約確認」ボタンをクリック
    await reservationPage.submitReservation();

    // 確認画面に遷移することを確認
    await expect(page).toHaveURL(/.*reservation-confirm.*/);
  });

  test('宿泊予約確認', async ({ page }) => {
    const reservationPage = new ReservationPage(page);

    // 宿泊予約確認画面を開く
    await reservationPage.navigate();

    // 内容を確認し、「予約確定」ボタンをクリック
    await reservationPage.confirmReservation();

    // 予約完了メッセージが表示されることを確認
    await expect(page.locator('text=予約が完了しました')).toBeVisible();
  });
});