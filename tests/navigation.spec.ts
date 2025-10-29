import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('ナビゲーションメニューの動作確認', () => {
  test('ホームリンクの確認', async ({ page }) => {
    const homePage = new HomePage(page);

    // トップページを開く
    await homePage.navigate();

    // ナビゲーションメニューの「ホーム」をクリック
    await homePage.clickHomeLink();

    // ホームページに遷移することを確認
    await expect(page).toHaveURL('https://hotel-example-site.takeyaqa.dev/ja/index.html');
  });

  test('宿泊予約リンクの確認', async ({ page }) => {
    const homePage = new HomePage(page);

    // トップページを開く
    await homePage.navigate();

    // ナビゲーションメニューの「宿泊予約」をクリック
    await homePage.clickReservationLink();

    // 宿泊プラン一覧画面に遷移することを確認
    await expect(page).toHaveURL(/.*plans.*/);
  });

  test('会員登録リンクの確認', async ({ page }) => {
    const homePage = new HomePage(page);

    // トップページを開く
    await homePage.navigate();

    // ナビゲーションメニューの「会員登録」をクリック
    await homePage.clickRegisterLink();

    // 会員登録画面に遷移することを確認
    await expect(page).toHaveURL(/.*signup.*/);
  });

  test('ログインボタンの確認', async ({ page }) => {
    const homePage = new HomePage(page);

    // トップページを開く
    await homePage.navigate();

    // ナビゲーションメニューの「ログイン」をクリック
    await homePage.clickLoginLink();

    // ログイン画面が表示されることを確認
    await expect(page).toHaveURL(/.*login.*/);
  });
});